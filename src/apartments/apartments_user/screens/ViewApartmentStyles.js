import {StyleSheet, Dimensions} from 'react-native';

const Styles = StyleSheet.create({
    container: {
    },
    container_not: {
        padding: 20,
        marginTop:100
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
    },
    container_btn: {
        padding: 20,
    },
    btn: {
        backgroundColor: '#FF9700',
        padding: 15,
        borderRadius: 10,
        marginTop:20
    },
    btn_text: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    containerBack: {
        padding: 10,
        flexDirection: 'row',
    },
    imageBack: {
        width: 40,
        height: 40
    },
    containerImg: {
        flex: 1
    },
    img: {
        flex: 1,
      width: 100,
      height: 100,
      resizeMode: 'contain',
      marginEnd: 20,
      borderRadius: 5
    }
  });

export default Styles;

