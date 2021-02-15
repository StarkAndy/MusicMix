import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AuthNavigator from '../component/Login';

import AppNavigator from '../component/AppNavigator';

import { StatusBar, Platform,View,Dimensions } from 'react-native';


const window=Dimensions.get('window');
const Routes = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
    {
      Platform.OS=='ios' && isLogin ? <View style={{height:window.height/8,backgroundColor:'transparent'}}></View> : null
    }
    <StatusBar barStyle='dark-content' backgroundColor='black' translucent={false} />
    <NavigationContainer>
      {isLogin ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
    </>
  );
};
export default Routes;
