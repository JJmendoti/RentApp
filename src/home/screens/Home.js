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
 import UsersService from '../../services/UserServices.js';
 const Home = ({route,navigation}) => {  
  const [currentDate, setCurrentDate] = useState('');
  var email = route.params.email;
  const[user,setUser] = useState("");
  const getUser = async () => {
    const users = await UsersService.getUserEmail(email);
    setUser(users);
  } 
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var months = ['null', 'Enero', 'Febrero', 'Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
     var monthString = months[month]
    setCurrentDate(
      monthString + ', ' + date
    );
    getUser();
  }, []);  
  let image = user.image;
   return (
    <ScrollView>
     <SafeAreaView style={Styles.container}>
        <View style={Styles.data}>
          <View  style={Styles.containerVac}>
            <Text></Text>
          </View>
          <View style={Styles.containerData}>
            <Text style={Styles.data_text}>{currentDate}</Text>
            <Image style={Styles.sun} source={require('./img/sun.png')}></Image>
          </View>
        </View>
       <View>
         <View style={Styles.containlogo}>
         <Image style={Styles.logo} source={{uri: image}}></Image>
         </View>
           <Text style={Styles.title}>Bienvenido</Text>
           <Text style={Styles.titlename}>{user.name}</Text>
       </View>
     </SafeAreaView>
     </ScrollView>
   );
 };
 
 export default Home;