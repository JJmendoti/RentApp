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
   SliderComponent,
   TouchableWithoutFeedback,
 } from 'react-native';
 
 import Styles from './ApartmentUserStyles.js';
 import ApartmenItem from '../../../auth/components/apartmentList/ApartmenItem.js'
 import ApartmentService from '../../../services/ApartmentService.js'
 const ApartmentsUser = ({route,navigation}) => {
  
    let id = route.params.id;
   const[apartment,setApartment]=useState([]);
    const getApartments = async (ide)  => {
      const apartment  = await ApartmentService.getApartmentUser(ide);
      setApartment(apartment);
    }
  
    useEffect(() => {
      
      getApartments(id)

    },[])

  
      if(apartment.length > 0){
        return(
        <SafeAreaView style={Styles.container}>
        <View style={Styles.container_btn}>
          <TouchableOpacity onPress={() =>{navigation.navigate("saveapartment",{id:id})}}>
            <View style={Styles.btn}>
              <Text style={Styles.btn_text}>
                Agregar Apartamento
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={Styles.containersha}>
        <FlatList data={apartment} renderItem = {({item, index})=>(
       <TouchableOpacity
          onPress={() => {
            navigation.navigate('viewapuser',{
              name:item.name,
              image: item.image,
              country: item.country,
              city: item.city,
              value: item.nigth_value,
              address: item.address,
              id: item._id.$oid,
              idonwer: item.idonwer
            })
          }}>
        <ApartmenItem apartment={item}></ApartmenItem>
        </TouchableOpacity>)}
        keyExtractor={(item, index) => index.toString()}>
        </FlatList>    
       </View>
       </SafeAreaView>
    );
    }else{
            return(
            <SafeAreaView style={Styles.container}>
            <View style={Styles.containerBack}>
            <TouchableOpacity onPress={()=>{
              navigation.navigate("homeuser");
            }}>
              <Image source={require('./img/logo1.png')} style={Styles.imageBack} />
            </TouchableOpacity>
          </View>
            <View style={Styles.container_not} >
                <Text style={Styles.title} >Aun no tienes apartamentos agregados, presiona el siguiente boton para agregar uno.</Text>
                <TouchableOpacity onPress={() => {
                  navigation.navigate("saveapartment",
                   {id: id});
                }
                }>
                    <View style={Styles.btn}>
                        <Text style={Styles.btn_text}>Agregar Apartamento</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
    }

 };
 
 export default ApartmentsUser;
 