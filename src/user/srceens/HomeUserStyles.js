import {StyleSheet, Dimensions} from 'react-native';

const Styles = StyleSheet.create({
  container:{
    padding: 10,
  },data: {
      display: 'flex',
      flexDirection: 'row'
  },
  data_text:{
    fontWeight: 'bold',
    paddingTop: 10,
  },
  sun: {
    flex: 1,
      width: 40,
      height: 40,
      resizeMode: 'contain',
  },
  containerData:{
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  containerVac:{
    flex: 3,
  },title: {
    textAlign: 'center',
  },
  titlename: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  logo: {
    flex: 1,
    width: 160,
    height: 160,
    resizeMode: 'contain',
    marginEnd: 20
  },
  containlogo:{
    alignItems: 'center',
    marginBottom: 10
  },
  data_container: {
    borderWidth: 1,
    marginTop: 20,
    borderColor: '#CCD1D1',
    borderRadius: 15,
    padding: 10,
    
  },item_data: {
    textAlign: 'center'
  },
  item_title: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#D4AC0D',
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
    marginBottom: 30,
  },
  btn_text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  
  });

export default Styles;