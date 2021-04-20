import {StyleSheet, Dimensions} from 'react-native';

const Styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerBack: {
        padding: 10,
        flexDirection: 'row'
    },
    imageBack: {
        width: 40,
        height: 40
    },
    logo: {
        position: 'absolute',
        right: 10,
        top: 10
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
      inputContainer: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center'
    },input: {
        height:40,
        width: Dimensions.get('screen').width * 0.9,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        borderRadius: 16,
        backgroundColor: '#fff',
        color: '#424242',
    },
    containerTitle: {
        alignItems: 'center',
        marginBottom: 10
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    sign: {
        backgroundColor: '#D4AC0D',
        width: Dimensions.get('screen').width * 0.9,
        alignItems: 'center',
        marginBottom: 10,
        padding: 13,
        borderRadius: 16
      },
      signContainer: {
        alignItems: 'center',
  
      },
      signText: {
        fontWeight: 'bold'
      }
  });

export default Styles;

