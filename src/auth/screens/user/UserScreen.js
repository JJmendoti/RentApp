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
 import Styles from './UserStyles';
 import Useritem from '../../components/User/Useritem.js'
 const UserScreen = ({navigation}) => {
   const[users,setUsers]=useState([])
    const getUser = async ()  => {
      const response  = await fetch("https://api-rentapp.herokuapp.com/user");
      const jsonResponse = await response.json();
      setUsers(jsonResponse)
    }
    useEffect(() => {
      getUser()
    },[])
    
   return (
     <SafeAreaView style={Styles.container}>
       <View style={Styles.containersha}>
        <FlatList data={users} renderItem = {({item,index})=><Useritem user={item}></Useritem>} keyExtractor={(item, index) => index.toString()}>
        </FlatList>     
       </View>
     </SafeAreaView>
   );
 };
 
 export default UserScreen;
 