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
   FlatList,
   SliderComponent
 } from 'react-native';
 
 import Styles from './ViewApartmentStyles.js';
 import ApartmenItem from '../../../auth/components/apartmentList/ApartmenItem.js'
 import ApartmentService from '../../../services/ApartmentService.js'
 const ViewApartmentUser = ({route,navigation}) => {
    let name = route.params.name;
    let image = route.params.image;

    return(
        <SafeAreaView>
            <View style={Styles.containerBack}>
            <TouchableOpacity onPress={()=>{
              navigation.navigate("homeuser");
            }}>
              <Image source={require('./img/logo1.png')} style={Styles.imageBack} />
            </TouchableOpacity>
          </View>
         
          <View style={Styles.containerImg}>
          <Image style={Styles.img} source={{uri: image}}></Image>
          </View>
            <View>
                <Text  style={Styles.title}>{name}</Text>
            </View>
        </SafeAreaView>
    );
 };
 
 export default ViewApartmentUser;
 