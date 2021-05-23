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

    const validateLogin = () =>{
      if(email === "" || password === "" || name === "" || ident === "" || country ===""|| city===""||image === ""){
        Alert.alert("Todos los Campos deben estar llenos")
        
      }else {
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
              keyboardType = 'email-address'
              style={Styles.input}
              placeholder="Nombre"
              underlineColorAndroid="transparent"
              />
            </View>
            <View style={Styles.searchSection}>
              
              <TextInput
              inlineImageLeft = 'outline_person_black_20'
              defaultValue = {email}
              inlineImagePadding = {15}
              keyboardType = 'email-address'
              style={Styles.input}
              placeholder="email"
              underlineColorAndroid="transparent"
              />
            </View>
            <View style={Styles.searchSection}>
              
              <TextInput
              inlineImageLeft = 'outline_person_black_20'
              defaultValue = {ident}
              inlineImagePadding = {15}
              keyboardType = 'email-address'
              style={Styles.input}
              placeholder="Identificación"
              underlineColorAndroid="transparent"
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
              />
            </View>
            <View style={Styles.searchSection}>
              
              <TextInput
              inlineImageLeft = 'outline_vpn_key_black_20'
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
              inlineImageLeft = 'outline_vpn_key_black_20'
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
              inlineImageLeft = 'outline_vpn_key_black_20'
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
 