/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/auth/screens/login/LoginScreen.js';
import SignUp from './src/auth/screens/signup/SignUp.js';
import SplashScreen from './src/auth/screens/splash/SplashScreen';
import UserScreen from './src/auth/screens/user/UserScreen';
import RecoverPassword from './src/auth/screens/recover_password/RecoverPassword';
import Apartments from './src/apartments/screens/apartments/Apartments';
import Home from './src/home/screens/Home';
import HomeUser from './src/user/srceens/HomeUser.js';
import ApartmentsUser from './src/apartments/apartments_user/screens/ApartmentsUser.js';




const Stack = createStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="splash" component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="signup" component={SignUp} options={{headerShown: false}} />
        <Stack.Screen name="recovered" component={RecoverPassword} options={{headerShown: false}} />
        <Stack.Screen name="users" component={UserScreen} options={{headerShown: false}} />
        <Stack.Screen name="apartments" component={Apartments} options={{headerShown: false}} />
        <Stack.Screen name="home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="homeuser" component={HomeUser} options={{headerShown: false}} />
        <Stack.Screen name="apartmentuser" component={ApartmentsUser} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
