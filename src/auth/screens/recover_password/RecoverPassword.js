import React, {useState} from 'react';
import {
  SafeAreaView,
  //  ScrollView,
  StatusBar,
  //  StyleSheet,
  Text,
  //  useColorScheme,
  View,
  TextInput,
  Alert,
  Image,
  //ImageBackground,
  //TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import stylesRecover from './RecoverStyles';

const RecoverPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const validateRecoverPass = () => {
    if (email === '') {
      Alert.alert('El campo Email esta vacio');
    } else {
      setEmail('');
    }
  };
  return (
    <SafeAreaView style={stylesRecover.container}>
      <StatusBar backgroundColor="black" translucent={true} />
      <View style={stylesRecover.containerBack}>
            <TouchableOpacity onPress={()=>{
              navigation.navigate("login");
            }}>
              <Image source={require('./img/logo1.png')} style={stylesRecover.imageBack} />
            </TouchableOpacity>
          </View>
      <View style={[stylesRecover.containerCenter]}>
        <View>
          <Image
            style={stylesRecover.logo}
            source={require('../login/img/logo.png')}
          />
        </View>
        <TextInput
          inlineImageLeft="outline_person_black_20"
          defaultValue={email}
          inlineImagePadding={15}
          keyboardType="email-address"
          style={stylesRecover.input}
          placeholder="E-mail"
          underlineColorAndroid="transparent"
          onChangeText={text => {
            setEmail(text);
          }}
        />
        <View style={stylesRecover.btnMain}>
          <TouchableOpacity onPress={() => validateRecoverPass()}>
            <Text style={stylesRecover.btntxt}>Recuperar Contraseña</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RecoverPassword;
