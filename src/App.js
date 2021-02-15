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

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import HomeReducer from './pages/Home/reducer';

const store = createStore(HomeReducer);

const App = () => {
  const [isEnabled, changeUseSate] = useState(true);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          {isEnabled ? <BottomNavigation /> : <Routes />}
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
