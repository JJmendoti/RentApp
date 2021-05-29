/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState, useEffect} from 'react';
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
   ActivityIndicator,
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
    const splash = ()=> {
        setTimeout(() => {
              navigation.navigate("signup")    
      },3000);
    };
    

    useEffect(()=>{
      splash()
    },[])
   return (
     <SafeAreaView style={Styles.container}>
          <ImageBackground style={{flex: 1}} source={require('./img/splash.jpeg')}>
          <View style={Styles.iconContainer}>
              <Image style={Styles.logo} source={require('./img/logo.png')}></Image>
       </View>
       <View style={Styles.indicator}>
       <ActivityIndicator size="large" color="#fff" />
       </View>
          </ImageBackground>
     </SafeAreaView>
   );
 };
 
 
 
 export default  SplashScreen;
