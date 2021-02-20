import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Account from '../../pages/Account';
import Home  from '../../pages/Home';
import News from '../../pages/News';

const Stack=createStackNavigator();

const HomeNavigator=()=> {
  return(
   <Stack.Navigator>
       <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Account" component={Account}></Stack.Screen>
        <Stack.Screen name="News" component={News}></Stack.Screen>
  </Stack.Navigator>

  ); 
}

export default HomeNavigator;
