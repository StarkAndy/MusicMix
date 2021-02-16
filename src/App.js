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
import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';

import HomeReducer from './pages/Home/reducer';
import NewsReducer from './pages/News/reducer/reducer';
import logger from 'redux-logger';

import rootSaga from './pages/News/saga';

const sagaMiddleWear = createSagaMiddleware();
const reducers = combineReducers({HomeReducer, NewsReducer});
const store = createStore(reducers, applyMiddleware(sagaMiddleWear, logger));

sagaMiddleWear.run(rootSaga);
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
