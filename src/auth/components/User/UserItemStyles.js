import {StyleSheet, Dimensions} from 'react-native';

const Styles = StyleSheet.create({
    container: {
      padding: 10,
      display: 'flex',
      flexDirection: 'row',
      borderWidth: 3,
      borderColor: "#E1E1E1",
      borderRadius: 6,
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