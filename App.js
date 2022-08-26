import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  Platform,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import {WebView} from 'react-native-webview';

import StaticServer from 'react-native-static-server';
import RNFS from 'react-native-fs';
import Orientation from 'react-native-orientation-locker';

import {copyModulePaths} from './Utils/copyModulePaths';
import * as Services from './Utils/Services';
function MyWebComponent() {
  const [url, setUrl] = useState('');
  const getPath = () => {
    return Platform.OS === 'android'
      ? RNFS.DocumentDirectoryPath + '/www'
      : RNFS.MainBundlePath + '/www';
  };
  const webviewRef = useRef(null);
  useEffect(() => {
    if (Platform.isPad || Platform.OS === 'ios') {
      const isPad = Platform.isPad;
      console.log(Platform.OS, 'WTF : ', isPad);
      Orientation.lockToLandscape();
    }
  }, []);

  useEffect(() => {
    copyModulePaths();
    const path = getPath();
    const server = new StaticServer(8080, path);
    server.start().then(url => {
      console.log('URL : ', url);
      setUrl(url);
    });
  }, []);

  const onMessage = e => {
    // window.alert(e.nativeEvent.data);

    if (e.nativeEvent.data === 'initial') {
      console.log('initial trigger');
      Services.retrieveData('logged_in').then(res => {
        console.log('initial load', res);
        if (res) {
          if (webviewRef.current) {
            setTimeout(() => {
              webviewRef.current.injectJavaScript('window.skipLogin()');
            }, 4000);
          }
        }
      });
    } else if (e.nativeEvent.data === 'login_success') {
      console.log('login trigger');
      Services.storeData('logged_in', true);
    } else if (e.nativeEvent.data === 'sign_out') {
      console.log('logout trigger');
      Services.storeData('logged_in', false);
    }
  };

  if (!url) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <StatusBar hidden />

        <Text>LOADING....</Text>
      </SafeAreaView>
    );
  }

  return (
    <KeyboardAvoidingView style={{flex: 1}} removeClippedSubviews>
      <StatusBar hidden />
      <WebView
        ref={webviewRef}
        onMessage={onMessage}
        mixedContentMode="compatibility"
        source={{uri: url}}
        scalesPageToFit={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEnabled={false}
        javaScriptEnabled={true}
        startInLoadingState
        originWhitelist={['*']}
      />
    </KeyboardAvoidingView>
  );
}

export default MyWebComponent;
