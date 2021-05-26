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
} from 'react-native';
import Styles from './LoginStyles';


const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const login = (email, password) => {  
    fetch('https://api-rentapp.herokuapp.com/signinuser', {
      method: 'POST',
      headers: { 
          "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({"user": email, "password": password})
    })
    .then(response => response.json())
    .then(json => {
      if(json.status == "200"){
        navigation.navigate("homeuser",{
          email: email
        })
      }else {
        Alert.alert("Datos incorrectos")
      }
    })
    .catch((err) => { Alert.alert('Error:',err.message) });
  }; 
  const validateLogin = () => {
  
    if (email === '' || password === '') {
      Alert.alert('Todos los Campos deben estar llenos');
    } else {
      login(email,password)
      setEmail('');
      setPassword('');
    }
  };
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar backgroundColor="black"></StatusBar>
      <ImageBackground
        style={{flex: 1}}
        source={require('./img/login-back.jpg')}>
        <View style={Styles.registerContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('signup');
            }}>
            <View style={Styles.register}>
              <Text>Registrarse</Text>
            </View>
          </TouchableOpacity>
          <View style={Styles.containerBack}>
            <TouchableOpacity onPress={()=>{
              navigation.navigate("home");
            }}>
              <Image source={require('./img/logo1.png')} style={Styles.imageBack} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.iconContainer}>
          <Image style={Styles.logo} source={require('./img/logo.png')}></Image>
        </View>

        <View style={Styles.inputContainer}>
          <View style={Styles.searchSection}>
            <TextInput
              inlineImageLeft="outline_person_black_20"
              defaultValue={email}
              inlineImagePadding={15}
              keyboardType="email-address"
              style={Styles.input}
              placeholder="Usuario"
              underlineColorAndroid="transparent"
              onChangeText={text => {
                setEmail(text);
              }}
            />
          </View>
          <View style={Styles.searchSection}>
            <TextInput
              inlineImageLeft="outline_vpn_key_black_20"
              defaultValue={password}
              secureTextEntry={true}
              inlineImagePadding={15}
              style={Styles.input}
              placeholder="Contraseña"
              onChangeText={text => {
                setPassword(text);
              }}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={Styles.recovered}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('recovered');
              }}>
              <Text style={Styles.recoveredText}>
                ¿Haz olvidado tu contraseña?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.signContainer}>
          <TouchableOpacity onPress={() => validateLogin()}>
            <View style={Styles.sign}>
              <Text>INGRESAR</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginScreen;
