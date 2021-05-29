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
 import ApartmentService from '../../../services/ApartmentService.js'
 const Apartments = ({navigation}) => {
   const[apartment,setApartment]=useState([])
    const getApartments = async ()  => {
      const apartment  = await ApartmentService.getApartments();
      setApartment(apartment);
    }
    useEffect(() => {
      getApartments()
    },[])
    
   return (
     <SafeAreaView style={Styles.container}>
       <View style={Styles.containersha}>
        <FlatList data={apartment} renderItem = {({item})=><TouchableOpacity onPress={() => console.log(item)}>
        <ApartmenItem apartment={item}></ApartmenItem>
        </TouchableOpacity>}
         keyExtractor={(item, index) => index.toString()}>
        </FlatList>    
       </View>
     </SafeAreaView>
   );
 };
 
 export default Apartments;
 