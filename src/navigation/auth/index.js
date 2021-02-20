import React, { useState } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserRegistration from '../../pages/Account/registration';
import Login from '../../pages/Login';
import AsyncStorage from '@react-native-community/async-storage';
import BottomNavigation from '../../routes/bottomnavigaiton';

const Stack=createStackNavigator();

const AuthNavigator=()=> {

  const [isUserLoggedIn,setIsUserLoggedIn] = useState(false);

  const getData = async () => {
    try {
      const loggedIn = await AsyncStorage.getItem('loggedIn');

      console.log('isUserLoggedIn: ' + loggedIn);

      if (value !== null) {
        setIsUserLoggedIn(true);
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };
  return(
    <>
    {
      getData,
      isUserLoggedIn ? <BottomNavigation/> :
   <Stack.Navigator>
        <Stack.Screen name="Register" component={UserRegistration}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
  </Stack.Navigator>
    }
    </>
  ); 
}
export default AuthNavigator;
