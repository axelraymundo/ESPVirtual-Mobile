import React, {useEffect, useState} from 'react';
import {Text, Platform, SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

import StaticServer from 'react-native-static-server';
import RNFS from 'react-native-fs';

function MyWebComponent() {
  const [url, setUrl] = useState('');
  const getPath = () => {
    return Platform.OS === 'android'
      ? RNFS.DocumentDirectoryPath + '/www'
      : RNFS.MainBundlePath + '/www';
  };

  const copyAndroidFiles = async () => {
    const assets = `/www/assets`;
    const images = `${assets}/images`;
    const interior = `${images}/interior`;
    if (Platform.OS === 'android') {
      await RNFS.mkdir(RNFS.DocumentDirectoryPath + '/www/js');
      await RNFS.mkdir(RNFS.DocumentDirectoryPath + '/www/css');
      await RNFS.mkdir(RNFS.DocumentDirectoryPath + `/www/assets/audio/sfx`);
      await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${assets}/fonts`);
      await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${images}/building`);
      await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${interior}`);
      await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${interior}/economiczone`);
      await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${interior}/house`);
      await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${interior}/mall`);
      await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${interior}/office`);
      await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${images}/sprite`);
      await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${images}/ui`);
      await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${assets}/strings`);
      var assets2 = assets.substring(1);
      var images2 = images.substring(1);
      var interior2 = interior.substring(1);

      const files = [
        //primary
        'www/index.html',
        'www/js/game.js',
        'www/css/game.css',

        //audio
        `${assets2}/audio/sfx/sfx_generic_button.mp3`,
        `${assets2}/audio/sfx/sfx_generic_button.ogg`,

        //fonts
        `${assets2}/fonts/nunito_72_0.png`,
        `${assets2}/fonts/nunito_72.fnt`,

        //building
        `${images2}/building/cityhall_temp.png`,
        `${images2}/building/economic_zone_temp.png`,
        `${images2}/building/economical_temp.png`,
        `${images2}/building/embassy_temp.png`,
        `${images2}/building/game_temp.png`,
        `${images2}/building/GF_temp.png`,
        `${images2}/building/house_temp.png`,
        `${images2}/building/mall_temp.png`,
        `${images2}/building/office_temp.png`,
        `${images2}/building/Parkinglot_temp.png`,
        `${images2}/building/seaport_temp.png`,
        `${images2}/building/wattmatters_temp.png`,

        //interior economic zone
        `${interior2}/economiczone/ecopark_temp.png`,
        `${interior2}/economiczone/garageparking_temp.png`,
        `${interior2}/economiczone/intro_temp.png`,
        `${interior2}/economiczone/mechanicalhub_temp.png`,
        `${interior2}/economiczone/offices_temp.png`,
        `${interior2}/economiczone/processinghub_temp.png`,
        `${interior2}/economiczone/pumproombooster.png`,
        `${interior2}/economiczone/warehouse_temp.png`,
        `${interior2}/economiczone/wastedisposal_temp.png`,

        //house
        `${interior2}/house/house_bathroom_temp.png`,
        `${interior2}/house/house_bedroom_temp.png`,
        `${interior2}/house/house_Garden_temp.png`,
        `${interior2}/house/house_kitchen_temp.png`,
        `${interior2}/house/house_living_temp.png`,
        `${interior2}/house/house_outside_temp.png`,
        `${interior2}/house/kitchen_temp.png`,

        //mall
        `${interior2}/mall/bathroom_temp.png`,
        `${interior2}/mall/central_temp.png`,
        `${interior2}/mall/displayarea_temp.png`,
        `${interior2}/mall/foodcourt_temp.png`,
        `${interior2}/mall/intro_mall_temp.png`,

        //office
        `${interior2}/office/conference_temp.png`,
        `${interior2}/office/cubicle_areas_temp.png`,
        `${interior2}/office/elevators_temp.png`,
        `${interior2}/office/intro_office_temp.png`,
        `${interior2}/office/pantry_temp.png`,
        `${interior2}/office/personal_temp.png`,
        `${interior2}/office/reception_temp.png`,
        `${interior2}/office/restroom_temp.png`,

        //others on interior
        `${interior2}/obj_temp.png`,
        `${interior2}/roominterior_sample_2.png`,
        `${interior2}/roominterior_sample_3.png`,
        `${interior2}/roominterior_sample.png`,
        `${interior2}/temppop.png`,

        //sprite
        `${images2}/sprite/arrow_left.png`,
        `${images2}/sprite/arrow_Right.png`,
        `${images2}/sprite/female.png`,
        `${images2}/sprite/testbuilding.png`,
        `${images2}/sprite/testbuilding2.png`,

        //ui
        `${images2}/ui/arrow_left_temp.png`,
        `${images2}/ui/arrow_left.png`,
        `${images2}/ui/arrow_right_temp.png`,
        `${images2}/ui/arrow_Right.png`,
        `${images2}/ui/ArrowLeft.png`,
        `${images2}/ui/ArrowRight.png`,
        `${images2}/ui/btn_close_temp.png`,
        `${images2}/ui/btn_general.png`,
        `${images2}/ui/btnClose_100.png`,
        `${images2}/ui/closeButton_temp.png`,
        `${images2}/ui/ctn_Box.png`,
        `${images2}/ui/ctn_popup_dark.png`,
        `${images2}/ui/ctn_popup.png`,
        `${images2}/ui/ctn_rank_blank.png`,
        `${images2}/ui/ctn_separator_label.png`,
        `${images2}/ui/darkback.png`,
        `${images2}/ui/info_temp.png`,

        //strings
        `${assets2}/strings/locale_en_us.json`,
      ];
      await files.forEach(async file => {
        await RNFS.copyFileAssets(
          file,
          RNFS.DocumentDirectoryPath + '/' + file,
        );
      });
    }
  };
  useEffect(() => {
    copyAndroidFiles();
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
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>LOADING....</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{uri: url}}
        javaScriptEnabled={true}
        scalesPageToFit
        startInLoadingState
        originWhitelist={['*']}
      />
    </SafeAreaView>
  );
}

export default MyWebComponent;
