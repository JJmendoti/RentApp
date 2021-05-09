import {StyleSheet, Dimensions} from 'react-native';

const Styles = StyleSheet.create({
    container: {
      padding: 10,
      display: 'flex',
      flexDirection: 'row',
      borderWidth: 3,
      borderColor: "#E1E1E1",
      borderRadius: 6,
      width: Dimensions.get('screen').width * 1,
    },
    logo: {
      flex: 1,
      width: 100,
      height: 100,
      resizeMode: 'contain',
      marginEnd: 20,
      borderRadius: 5
    },
    name: {
      fontSize: 15,
      fontWeight: 'bold'
    }

  });

export default Styles;