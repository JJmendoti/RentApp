import {StyleSheet, Dimensions} from 'react-native';

const Styles = StyleSheet.create({
    container: {
      padding: 10,
      display: 'flex',
      flexDirection: 'row',
      margin: 5,
      borderRadius: 10,
      borderColor: "#010101",
      borderWidth: 1,
    },
    logo: {
      flex: 1,
      width: 80,
      height: 80,
      resizeMode: 'contain',
      marginEnd: 20
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold'
    }

  });

export default Styles;