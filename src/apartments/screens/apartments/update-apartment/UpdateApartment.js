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
   Text,
   View,
   Image,
   TextInput,
   Alert,
   ImageBackground,
   TouchableOpacity,
   ScrollView,
 } from 'react-native';
 
 import Styles from './UpdateApartmentStyles';
 const UpdateApartment = ({route, navigation}) => {

  let name_p = route.params.name;
    let image_p = route.params.image;
    let country_p = route.params.country;
    let city_p = route.params.city;
    let address_p = route.params.address;
    let value_p = route.params.value;
    let id_p = route.params.id;
  const[name, setName] = useState("")
  const[address, setAddress] = useState("")
  const[value, setValue] = useState("")
  const[country, setCountry] = useState("")
  const[city, setCity] = useState("")
  const[image, setImage] = useState("")


  const saveAp = (name, address,value,country,city,image, id) => {  
      fetch('https://api-rentapp.herokuapp.com/apartment', {
        method: 'POST',
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({"idonwer": id, "name": name, "address": address,"nigth_value": value,"country": country, "city":city, "image": "https://api-rentapp.herokuapp.com/static/img/"+image})
      })
      .then(response => response.json())
      .then(json => {
        if(json.status == "200"){
              Alert.alert("Apartamento guardado correctamente");
              setTimeout(() => {
                navigation.navigate("homeuser",{
                  id: id
              })
              }, 3000);
             
        }else {
          Alert.alert("Datos incorrectos")
        }
      })
      .catch((err) => { Alert.alert('Error:',err.message) });
    }; 

  const validateApartment = () =>{
    if(address === "" || value === "" || name === "" || country ===""|| city===""||image === ""){
      Alert.alert("Todos los Campos deben estar llenos")
      
    }else {
      saveAp(name,address,value,country,city,image, id);
    //   setAddress("");
    //   setValue("");
    //  setName("");
    //  setCountry("");
    //  setCity("");
    //  setImage("");
    }
   
  }

  useEffect(() => {
      
    setAddress(address_p);
    setValue(value_p);
    setName(name_p);
    setCountry(country_p);
    setCity(city_p);
    setImage(image_p);
  },[])

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
            onChangeText={text => {
              setName(text);
            }}
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
            onChangeText={text => {
              setValue(text);
            }}
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
            onChangeText={text => {
              setAddress(text);
            }}
            />
          </View>
       
          <View style={Styles.searchSection}>
            
            <TextInput
            inlineImageLeft = 'outline_flag_black_20'
            defaultValue = {country}
            inlineImagePadding = {15}
            style={Styles.input}
            placeholder="Pais"
            underlineColorAndroid="transparent"
            onChangeText={text => {
              setCountry(text);
            }}
            />
          </View>
          <View style={Styles.searchSection}>
            
            <TextInput
            inlineImageLeft = 'outline_apartment_black_20'
            defaultValue = {city}
            inlineImagePadding = {15}
            style={Styles.input}
            placeholder="Ciudad"
            underlineColorAndroid="transparent"
            onChangeText={text => {
              setCity(text);
            }}
            />
          </View>
          <View style={Styles.searchSection}>
            
            <TextInput
            inlineImageLeft = 'outline_image_black_20'
            defaultValue = {image}
            inlineImagePadding = {15}
            style={Styles.input}
            placeholder="Imagen"
            underlineColorAndroid="transparent"
            onChangeText={text => {
              setImage(text);
            }}
            />
          </View>
     </View>
     <View style={Styles.signContainer}>
    <TouchableOpacity onPress={()=>validateApartment()}>
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
 
 
 
 export default UpdateApartment;
 