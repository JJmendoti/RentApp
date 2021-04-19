/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
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
  
 } from 'react-native';
 
 
//  import {
//    Colors,
//    DebugInstructions,
//    Header,
//    LearnMoreLinks,
//    ReloadInstructions,
//  } from 'react-native/Libraries/NewAppScreen';
 import Styles from './LoginStyles';
 const LoginScreen= () => {
   
   return (
     <SafeAreaView style={Styles.container}>
       <StatusBar backgroundColor="orange"></StatusBar>
     <ImageBackground style={{flex: 1}} source={require('./img/login-back.jpg')}>
       <View style={Styles.iconContainer}>
              <Image style={Styles.logo} source={require('./img/logo.png')}></Image>
       </View>
       <View style={Styles.inputContainer}>
            <View style={Styles.searchSection}>
              
              <TextInput
              style={Styles.input}
              placeholder="Usuario"
              underlineColorAndroid="transparent"
              />
            </View>
            <View style={Styles.searchSection}>
              
              <TextInput
              style={Styles.input}
              placeholder="Contraseña"
              underlineColorAndroid="transparent"
              />
            </View>
       </View>
       <Button
           onPress={() => Alert.alert('Debe llenar los campos')}
           title="Ingresar"
           color="#F3671C"
           accessibilityLabel="Calmado muelon"
           style={Styles.btn}/>
     </ImageBackground>
     </SafeAreaView>
   );
 };
 
 
 
 export default LoginScreen;
 