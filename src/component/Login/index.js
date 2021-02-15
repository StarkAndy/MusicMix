
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login,Registration} from '../../routes/links';

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return(
       <Stack.Navigator>
       <Stack.Screen name="Login" component={Login}/>
       <Stack.Screen name="Registration" component={Registration}/>
       </Stack.Navigator>
   );
}

export default AuthNavigator;