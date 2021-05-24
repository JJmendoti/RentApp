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
  });

export default Styles;