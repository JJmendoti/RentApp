/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import {
  SafeAreaView,
  //  ScrollView,
   StatusBar,
  //  StyleSheet,
   Text,
  //  useColorScheme,
   View,
   Image,
   TextInput,
   Button,
   Alert,
   ImageBackground,
   TouchableHighlight,
   TouchableOpacity,
 } from 'react-native';
 
 
//  import {
//    Colors,
//    DebugInstructions,
//    Header,
//    LearnMoreLinks,
//    ReloadInstructions,
//  } from 'react-native/Libraries/NewAppScreen';
 import Styles from './SplashStyles';
 const SplashScreen = ({navigation}) => {
    setTimeout(() => {
        navigation.navigate("login")
    }, 3000);
   return (
     <SafeAreaView style={Styles.container}>
          <ImageBackground style={{flex: 1}} source={require('./img/splash.jpeg')}>
          <View style={Styles.iconContainer}>
              <Image style={Styles.logo} source={require('./img/logo.png')}></Image>
       </View>
          </ImageBackground>
     </SafeAreaView>
   );
 };
 
 
 
 export default  SplashScreen;
