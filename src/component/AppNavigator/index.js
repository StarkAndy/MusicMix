import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Account,Settings} from '../../routes/links';

//import {HomeNavigator} from './HomeTab'

import {createStackNavigator} from '@react-navigation/stack';

import {Home,Details} from '../../pages/Home/links';

const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const HomeNavigator = () => {
  return(
     <Stack.Navigator>
     <Stack.Screen name="Home" component={Home}/>
     <Stack.Screen name="Details" component={Details}/>
     </Stack.Navigator>
 );
}
function AppNavigator({}) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
export default AppNavigator;