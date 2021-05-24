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

 import Slider from './Slider.js'
 import Styles from './HomeStyles.js';

 const images = [
  'https://images.pexels.com/photos/3727533/pexels-photo-3727533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/577584/pexels-photo-577584.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/7625034/pexels-photo-7625034.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/2797332/pexels-photo-2797332.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/2106776/pexels-photo-2106776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/6735399/pexels-photo-6735399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/3811316/pexels-photo-3811316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/365668/pexels-photo-365668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/7624936/pexels-photo-7624936.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
]


 const Home = ({route,navigation}) => {  
   return (
    <ScrollView>
     <SafeAreaView style={Styles.container}>
     <View style={Styles.loginContainer}>
      <View style={Styles.logoContainer}>
            <Image source={require('./img/logo2.png')} style={Styles.logo}/>
      </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('login');
            }}>
            <View style={Styles.login}>
              <Text style={Styles.loginText}>Login</Text>
            </View>
          </TouchableOpacity>
      </View>
      <Slider images={images}/>
      <Text style={Styles.title}>Connect House</Text>
      <Text style={Styles.text}>Nuestras Ciudades Representativas...</Text>
      <TouchableOpacity onPress={() => {
              navigation.navigate('apartments');
            }} style={Styles.card}>
        
        <Image style={Styles.cardImg} source={require('./img/cartagena.jpg')}/>
        <Text style={Styles.cardText}>Cartagena</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
              navigation.navigate('apartments');
            }} style={Styles.card}>
        <Image style={Styles.cardImg} source={require('./img/villa.jpg')}/>
        <Text style={Styles.cardText}>Villa de Leiva</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
              navigation.navigate('apartments');
            }} style={Styles.card}>
        <Image style={Styles.cardImg} source={require('./img/santa.jpg')}/>
        <Text style={Styles.cardText}>Santa Marta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
              navigation.navigate('apartments');
            }} style={Styles.card}>
        <Image style={Styles.cardImg} source={require('./img/san.jpg')}/>
        <Text style={Styles.cardText}>San Andrés</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
              navigation.navigate('apartments');
            }} style={Styles.card}>
        <Image style={Styles.cardImg} source={require('./img/arboletes.jpg')}/>
        <Text style={Styles.cardText}>Arboletes</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
              navigation.navigate('apartments');
            }} style={Styles.card}>
        <Image style={Styles.cardImg} source={require('./img/bogota.jpg')}/>
        <Text style={Styles.cardText}>Bogóta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
              navigation.navigate('apartments');
            }} style={Styles.card}>
        <Image style={Styles.cardImg} source={require('./img/capurgana.jpg')}/>
        <Text style={Styles.cardText}>Capurganá</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
              navigation.navigate('apartments');
            }} style={Styles.card}>
        <Image style={Styles.cardImg} source={require('./img/medellin.jpg')}/>
        <Text style={Styles.cardText}>Medellín</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
              navigation.navigate('apartments');
            }} style={Styles.card}>
        <Image style={Styles.cardImg} source={require('./img/melgar.jpg')}/>
        <Text style={Styles.cardText}>Melgar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
              navigation.navigate('apartments');
            }} style={Styles.card}>
        <Image style={Styles.cardImg} source={require('./img/Palomino.jpg')}/>
        <Text style={Styles.cardText}>Palomino</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
              navigation.navigate('apartments');
            }} style={Styles.card}>
        <Image style={Styles.cardImg} source={require('./img/guatape.jpg')}/>
        <Text style={Styles.cardText}>Guatape</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
              navigation.navigate('apartments');
            }} style={Styles.card}>
        <Image style={Styles.cardImg} source={require('./img/girardot.jpg')}/>
        <Text style={Styles.cardText}>Girardot</Text>
      </TouchableOpacity>


      <Text style={Styles.title}>Dispones de los mejores Hoteles</Text>
      <TouchableOpacity onPress={() => {
              navigation.navigate('apartments');
            }} style={Styles.card}>
        <Image style={Styles.cardImg} source={require('./img/hotel1.jpg')}/>
        <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
              navigation.navigate('apartments');
            }} style={Styles.card}>
        <Image style={Styles.cardImg} source={require('./img/hotel2.jpg')}/>
        <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
              navigation.navigate('apartments');
            }} style={Styles.card}>
        <Image style={Styles.cardImg} source={require('./img/hotel3.jpg')}/>
        <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
              navigation.navigate('apartments');
            }} style={Styles.card}>
        <Image style={Styles.cardImg} source={require('./img/hotel4.jpg')}/>
        <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
              navigation.navigate('apartments');
            }} style={Styles.card}>
        <Image style={Styles.cardImg} source={require('./img/hotel5.jpg')}/>
        <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
              navigation.navigate('apartments');
            }} style={Styles.card}>
        <Image style={Styles.cardImg} source={require('./img/hotel6.jpg')}/>
        <Text></Text>
      </TouchableOpacity>


      <Text style={Styles.texExperiences}>Brindando las mejores Experiencias</Text>
      <View style={Styles.containerImg}>
      <Image source={require('./img/gallery_1.jpg')}
          style={Styles.Img}
        />
        <Image source={require('./img/gallery_2.jpg')}
          style={Styles.Img}
        />        
      </View>
      <View style={Styles.containerImg}>

      <Image source={require('./img/gallery_3.jpg')}
          style={Styles.Img}
        />
        <Image source={require('./img/gallery_4.jpg')}
          style={Styles.Img}
        />
      </View>
      <View style={Styles.containerImg}>

        <Image source={require('./img/gallery_5.jpg')}
          style={Styles.Img}
        />
        <Image source={require('./img/gallery_6.jpg')}
          style={Styles.Img}
        />
      </View>
      <View style={Styles.containerImg}>

        <Image source={require('./img/gallery_7.jpg')}
          style={Styles.Img}
        />
        <Image source={require('./img/gallery_8.jpg')}
          style={Styles.Img}
        />
      </View>
      <View style={Styles.containerImg}>

        <Image source={require('./img/gallery_9.jpg')}
          style={Styles.Img}
        />
        <Image source={require('./img/gallery_10.jpg')}
          style={Styles.Img}
        />
      </View>
      <View style={Styles.containerImg}>

        <Image source={require('./img/gallery_11.jpg')}
          style={Styles.Img}
        />
        <Image source={require('./img/gallery_12.jpg')}
          style={Styles.Img}
        />
      </View>
      <View style={Styles.containerImg}>

        <Image source={require('./img/gallery_13.jpg')}
          style={Styles.Img}
        />
        <Image source={require('./img/gallery_14.jpg')}
          style={Styles.Img}
        />
      </View>
      <View style={Styles.containerImg}>

        <Image source={require('./img/gallery_15.jpg')}
          style={Styles.Img}
        />
        <Image source={require('./img/gallery_16.jpg')}
          style={Styles.Img}
        />
      </View>
      
      <Text style={Styles.derechos}>&copy;-Connect-House,Todos los derechos reservados 2021</Text>
 
     </SafeAreaView>
     </ScrollView>
   );
 };
 
 export default Home;