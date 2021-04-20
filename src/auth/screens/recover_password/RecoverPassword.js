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
import Styles from './RecoverStyles';
const RecoverPassword = ({navigation}) =>{
    const[email,setEmail] = useState("")
        const validateRecoverPass = () =>{
        if(email === ""){
          Alert.alert("El campo Email esta vacio")
          
        }else {
         setEmail("");
        }
       
      }
      return (
          <ScrollView>
              
          </ScrollView>
      )


};

export default RecoverPassword;
