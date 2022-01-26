import React, {useEffect, useState} from 'react';
import {Text, Platform, SafeAreaView, View} from 'react-native';
import {WebView} from 'react-native-webview';

import StaticServer from 'react-native-static-server';
import RNFS from 'react-native-fs';
import { copyModulePaths } from './Utils/copyModulePaths';
function MyWebComponent() {
  const [url, setUrl] = useState('');
  const getPath = () => {
    return Platform.OS === 'android'
      ? RNFS.DocumentDirectoryPath + '/www'
      : RNFS.MainBundlePath + '/www';
  };

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
        <Text>LOADING....</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{uri: url}}
        scalesPageToFit={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEnabled={false}
        javaScriptEnabled={true}
        startInLoadingState
        originWhitelist={['*']}
      />
    </SafeAreaView>
  );
}

export default MyWebComponent;
