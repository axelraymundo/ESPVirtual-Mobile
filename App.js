import React, {useEffect, useState,useRef} from 'react';
import {Text, Platform, SafeAreaView,StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';

import StaticServer from 'react-native-static-server';
import RNFS from 'react-native-fs';
import Orientation from 'react-native-orientation-locker';

import {copyModulePaths} from './Utils/copyModulePaths';

function MyWebComponent() {

  const [url, setUrl] = useState('');
  const getPath = () => {
    return Platform.OS === 'android'
      ? RNFS.DocumentDirectoryPath + '/www'
      : RNFS.MainBundlePath + '/www';
  };
  const webviewRef =useRef(null)
  useEffect(()=>{
    if(Platform.isPad ||Platform.OS==="ios"){
    const isPad = Platform.isPad;
    console.log(Platform.OS,"WTF : ", isPad)
      Orientation.lockToLandscape();}
  },[])
  
  useEffect(() => {
    copyModulePaths();
    const path = getPath();
    const server = new StaticServer(8080, path);
    server.start().then(url => {
      console.log('URL : ', url);
      setUrl(url);
    });
  }, []);

  if (!url) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
                <StatusBar hidden/>

        <Text>LOADING....</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden/>
      <WebView
        ref={webviewRef}
        source={{uri: url}}
        scalesPageToFit={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEnabled={false}
        javaScriptEnabled={true}
        startInLoadingState
        originWhitelist={['*']}
        onContentProcessDidTerminate={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('Content process terminated, reloading', nativeEvent);
          webviewRef.current.reload()
        }}
      />
    </SafeAreaView>
  );
}

export default MyWebComponent;
