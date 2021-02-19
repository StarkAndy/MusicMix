import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from './AuthStack';
import BottomNavigation from './bottomnavigaiton';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

const Route = (props) => {
  const [screen, changeScreen] = useState('Login');

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('loggedin');
      if (value !== null) {
        changeScreen('Home');
      }
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    getData();
  }, [screen]);
  return (
    <Stack.Navigator initialRouteName={screen}>
      {screen === 'Login' ? (
        <Stack.Screen name="Login" component={AuthStack}></Stack.Screen>
      ) : null}
      <Stack.Screen name="Home" component={BottomNavigation}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Route;
