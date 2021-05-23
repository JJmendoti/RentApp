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
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginEnd: 20
  },
  containlogo:{
    alignItems: 'center',
    marginBottom: 10
  }
  });

export default Styles;