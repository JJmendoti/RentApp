import {StyleSheet, Dimensions} from 'react-native';

const Styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    iconContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center'
    },
    logo: {
      width: 250,
      height: 110
    },
    logoContainer: {
      flex: 1,
      alignItems: "center"
    },
    textContainer:{
        flex: 1,
        alignItems: "flex-end",
        paddingRight: 15,
        justifyContent: "flex-end",
        paddingBottom: 15
    },
    textLogo: {
        color: "white",
        fontStyle: "italic",
        fontSize: 22
    },
    btn: {
        width: Dimensions.get('screen').width * 0.9,
    },
    searchSection: {
      height:40,
      width: Dimensions.get('screen').width * 0.9,
      flexDirection: 'row',
      justifyContent: 'center',
      borderRadius: 16,
      alignItems: 'center',
      backgroundColor: '#fff',
      marginTop: 10,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        height:40,
        width: Dimensions.get('screen').width * 0.9,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        borderRadius: 16,
        backgroundColor: '#fff',
        color: '#424242',
    },
    register: {
      backgroundColor: '#D4AC0D',
      width: 100,
      alignItems: 'center',
      marginTop: 10,
      padding: 10,
      borderRadius: 16,

    },
    registerContainer: {
    alignItems: 'flex-end',
    paddingRight: 10,
    },
    signContainer: {
      alignItems: 'center',

    },
    sign: {
      backgroundColor: '#D4AC0D',
      width: Dimensions.get('screen').width * 0.9,
      alignItems: 'center',
      marginBottom: 10,
      padding: 13,
      borderRadius: 16,
    },
    recovered: {
      marginTop: 10,
      alignSelf: 'flex-end',
      paddingRight: 20
    },
    recoveredText: {
      color: '#fff'
    }
  });

export default Styles;

