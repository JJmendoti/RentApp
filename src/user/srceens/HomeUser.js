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

 import Styles from './HomeUserStyles.js';
 import UsersService from '../../services/UserServices.js';
 const HomeUser = ({route,navigation}) => {  
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

  const toApartments = ()=>{
    navigation.navigate("apartmentuser",{
      id: user._id.$oid
    })
  }
   return (
    <ScrollView>
      <ImageBackground style={{flex: 1}} source={require('./img/homeuser.jpg')}>
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
       <View style={Styles.data_container}>
           <Text style={Styles.item_title}>Correo Electrónico: </Text>
              <Text style={Styles.item_data}>{user.email}</Text>
              <Text style={Styles.item_title}>Identificación: </Text>  
              <Text style={Styles.item_data}>{user.ident}</Text>
              <Text style={Styles.item_title}>Ubicación: </Text>
              <Text style={Styles.item_data}>{user.city} - {user.country}</Text>
        </View> 
        <TouchableOpacity onPress={() => toApartments()}>
          <View style={Styles.btn}>
            <Text style={Styles.btn_text}>Ver Apartamentos</Text>
          </View>
        </TouchableOpacity>
     </SafeAreaView>
     </ImageBackground>
     </ScrollView>
   );
 };
 
 export default HomeUser;