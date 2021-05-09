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
import Styles from './UserItemStyles';

 
 //  import {
 //    Colors,
 //    DebugInstructions,
 //    Header,
 //    LearnMoreLinks,
 //    ReloadInstructions,
 //  } from 'react-native/Libraries/NewAppScreen';
 const Useritem = (props) => {
        let image = props.user.image;
      return(
        <TouchableOpacity>
          <View style={Styles.container}>
            <View>
              <Image style={Styles.logo} source={{uri: image}}></Image>
            </View>
            <View>
              <Text style={Styles.name}>{props.user.name}</Text>
              <Text>Pais: {props.user.country}</Text>
              <Text>Ciudad: {props.user.city}</Text>
              <Text>Correo: {props.user.email}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )
 };
 
 export default Useritem;
 