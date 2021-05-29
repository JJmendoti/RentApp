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
import ApartmentService from '../../../services/ApartmentService'
 const ViewApartmentUser = ({route,navigation}) => {

    const deleteApartment = (id) => {  
      fetch('https://api-rentapp.herokuapp.com/delete-apartment/'+id, {
        method: 'DELETE',
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({"id": id})
      })
      .then(response => response.json())
      .then(json => {
        if(json.status == "200"){
              Alert.alert("Apartamento Eliminado correctamente");
              setTimeout(() => {
                navigation.navigate("homeuser")
              }, 3000);
             
        }else {
          Alert.alert("Datos incorrectos")
        }
      })
      .catch((err) => { Alert.alert('Error:',err.message) });
    }; 
    let name = route.params.name;
    let image = route.params.image;
    let country = route.params.country;
    let city = route.params.city;
    let address = route.params.address;
    let value = route.params.value;
    let id = route.params.id;
    return(
        <SafeAreaView style={Styles.container}>
            <View style={Styles.containerBack}>
            <TouchableOpacity onPress={()=>{
              navigation.navigate("apartmentuser");
            }}>
              <Image source={require('./img/logo1.png')} style={Styles.imageBack} />
            </TouchableOpacity>
          </View>
          <View style={Styles.containerTitle}>
                <Text  style={Styles.title}>{name}</Text>
            </View>
          <Image style={Styles.img} source={{uri: image}}></Image>
           <View style={Styles.itemContainer}>
           <Text style={Styles.itemTitle}>Descripción de Apartamento</Text>
           <Text style={Styles.item}>Dirección: {address}</Text>
             <Text style={Styles.item}>Pais: {country}</Text>
             <Text style={Styles.item}>Ciudad: {city}</Text>
             <Text style={Styles.item}>Valor noche: {value}</Text>
           </View> 
      <View style={Styles.btnContainer}>
      <TouchableOpacity onPress={()=> {navigation.navigate("updateap",{
        id:id,
        name: name,
        country: country,
        address: address,
        city: city,
        image: image,
        value: value,
        })}}>
      <View style={Styles.edit}>
         <Text style={Styles.btnText}>EDITAR APARTAMENTO</Text>
       </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>deleteApartment(id)}>
      <View style={Styles.del}>
         <Text style={Styles.btnText}>ELIMINAR APARTAMENTO</Text>
       </View>
      </TouchableOpacity>
      </View>
        </SafeAreaView>
    );
 };
 
 export default ViewApartmentUser;
 