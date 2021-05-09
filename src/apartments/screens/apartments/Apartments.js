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
 import Styles from './ApartmentsStyles.js';
 import ApartmenItem from '../../../auth/components/apartmentList/ApartmenItem.js'
 const Apartments = ({navigation}) => {
   const[apartment,setApartment]=useState([])
    const getUser = async ()  => {
      const response  = await fetch("https://api-rentapp.herokuapp.com/apartment");
      const jsonResponse = await response.json();
      setApartment(jsonResponse)
    }
    useEffect(() => {
      getUser()
    },[])
    
   return (
     <SafeAreaView style={Styles.container}>
       <View style={Styles.containersha}>
        <FlatList data={apartment} renderItem = {({item})=><ApartmenItem apartment={item}></ApartmenItem>} keyExtractor={(item, index) => index.toString()}>
        </FlatList>    
       </View>
     </SafeAreaView>
   );
 };
 
 export default Apartments;
 