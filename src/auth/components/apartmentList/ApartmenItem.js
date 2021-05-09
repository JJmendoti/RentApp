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
import Styles from './ApartmentItemStyles';


 const ApartmenItem = (props) => {
        let image = props.apartment.image;
      return(
        <TouchableOpacity >
          <View style={Styles.container}>
            <View>
              <Image style={Styles.logo} source={{uri: image}}></Image>
            </View>
            <View>
              <Text style={Styles.name}>{props.apartment.name}</Text>
              <Text>Pais: {props.apartment.country}</Text>
              <Text>Ciudad: {props.apartment.city}</Text>
              <Text>Precio: {props.apartment.nigth_value}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )
 };
 
 export default ApartmenItem;