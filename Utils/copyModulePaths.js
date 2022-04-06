import RNFS from 'react-native-fs';
import {Platform} from 'react-native';

export const copyModulePaths = async () => {
  const assets = `/www/assets`;
  const images = `${assets}/images`;
  const interior = `${images}/interior`;
  if (Platform.OS === 'android') {
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + '/www/js');
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + '/www/css');
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `/www/assets/audio/sfx`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `/www/assets/audio/sfxwav`);
    await RNFS.mkdir(
      RNFS.DocumentDirectoryPath + `/www/assets/audio/sfx/quiz_engine`,
    );
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${assets}/fonts`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${assets}/htmltext`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${assets}/htmlfile`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${images}/building`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${images}/building/labels`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${interior}/economiczone`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${interior}/embassy`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${interior}/enerhiyangatin`);
    await RNFS.mkdir(
      RNFS.DocumentDirectoryPath + `${interior}/governmentcenter`,
    );

    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${interior}/house`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${interior}/mall`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${interior}/office`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${interior}/parking`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${interior}/plaza`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${interior}/school`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${interior}/seaport`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${interior}/seaport/clip`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${interior}/seaport/lgu`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${interior}/seaport/lgu/default`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${interior}/seaport/lgu/batangas`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${interior}/seaport/lgu/batangascity`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${interior}/seaport/lgu/cagayan`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${interior}/seaport/lgu/iloilo`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${interior}/seaport/lgu/tagum`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${interior}/seaport/sticker`);

    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${images}/quiz_engine/bg`);
    await RNFS.mkdir(
      RNFS.DocumentDirectoryPath + `${images}/quiz_engine/image`,
    );
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${images}/quiz_engine/ui`);
    await RNFS.mkdir(
      RNFS.DocumentDirectoryPath + `${images}/quiz_engine/ui/confetti`,
    );
    await RNFS.mkdir(
      RNFS.DocumentDirectoryPath + `${images}/quiz_engine/ui/settings`,
    );

    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${images}/sprite`);

    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${images}/ui/aboutus`);

    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${images}/ui/characters`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${images}/ui/exit_button`);

    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${images}/ui/internalpopup`);

    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${images}/ui/intropopup`);
    await RNFS.mkdir(
      RNFS.DocumentDirectoryPath + `${images}/ui/left_container`,
    );
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${images}/ui/load`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${images}/ui/login`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${images}/ui/recovery`);

    await RNFS.mkdir(
      RNFS.DocumentDirectoryPath + `${images}/ui/right_container`,
    );
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${images}/ui/shadow`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${images}/ui/settings`);
    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${images}/ui/tutorial`);

    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${assets}/strings`);
    await RNFS.mkdir(
      RNFS.DocumentDirectoryPath + `${assets}/strings/quiz_engine`,
    );

    await RNFS.mkdir(RNFS.DocumentDirectoryPath + `${assets}/video/testvideo`);

    var assets2 = assets.substring(1);
    var images2 = images.substring(1);
    var interior2 = interior.substring(1);

    const files = [
      //primary
      'www/index.html',
      'www/js/game.js',
      'www/js/game.js.map',
      'www/js/PlayFabClientApi.js',
      'www/css/game.css',

      //audio
      `${assets2}/audio/sfx/sfx_generic_button.mp3`,
      `${assets2}/audio/sfx/sfx_generic_button.ogg`,

      `${assets2}/audio/HoppityBop.wav`,
      `${assets2}/audio/RoundaboutMix.wav`,

      //audio quiz engine
      `${assets2}/audio/sfx/quiz_engine/sfx_complete.mp3`,
      `${assets2}/audio/sfx/quiz_engine/sfx_correct.mp3`,
      `${assets2}/audio/sfx/quiz_engine/sfx_generic_button.mp3`,
      `${assets2}/audio/sfx/quiz_engine/sfx_generic_button.ogg`,
      `${assets2}/audio/sfx/quiz_engine/sfx_incorrect.mp3`,
      `${assets2}/audio/sfx/quiz_engine/sfx_shuffle.mp3`,

      //audio quiz engine
      `${assets2}/audio/sfxwav/sfx_complete.wav`,
      `${assets2}/audio/sfxwav/sfx_correct.wav`,
      `${assets2}/audio/sfxwav/sfx_generic_button.wav`,
      `${assets2}/audio/sfxwav/sfx_incorrect.wav`,
      `${assets2}/audio/sfxwav/sfx_shuffle.wav`,

      //fonts
      `${assets2}/fonts/lato-black_0.png`,
      // `${assets2}/fonts/Lato-Black.fnt`,
      // `${assets2}/fonts/Lato-Black.png`,
      `${assets2}/fonts/Lato-Black.ttf`,
      `${assets2}/fonts/lato-bold_0.png`,
      `${assets2}/fonts/lato-bold.fnt`,
      `${assets2}/fonts/lato-heavy_0.png`,
      `${assets2}/fonts/lato-heavy.fnt`,
      // `${assets2}/fonts/Lato-Heavy.ttf_0.png`,
      // `${assets2}/fonts/Lato-Heavy.ttf.fnt`,
      `${assets2}/fonts/lato-regular_0.png`,
      `${assets2}/fonts/lato-regular.fnt`,
      // `${assets2}/fonts/lato-regular.ttf`,
      `${assets2}/fonts/Lato-Regular.ttf`,
      // `${assets2}/fonts/Lato-Thin.ttf`,
      // `${assets2}/fonts/Lato.fnt`,
      `${assets2}/fonts/latoblack.fnt`,
      `${assets2}/fonts/latoblack.png`,
      // `${assets2}/fonts/latoblack.ttf`,
      `${assets2}/fonts/latobold.fnt`,
      `${assets2}/fonts/latobold.png`,
      `${assets2}/fonts/latoreg.fnt`,
      `${assets2}/fonts/latoreg.png`,
      `${assets2}/fonts/latoreg2.fnt`,
      `${assets2}/fonts/latoreg2.png`,
      `${assets2}/fonts/latoregular.ttf`,
      // `${assets2}/fonts/nunito_72 copy.fnt`,
      `${assets2}/fonts/nunito_72_0.png`,
      `${assets2}/fonts/nunito_72.fnt`,
      // `${assets2}/fonts/webfont.js`,

      //htmlfile
      // `${assets2}/htmlfile/userregister.html`,
      // `${assets2}/htmlfile/vidviewer.html`,

      //htmltext
      `${assets2}/htmltext/userregister.html`,

      //building labels
      `${images2}/building/labels/city_hall_button.png`,
      `${images2}/building/labels/doe_building_button.png`,
      `${images2}/building/labels/economic_zone_button.png`,
      `${images2}/building/labels/embassy_button.png`,
      `${images2}/building/labels/enerhiyang_atin.png`,
      `${images2}/building/labels/government_hub_button.png`,
      `${images2}/building/labels/knowledge_hub_button.png`,
      `${images2}/building/labels/mall_button.png`,
      `${images2}/building/labels/office_button.png`,
      `${images2}/building/labels/park_button.png`,
      `${images2}/building/labels/parking_lot_button.png`,
      `${images2}/building/labels/plaza_button.png`,
      `${images2}/building/labels/residential_button.png`,
      `${images2}/building/labels/school_button.png`,
      `${images2}/building/labels/seaport_button.png`,
      `${images2}/building/labels/transport_hub_button.png`,

      //building
      `${images2}/building/bgblack_Circle.png`,
      // `${images2}/building/cityhall_temp.png`,
      `${images2}/building/court.png`,
      // `${images2}/building/economic_zone_temp.png`,
      // `${images2}/building/Economical_temp.png`,
      // `${images2}/building/economical_temp.png`,
      `${images2}/building/economical_zone.png`,
      // `${images2}/building/embassy_temp.png`,
      `${images2}/building/embassy.png`,
      // `${images2}/building/external_map_1.png`,
      // `${images2}/building/external_map_20210312.jpg`,
      // `${images2}/building/external_map_20210312.png`,
      // `${images2}/building/external_map.jpg`,
      `${images2}/building/external_map.png`,
      // `${images2}/building/external_map1.png`,
      // `${images2}/building/game_temp.png`,
      // `${images2}/building/GF_temp.png`,
      // `${images2}/building/gov_hub_knowledge_hub_embassy.png`,
      // `${images2}/building/government_building.png`,
      `${images2}/building/government_hub.png`,
      // `${images2}/building/house_temp.png`,
      `${images2}/building/knowledge_hub.png`,
      // `${images2}/building/mall_temp.png`,
      `${images2}/building/mall.png`,
      // `${images2}/building/office_temp.png`,
      `${images2}/building/office.png`,
      // `${images2}/building/parking_lot.png`,
      `${images2}/building/parking.png`,
      // `${images2}/building/Parkinglot_temp.png`,
      `${images2}/building/plaza.png`,
      `${images2}/building/residence.png`,
      // `${images2}/building/residential.png`,
      `${images2}/building/school.png`,
      // `${images2}/building/seaport_temp.png`,
      `${images2}/building/seaport.png`,
      // `${images2}/building/wattmatters_temp.png`,

      //interior economic zone
      // `${interior2}/economiczone/1.jpg`,
      // `${interior2}/economiczone/ecopark_zone_intro.jpg`,
      // `${interior2}/economiczone/ecopark_temp.png`,
      `${interior2}/economiczone/garage.jpg`,
      // `${interior2}/economiczone/garage.png`,
      // `${interior2}/economiczone/garageparking_temp.png`,
      // `${interior2}/economiczone/intro_temp.png`,
      `${interior2}/economiczone/intro.jpg`,
      // `${interior2}/economiczone/intro.png`,
      `${interior2}/economiczone/mechanical_hub.jpg`,
      // `${interior2}/economiczone/mechanical_hub.png`,
      // `${interior2}/economiczone/mechanicalhub_temp.png`,
      `${interior2}/economiczone/office.jpg`,
      // `${interior2}/economiczone/office.png`,
      // `${interior2}/economiczone/offices_temp.png`,
      `${interior2}/economiczone/park.jpg`,
      // `${interior2}/economiczone/processing_hub.jpg`,
      // `${interior2}/economiczone/processing_hub.png`,
      // `${interior2}/economiczone/processinghub_temp.png`,
      `${interior2}/economiczone/pump_room_booster.jpg`,
      // `${interior2}/economiczone/pump_room_booster.png`,
      `${interior2}/economiczone/pumping_room.jpg`,
      // `${interior2}/economiczone/pumproombooster.png`,
      // `${interior2}/economiczone/warehouse_temp.png`,
      `${interior2}/economiczone/warehouse.jpg`,
      // `${interior2}/economiczone/warehouse.png`,
      // `${interior2}/economiczone/wastedisposal_temp.png`,
      `${interior2}/economiczone/water_disposal.jpg`,
      // `${interior2}/economiczone/water_disposal.png`,

      //interior embassy
      `${interior2}/embassy/embassy_intro.jpg`,
      `${interior2}/embassy/embassy_office.jpg`,
      // `${interior2}/embassy/office.jpg`,

      //interior enerhiyangatin
      `${interior2}/enerhiyangatin/front_desk.png`,
      `${interior2}/enerhiyangatin/intro.jpg`,
      `${interior2}/enerhiyangatin/library.jpg`,
      `${interior2}/enerhiyangatin/office.jpg`,
      `${interior2}/enerhiyangatin/parking_space.jpg`,

      //interior governmentcenter
      `${interior2}/governmentcenter/backdrop_front_desk.png`,
      `${interior2}/governmentcenter/desk_front_desk.png`,
      // `${interior2}/governmentcenter/front_desk.png`,
      `${interior2}/governmentcenter/intro.png`,
      `${interior2}/governmentcenter/library.png`,
      `${interior2}/governmentcenter/office.png`,
      `${interior2}/governmentcenter/parking_space.jpg`,

      //interior house
      `${interior2}/house/bathroom.jpg`,
      `${interior2}/house/bedroom.jpg`,
      `${interior2}/house/garden.jpg`,
      // `${interior2}/house/house_bathroom_temp.png`,
      // `${interior2}/house/house_bedroom_temp.png`,
      // `${interior2}/house/house_Garden_temp.png`,
      // `${interior2}/house/house_kitchen_temp.png`,
      // `${interior2}/house/house_living_temp.png`,
      // `${interior2}/house/house_outside_temp.png`,
      // `${interior2}/house/intro_darkened.jpg`,
      `${interior2}/house/intro.jpg`,
      // `${interior2}/house/kitchen_temp.png`,
      `${interior2}/house/kitchen.jpg`,
      `${interior2}/house/living_room.jpg`,
      // `${interior2}/house/livingroom.jpg`,

      //interior mall
      // `${interior2}/mall/bathroom_temp.png`,
      `${interior2}/mall/central_open_area.jpg`,
      // `${interior2}/mall/central_temp.png`,
      `${interior2}/mall/display_area.jpg`,
      // `${interior2}/mall/displayarea_temp.png`,
      // `${interior2}/mall/foodcourt_temp.png`,
      `${interior2}/mall/foodcourt.jpg`,
      // `${interior2}/mall/intro_mall_temp.png`,
      `${interior2}/mall/mall_intro.jpg`,
      `${interior2}/mall/restroom.jpg`,

      //interior office
      `${interior2}/office/conference_room.jpg`,
      // `${interior2}/office/conference_temp.png`,
      // `${interior2}/office/cubicle_areas_temp.png`,
      `${interior2}/office/cubicle.jpg`,
      `${interior2}/office/elevator.jpg`,
      // `${interior2}/office/elevators_temp.png`,
      // `${interior2}/office/intro_office_temp.png`,
      `${interior2}/office/office_intro.jpg`,
      // `${interior2}/office/pantry_temp.png`,
      `${interior2}/office/pantry.jpg`,
      `${interior2}/office/personal_office.jpg`,
      // `${interior2}/office/personal_temp.png`,
      // `${interior2}/office/reception_temp.png`,
      `${interior2}/office/reception.jpg`,
      // `${interior2}/office/restroom_temp.png`,
      `${interior2}/office/restroom.jpg`,

      //interior parking
      `${interior2}/parking/garage_parking.jpg`,
      `${interior2}/parking/gas_station.jpg`,
      `${interior2}/parking/green_public_transport.jpg`,
      // `${interior2}/parking/green_transport.jpg`,
      `${interior2}/parking/intro.jpg`,
      `${interior2}/parking/public_transport.jpg`,
      `${interior2}/parking/solar_charging_station.jpg`,

      //interior plaza
      `${interior2}/plaza/plaza_quiz_game_bg.png`,

      //interior school
      `${interior2}/school/classroom.jpg`,
      `${interior2}/school/intro.jpg`,
      `${interior2}/school/library_monitor.png`,
      // `${interior2}/school/library.jpg`,
      `${interior2}/school/library.png`,

      //interior seaport clip
      `${interior2}/seaport/clip/cliptemp.png`,

      //interior seaport lgu batangas
      `${interior2}/seaport/lgu/batangas/content.png`,
      `${interior2}/seaport/lgu/batangas/preview.png`,

      //batangascity
      // `${interior2}/seaport/lgu/batangascity/Screenshot 2022-02-09 100159.png`,
    
      //cagayan
      // `${interior2}/seaport/lgu/cagayan/CDO Photo 1 - GEMP Awarding.png`,
      `${interior2}/seaport/lgu/cagayan/content.png`,
      `${interior2}/seaport/lgu/cagayan/preview.png`,
  
      //default
      `${interior2}/seaport/lgu/default/content.png`,
      `${interior2}/seaport/lgu/default/preview.png`,

      //iloilo
      `${interior2}/seaport/lgu/iloilo/content.png`,
      // `${interior2}/seaport/lgu/iloilo/Picture1.png`,
      // `${interior2}/seaport/lgu/iloilo/Picture2.png`,
      `${interior2}/seaport/lgu/iloilo/preview.png`,

      //tagum
      `${interior2}/seaport/lgu/tagum/content.png`,
      `${interior2}/seaport/lgu/tagum/preview.png`,
      // `${interior2}/seaport/lgu/tagum/Tagum City Photo 1 - GEMP Awarding.png`,

       //sticker
       `${interior2}/seaport/sticker/sticker_1.png`,
       `${interior2}/seaport/sticker/sticker_2.png`,
       `${interior2}/seaport/sticker/sticker_3.png`,
       `${interior2}/seaport/sticker/sticker_4.png`,
       `${interior2}/seaport/sticker/sticker_5.png`,
 
      //interior seaport
      `${interior2}/seaport/corkboard_1.jpg`,
      `${interior2}/seaport/corkboard_2.jpg`,
      `${interior2}/seaport/corkboard_3.jpg`,
      `${interior2}/seaport/introtemp.jpg`,
      // `${interior2}/seaport/metromanila.jpg`,
      `${interior2}/seaport/metromanilatemp.jpg`,
      `${interior2}/seaport/photo_1.png`,
      `${interior2}/seaport/photo_2.png`,
      `${interior2}/seaport/photo_3.png`,
      `${interior2}/seaport/seaport_intro.jpg`,
      `${interior2}/seaport/seaporttemp.jpg`,
      `${interior2}/seaport/title_text_container.png`,

      //others on interior
      `${interior2}/obj_temp.png`,
      // `${interior2}/roominterior_sample_2.png`,
      // `${interior2}/roominterior_sample_3.png`,
      // `${interior2}/roominterior_sample.png`,
      `${interior2}/temppop.png`,
      `${interior2}/under_construction.png`,

      //quiz_engine bg
      `${images2}/quiz_engine/bg/ctn_post.png`,
      `${images2}/quiz_engine/bg/ctn_title.png`,

      //quiz_engine image
      `${images2}/quiz_engine/image/image.png`,

      //quiz_engine ui confetti
      `${images2}/quiz_engine/ui/confetti/confetti-02.png`,
      `${images2}/quiz_engine/ui/confetti/confetti-04.png`,
      `${images2}/quiz_engine/ui/confetti/confetti-05.png`,
      `${images2}/quiz_engine/ui/confetti/confetti-06.png`,
      `${images2}/quiz_engine/ui/confetti/ui_icn_confetti_bg.png`,

      //quiz_engine ui settings
      `${images2}/quiz_engine/ui/settings/btn_quiz_cancel.png`,
      `${images2}/quiz_engine/ui/settings/btn_quiz_no.png`,
      `${images2}/quiz_engine/ui/settings/btn_quiz_yes.png`,
      `${images2}/quiz_engine/ui/settings/ctn_quiz_settings.png`,

      //other on quiz_engine ui
      `${images2}/quiz_engine/ui/btn_exit.png`,
      `${images2}/quiz_engine/ui/btn_keepquiz.png`,
      `${images2}/quiz_engine/ui/ui_btn_choice_normal_long.png`,
      `${images2}/quiz_engine/ui/ui_btn_choice_pressed_green_long.png`,
      `${images2}/quiz_engine/ui/ui_btn_choice_pressed_red_long.png`,
      `${images2}/quiz_engine/ui/ui_ctn_timer_bar.png`,
      `${images2}/quiz_engine/ui/ui_ctn_timer.png`,
      `${images2}/quiz_engine/ui/ui_icn_heart_empty.png`,
      `${images2}/quiz_engine/ui/ui_icn_heart_normal.png`,
      `${images2}/quiz_engine/ui/ui_icn_timer_score.png`,

      //sprite
      // `${images2}/sprite/arrow_left.png`,
      // `${images2}/sprite/arrow_Right.png`,
      `${images2}/sprite/birds_1.png`,
      `${images2}/sprite/birds_2.png`,
      `${images2}/sprite/birds_3.png`,
      `${images2}/sprite/birds_4.png`,
      `${images2}/sprite/cloud_1.png`,
      `${images2}/sprite/cloud_2.png`,
      `${images2}/sprite/cloud_3.png`,
      `${images2}/sprite/cloud_4.png`,
      `${images2}/sprite/cloud_5.png`,

      // `${images2}/sprite/female.png`,
      // `${images2}/sprite/testbuilding.png`,
      // `${images2}/sprite/testbuilding2.png`,
      `${images2}/sprite/tree.png`,
      // `${images2}/sprite/water_ost15.png`,
      `${images2}/sprite/water_1.png`,
      `${images2}/sprite/water_2.png`,
      `${images2}/sprite/water_4.png`,
      // `${images2}/sprite/water_65.png`,
      `${images2}/sprite/water_effect.png`,

      //ui on aboutus
      `${images2}/ui/aboutus/embassy_container.png`,
      `${images2}/ui/aboutus/logos.png`,
      // `${images2}/ui/aboutus/mock_up.png`,
      `${images2}/ui/aboutus/scroll_handle.png`,
      `${images2}/ui/aboutus/scroll.png`,

      //ui on characters
      `${images2}/ui/characters/e_focal_person_2.png`,
      // `${images2}/ui/characters/e_focal_person.png`,
      // `${images2}/ui/characters/e_officer.png`,
      `${images2}/ui/characters/ec_officer.png`,
      `${images2}/ui/characters/user_guide_female.png`,
      `${images2}/ui/characters/user_guide_m_pv_1.png`,
      // `${images2}/ui/characters/user_guide_male.png`,

      //ui on exit button
      `${images2}/ui/exit_button/btn_general.png`,
      `${images2}/ui/exit_button/exit_left.png`,
      `${images2}/ui/exit_button/exit_middle.png`,
      `${images2}/ui/exit_button/exit_right.png`,
      `${images2}/ui/exit_button/shadow_left.png`,
      `${images2}/ui/exit_button/shadow_middle.png`,
      `${images2}/ui/exit_button/shadow_right.png`,

      //ui on internalpopup
      `${images2}/ui/internalpopup/blue_container.png`,
      `${images2}/ui/internalpopup/green_container.png`,
      `${images2}/ui/internalpopup/Help_Dynamic_Button_Blue_dropshadow left.png`,
      `${images2}/ui/internalpopup/Help_Dynamic_Button_Blue_dropshadow mid.png`,
      `${images2}/ui/internalpopup/Help_Dynamic_Button_Blue_dropshadow right.png`,      
      `${images2}/ui/internalpopup/Help_Dynamic_Button_Blue_left.png`,
      `${images2}/ui/internalpopup/Help_Dynamic_Button_Blue_mid.png`,
      `${images2}/ui/internalpopup/Help_Dynamic_Button_Blue_right.png`,      
      `${images2}/ui/internalpopup/Help_Dynamic_Button_Green_dropshadow left.png`,
      `${images2}/ui/internalpopup/Help_Dynamic_Button_Green_dropshadow mid.png`,
      `${images2}/ui/internalpopup/Help_Dynamic_Button_Green_dropshadow right.png`,      
      `${images2}/ui/internalpopup/Help_Dynamic_Button_Green_green_left.png`,
      `${images2}/ui/internalpopup/Help_Dynamic_Button_Green_green_mid.png`,
      `${images2}/ui/internalpopup/Help_Dynamic_Button_Green_green_right.png`,
      `${images2}/ui/internalpopup/pop_up_container.png`,

      //ui on intropopup
      `${images2}/ui/intropopup/green_button_container.png`,
      `${images2}/ui/intropopup/white_container.png`,

      //ui on left_container
      `${images2}/ui/left_container/left_container_left_side.png`,
      `${images2}/ui/left_container/left_container_middle.png`,
      `${images2}/ui/left_container/left_container_right_side.png`,
      `${images2}/ui/left_container/left_container.png`,

      //ui on load
      `${images2}/ui/load/logoloading_1.png`,
      `${images2}/ui/load/logoloading.png`,

      //ui on login
      `${images2}/ui/login/blue_backdrop.png`,
      `${images2}/ui/login/current_page.png`,
      `${images2}/ui/login/dropdown_arrow.png`,
      `${images2}/ui/login/filled_up.png`,
      `${images2}/ui/login/green_arrow_left.png`,
      `${images2}/ui/login/green_arrow.png`,
      `${images2}/ui/login/logo.png`,
      `${images2}/ui/login/markoff.png`,
      `${images2}/ui/login/markon.png`,
      `${images2}/ui/login/scroll_bar_dragger.png`,
      `${images2}/ui/login/scroll_bar.png`,
      `${images2}/ui/login/smaller_logo.png`,
      `${images2}/ui/login/text_bar.png`,
      `${images2}/ui/login/text_container_left.png`,
      `${images2}/ui/login/text_container_middle.png`,
      `${images2}/ui/login/text_container_right.png`,
      `${images2}/ui/login/unfilled.png`,
      `${images2}/ui/login/warning_button.png`,

      //ui on recovery
      // `${images2}/ui/recovery/recovery email_default_container.png`,
      // `${images2}/ui/recovery/recovery email_invalid_container.png`,
      `${images2}/ui/recovery/recovery_email_retry.png`,
      `${images2}/ui/recovery/recovery_email_send.png`,
      `${images2}/ui/recovery/recovery_email_default_container.png`,
      `${images2}/ui/recovery/recovery_email_invalid_container.png`,
      // `${images2}/ui/recovery/recovery_retry.png`,
      // `${images2}/ui/recovery/recovery_send.png`,
      `${images2}/ui/recovery/settings_exit.png`,
      `${images2}/ui/recovery/settings_quiz_game_only_confirmation_container.png`,

      //ui on right_container
      `${images2}/ui/right_container/right_container_left_side.png`,
      `${images2}/ui/right_container/right_container_middle.png`,
      `${images2}/ui/right_container/right_container_right_side.png`,
      `${images2}/ui/right_container/right_container.png`,

      //ui on settings
      `${images2}/ui/settings/btn_languageOff.png`,
      `${images2}/ui/settings/btn_languageOn.png`,
      `${images2}/ui/settings/btn_musicOff.png`,
      `${images2}/ui/settings/btn_musicOn.png`,
      `${images2}/ui/settings/btn_settings.png`,
      `${images2}/ui/settings/ctn_confirmation.png`,
      `${images2}/ui/settings/ctn_settings.png`,

      //ui on shadow
      `${images2}/ui/shadow/shadow_left.png`,
      `${images2}/ui/shadow/shadow_middle.png`,
      `${images2}/ui/shadow/shadow_right.png`,
      `${images2}/ui/shadow/shadow_short.png`,
      // `${images2}/ui/shadow/shadowshort.png`,

      //ui on tutorial
      `${images2}/ui/tutorial/introduction_f_container_1.png`,
      `${images2}/ui/tutorial/introduction_f_container_2.png`,
      `${images2}/ui/tutorial/introduction_f_container_3.png`,
      // `${images2}/ui/tutorial/Introduction_FA_container_1.png`,
      `${images2}/ui/tutorial/Introduction_FA_Help_Icon.png`,
      `${images2}/ui/tutorial/user_guide_f_pv_2.png`,
      `${images2}/ui/tutorial/user_guide_f_pv_3.png`,
      `${images2}/ui/tutorial/user_guide_f_pv_4.png`,
      `${images2}/ui/tutorial/user_guide_m_pv_1.png`,
      `${images2}/ui/tutorial/user_guide_m_pv_2.png`,
      `${images2}/ui/tutorial/user_guide_m_pv_3.png`,
      `${images2}/ui/tutorial/user_guide_m_pv_4.png`,

      //others on ui
      `${images2}/ui/arrow_guide.png`,
      `${images2}/ui/arrow_left_temp.png`,
      `${images2}/ui/arrow_left.png`,
      `${images2}/ui/arrow_right_temp.png`,
      `${images2}/ui/arrow_Right.png`,
      `${images2}/ui/ArrowLeft.png`,
      `${images2}/ui/ArrowRight.png`,
      `${images2}/ui/btn_close_temp.png`,
      // `${images2}/ui/btn_general.png`,
      `${images2}/ui/btnClose_100.png`,
      `${images2}/ui/circle.png`,
      `${images2}/ui/circleIcon.png`,
      // `${images2}/ui/closeButton_temp.png`,
      `${images2}/ui/container_shadow.png`,
      `${images2}/ui/ctn_Box.png`,
      `${images2}/ui/ctn_popup_dark.png`,
      `${images2}/ui/ctn_popup.png`,
      `${images2}/ui/ctn_rank_blank.png`,
      `${images2}/ui/ctn_separator_label.png`,
      `${images2}/ui/darkback.png`,
      `${images2}/ui/down_button.png`,
      `${images2}/ui/finger_temp.png`,
      `${images2}/ui/help_button.png`,
      // `${images2}/ui/info_temp.png`,
      `${images2}/ui/left_container.png`,
      `${images2}/ui/lightning_bolt.png`,
      `${images2}/ui/right_container.png`,
      // `${images2}/ui/settings_button.png`,
      `${images2}/ui/water_drop.png`,
      `${images2}/ui/Whitetemp.png`,
      `${images2}/game_bg.jpg`,
      `${images2}/separator.png`,

      //strings quiz engine
      `${assets2}/strings/quiz_engine/game_config.json`,
      `${assets2}/strings/quiz_engine/questions.json`,

      //others on strings
      `${assets2}/strings/locale_ceb_ph.json`,
      `${assets2}/strings/locale_en_us.json`,
      `${assets2}/strings/locale_ilo_ph.json`,
      `${assets2}/strings/locale_tag_ph.json`,

      //video
      `${assets2}/video/testvideo/samplevid.mp4`,
    ];
    await files.forEach(async file => {
      await RNFS.copyFileAssets(file, RNFS.DocumentDirectoryPath + '/' + file);
    });
  }
};
