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
    ScrollView,
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
   FlatList
 } from 'react-native';
 
 import Styles from './HomeStyles.js';
 const Home = ({route,navigation}) => {  
   return (
    <ScrollView>
     <SafeAreaView style={Styles.container}>

       
     </SafeAreaView>
     </ScrollView>
   );
 };
 
 export default Home;