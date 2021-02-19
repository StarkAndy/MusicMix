import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserRegistration from '../pages/Account/registration/index';
import Login from '../pages/Account/login';

const Stack = createStackNavigator();

const AuthNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Register" component={UserRegistration}></Stack.Screen>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
