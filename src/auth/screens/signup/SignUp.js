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
   KeyboardAvoidingView,
   ScrollView,
 } from 'react-native';
 
 
//  import {
//    Colors,
//    DebugInstructions,
//    Header,
//    LearnMoreLinks,
//    ReloadInstructions,
//  } from 'react-native/Libraries/NewAppScreen';
 import Styles from './SignStyles';
 const SignUp = ({navigation}) => {
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[name, setName] = useState("")
    const[ident, setIdent] = useState("")
    const[country, setCountry] = useState("")
    const[city, setCity] = useState("")
    const[image, setImage] = useState("")

        const saveUser = (email, password, name , ident, country, city, image) => {  
          fetch('https://api-rentapp.herokuapp.com/user', {
        method: 'POST',
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({"email": email, "password": password, "name": name,"ident": ident,"country": country, "city":city, "image": "https://api-rentapp.herokuapp.com/static/img/"+image})
      })
      .then(response => response.json())
      .then(json => {
        if(json.status == "200"){
              Alert.alert("Usuario guardado correctamente 'Inica Sesión'");
              setTimeout(() => {
                navigation.navigate("login",{
              })
              }, 3000);
             
        }else {
          Alert.alert("Datos incorrectos")
        }
      })
      .catch((err) => { Alert.alert('Error:',err.message) });
    };
    const validateLogin = () =>{
      if(email === "" || password === "" || name === "" || ident === "" || country ===""|| city===""||image === ""){
        Alert.alert("Todos los Campos deben estar llenos")
        
      }else {
        saveUser(email, password, name , ident, country, city, image);
       setEmail("");
       setPassword("");
       setIdent("")
       setName("")
       setCountry("");
       setCity("");
       setImage("");
      }
     
    }

   return (
    <ScrollView>
    <SafeAreaView style={Styles.container}>
          <ImageBackground style={{flex: 1}} source={require('./img/sign-back.jpeg')}>
          <View style={Styles.containerBack}>
            <TouchableOpacity onPress={()=>{
              navigation.navigate("login");
            }}>
              <Image source={require('./img/logo1.png')} style={Styles.imageBack} />
            </TouchableOpacity>
            <Image style={Styles.logo} source={require('./img/logo2.png')}></Image>
          </View>
          <View style={Styles.containerTitle}>
            <Text style={Styles.title}>
              Registro de usuarios
            </Text>
          </View>
          <View style={Styles.inputContainer}>
          <View style={Styles.searchSection}>
              
              <TextInput
              inlineImageLeft = 'outline_person_black_20'
              defaultValue = {name}
              inlineImagePadding = {15}
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
              inlineImageLeft = 'outline_email_black_20'
              defaultValue = {email}
              inlineImagePadding = {15}
              keyboardType = 'email-address'
              style={Styles.input}
              placeholder="email"
              underlineColorAndroid="transparent" 
              onChangeText={text => {
                setEmail(text);
              }}
              />
            </View>
            <View style={Styles.searchSection}>
              
              <TextInput
              inlineImageLeft = 'outline_branding_watermark_black_20'
              defaultValue = {ident}
              inlineImagePadding = {15}
              style={Styles.input}
              placeholder="Identificación"
              underlineColorAndroid="transparent" 
              onChangeText={text => {
                setIdent(text);
              }}
              />
            </View>
            <View style={Styles.searchSection}>
              
              <TextInput
              inlineImageLeft = 'outline_vpn_key_black_20'
              defaultValue = {password}
              secureTextEntry = {true}
              inlineImagePadding = {15}
              style={Styles.input}
              placeholder="Contraseña"
              underlineColorAndroid="transparent" 
              onChangeText={text => {
                setPassword(text);
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
      <TouchableOpacity onPress={()=>validateLogin()}>
      <View style={Styles.sign}>
         <Text style={Styles.signText}>REGISTRAR USUARIO</Text>
       </View>
      </TouchableOpacity>
      </View>
          </ImageBackground>
     </SafeAreaView>
     </ScrollView>
   );
 };
 
 export default SignUp;
 