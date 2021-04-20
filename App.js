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



const Stack = createStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="signup" component={SignUp} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
