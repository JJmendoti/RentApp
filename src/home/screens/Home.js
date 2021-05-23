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
     <View style={Styles.loginContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('login');
            }}>
            <View style={Styles.login}>
              <Text>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={Styles.title}>RENT APP</Text>
      <View>
        <Text>Brindando las mejores Experiencias</Text>
      </View>

      <View style={Styles.containerImg}>
      <Image source={require('./img/gallery_1.jpg')}
          style={Styles.Img}
        />
        <Image source={require('./img/gallery_2.jpg')}
          style={Styles.Img}
        />        
      </View>
      <View style={Styles.containerImg}>

      <Image source={require('./img/gallery_3.jpg')}
          style={Styles.Img}
        />
        <Image source={require('./img/gallery_4.jpg')}
          style={Styles.Img}
        />
      </View>
      <View style={Styles.containerImg}>

        <Image source={require('./img/gallery_5.jpg')}
          style={Styles.Img}
        />
        <Image source={require('./img/gallery_6.jpg')}
          style={Styles.Img}
        />
      </View>
       
     </SafeAreaView>
     </ScrollView>
   );
 };
 
 export default Home;