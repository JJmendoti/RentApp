import {StyleSheet, Dimensions} from 'react-native';


//Estilos para recoverPassword
const stylesRecover = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#010101"

    },containerBack: {
        padding: 10,
        flexDirection: 'row',
        paddingTop: 40
    },
    imageBack: {
        width: 40,
        height: 40
    },
    containerCenter: {
        paddingTop: 10,
        alignItems: 'center',
        marginBottom: 25,
    },

    titleText: {
        fontSize: 28,
        marginTop: 20,
        color: "#fff",
        fontFamily: "Poppins-SemiBold"
    }, 
    input: {
        height:50,
        width: Dimensions.get('screen').width * 0.9,
        paddingRight: 15,
        marginTop:100,
        paddingBottom: 10,
        paddingLeft: 10,
        borderRadius: 16,
        backgroundColor: '#fff',
        color: '#424242',
    },
    
    btnMain: {
        width: 280,
        marginTop: 40,
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: '#ffc125',
        borderRadius: 60
    },

    btnTransparent: {
        backgroundColor: 'rgba(52, 52, 52, 0)',
        borderColor: '#fff',
        width: 280,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 60
    },

    btntxt: {
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
        paddingVertical: 15,
        
    },
    

    logo: {
        width: 350,
        height: 150,
        marginTop: 50,
    },
});

export default  stylesRecover;