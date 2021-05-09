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
   FlatList
 } from 'react-native';
 
 //  import {
 //    Colors,
 //    DebugInstructions,
 //    Header,
 //    LearnMoreLinks,
 //    ReloadInstructions,
 //  } from 'react-native/Libraries/NewAppScreen';
 import Styles from './HomeStyles.js';
 const Home = ({navigation}) => {    
   return (
     <SafeAreaView style={Styles.container}>
       <View>
           <Text>Hola Mundo</Text>
       </View>
     </SafeAreaView>
   );
 };
 
 export default Home;