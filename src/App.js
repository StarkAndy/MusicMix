/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Dimensions,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import BottomNavigation from './routes/bottomnavigaiton';

const App = () => {
  const [isEnabled, changeUseSate] = useState(true);
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        {isEnabled ? <BottomNavigation /> : <Routes />}
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
