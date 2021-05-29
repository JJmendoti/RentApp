import {StyleSheet, Dimensions} from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 11
    },
    itemTitle: {
      fontWeight: 'bold',
      fontSize: 25
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
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
        flexDirection: 'row',
        marginBottom: 10
    },
    imageBack: {
        width: 40,
        height: 40
    },
    containerTitle: {
        marginBottom: 20
    },
    img: {
        width: '100%',
        height: '30%',
        borderRadius: 10,
    },
    item:{
        fontSize: 15,
        marginBottom: 5,
    },
    itemContainer:{
        marginTop: 25,
        marginBottom: 15
    },
    del:{
        backgroundColor: '#D75F00',
        marginBottom: 5,
        padding: 15,
        borderRadius: 15
    },
    edit:{
        backgroundColor: '#F0B52E',
        marginBottom: 5,
        padding: 15,
        borderRadius: 15
    },
    btnText:{
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    }
  });

export default Styles;

