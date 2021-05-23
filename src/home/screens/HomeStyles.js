import {StyleSheet, Dimensions} from 'react-native';

const Styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
 
  },
login: {
      backgroundColor: '#D4AC0D',
      width: 100,
      alignItems: 'center',
      marginTop: 10,
      padding: 10,
      borderRadius: 16,

    },
    loginContainer: {
    alignItems: 'flex-end',
    paddingRight: 10,
    },
    signContainer: {
      alignItems: 'center',

    },
    title: {
      textAlign: 'center',
      marginTop: 10,
    },
    containerImg:{
      flex: 1,
      flexDirection: 'row',
    },
    Img: { 
      width: 190, 
      height: 190,
      borderRadius: 10,
      borderColor: '#010101',
      marginTop: 10,
      marginLeft: 5
    }






  });

export default Styles;