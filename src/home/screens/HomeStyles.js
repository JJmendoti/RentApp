import {
  StyleSheet,
  Dimensions
} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,

  },
  login: {
    backgroundColor: '#fff',
    width: 80,
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    borderRadius: 16,
    
  },
  loginText:{
    color: '#FF9700',
    fontSize: 22,

  },
  loginContainer: {
    flexDirection: 'row',
    paddingRight: 10,
    backgroundColor: '#010101',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,

  },
  signContainer: {
    alignItems: 'center',

  },
  logo: {
    backgroundColor: '#010101',
    width: 120,
    alignItems: 'center',
    marginTop: 10,
    padding: 30,
    borderRadius: 15,
    marginRight: 165,
    marginLeft: 10,
  },
  title: {
    backgroundColor: '#FF9700',
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    padding: 5,
    borderRadius: 15,
    fontSize: 20,
  },
  text:{
    color: '#010101',
    marginTop: 10,
    padding: 5,
    borderRadius: 15,
    fontSize: 15,
  },
  containerImg: {
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
  },
  cardText: {
    fontSize: 20,
    padding: 5,
    textAlign: 'center',
    color: '#FF9700',
    backgroundColor: '#010101',
    borderRadius: 10,
  },
  card:{
    marginTop: 10,
    paddingBottom: 1,
    backgroundColor: '#fff',
    marginBottom: 10,
    marginLeft: '2%',
    width: '96%',
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    }
  },
  cardImg:{
    width: '100%', 
    height: 200,
    resizeMode: 'cover',
    borderRadius: 15,

  }





});

export default Styles;