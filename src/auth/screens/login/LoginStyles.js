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
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    logo: {
      width: 100,
      height: 100,
      marginTop: 14
    },
    logoContainer: {
      flex: 2,
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
    // input: {
    //   height:40,
    //   backgroundColor: "white",
    //   width: Dimensions.get('screen').width * 0.9,
    //   paddingHorizontal: 22,
    //   borderRadius: 16,
    //   marginTop: 40,
    //   shadowColor: "#000",
    //   shadowOpacity: 0.15,
    //   shadowRadius: 2.84,
    //   elevation: 4,
    // },
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
      marginTop: 20,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        height:40,
        width: Dimensions.get('screen').width * 0.9,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        borderRadius: 16,
        backgroundColor: '#fff',
        color: '#424242',
    },
  });

export default Styles;

