/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import {
  SafeAreaView,
   Text,
   View,
   Image,
   TextInput,
   Alert,
   ImageBackground,
   TouchableOpacity,
   ScrollView,
 } from 'react-native';
 
 import Styles from './SaveApartmentStyles.js';
 const SaveApartment = ({navigation}) => {
    const[name, setName] = useState("")
    const[address, setAddress] = useState("")
    const[value, setValue] = useState("")
    const[country, setCountry] = useState("")
    const[city, setCity] = useState("")
    const[image, setImage] = useState("")

    const validateLogin = () =>{
      if(address === "" || value === "" || name === "" || country ===""|| city===""||image === ""){
        Alert.alert("Todos los Campos deben estar llenos")
        
      }else {
        setAddress("");
        setValue("");
       setName("");
       setCountry("");
       setCity("");
       setImage("");
      }
     
    }

   return (
    <ScrollView>
    <SafeAreaView style={Styles.container}>
          <ImageBackground style={{flex: 1}} source={require('./img/save-back.jpg')}>
          <View style={Styles.containerBack}>
            <TouchableOpacity onPress={()=>{
              navigation.navigate("apartmentuser");
            }}>
              <Image source={require('./img/logo1.png')} style={Styles.imageBack} />
            </TouchableOpacity>
            <Image style={Styles.logo} source={require('./img/logo2.png')}></Image>
          </View>
          <View style={Styles.containerTitle}>
            <Text style={Styles.title}>
                Nuevo Apartamento
            </Text>
          </View>
          <View style={Styles.inputContainer}>
          <View style={Styles.searchSection}>
              
              <TextInput
              inlineImageLeft = 'outline_person_black_20'
              defaultValue = {name}
              inlineImagePadding = {15}
              keyboardType = 'email-address'
              style={Styles.input}
              placeholder="Nombre"
              underlineColorAndroid="transparent"
              />
            </View>
            <View style={Styles.searchSection}>
              
              <TextInput
              inlineImageLeft = 'outline_paid_black_20'
              defaultValue = {value}
              inlineImagePadding = {15}
              style={Styles.input}
              placeholder="Valor noche"
              underlineColorAndroid="transparent"
              />
            </View>
            <View style={Styles.searchSection}>
              
              <TextInput
              inlineImageLeft = 'outline_home_black_20'
              defaultValue = {address}
              inlineImagePadding = {15}
              style={Styles.input}
              placeholder="Dirección"
              underlineColorAndroid="transparent"
              />
            </View>
         
            <View style={Styles.searchSection}>
              
              <TextInput
              inlineImageLeft = 'outline_flag_black_20'
              defaultValue = {country}
              secureTextEntry = {true}
              inlineImagePadding = {15}
              style={Styles.input}
              placeholder="Pais"
              underlineColorAndroid="transparent"
              />
            </View>
            <View style={Styles.searchSection}>
              
              <TextInput
              inlineImageLeft = 'outline_apartment_black_20'
              defaultValue = {city}
              secureTextEntry = {true}
              inlineImagePadding = {15}
              style={Styles.input}
              placeholder="Ciudad"
              underlineColorAndroid="transparent"
              />
            </View>
            <View style={Styles.searchSection}>
              
              <TextInput
              inlineImageLeft = 'outline_image_black_20'
              defaultValue = {image}
              secureTextEntry = {true}
              inlineImagePadding = {15}
              style={Styles.input}
              placeholder="Imagen"
              underlineColorAndroid="transparent"
              />
            </View>
       </View>
       <View style={Styles.signContainer}>
      <TouchableOpacity onPress={()=>validateLogin()}>
      <View style={Styles.sign}>
         <Text style={Styles.signText}>REGISTRAR APARTAMENTO</Text>
       </View>
      </TouchableOpacity>
      </View>
          </ImageBackground>
     </SafeAreaView>
     </ScrollView>
   );
 };
 
 
 
 export default SaveApartment;
 