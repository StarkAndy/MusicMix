/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './routes/bottomnavigaiton';
import AuthNavigator from './navigation/auth';
//import Routes from './routes';
//import {bottomNavigation, AuthNavigator} from './routes/links';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import HomeReducer from './pages/Home/reducer';
import NewsReducer from './pages/News/reducer/reducer';
import RegisterReducer from './pages/Account/registration/reducer/reducer';
import LoginReducer from './pages/Login/reducer/reducer';
import logger from 'redux-logger';
import rootSaga from './routes/sagas';
import AsyncStorage from '@react-native-community/async-storage';
import AppContext from './routes/appContext';

const sagaMiddleWear = createSagaMiddleware();

const reducers = combineReducers({
  HomeReducer,
  NewsReducer,
  RegisterReducer,
  LoginReducer,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleWear));

sagaMiddleWear.run(rootSaga);

const App=()=> {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [setting1value, setSetting1value] = useState('initialValue1');
  const [setting2value, setSetting2value] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const toggleSetting2 = () => {
    console.log('toggleSettings 2 called !');
    setting3 ? setSetting2(true) : setSetting2value(false);
  };

  const userSettings = {
    setting1name: setting1value,
    setting2name: setting2value,
    setSetting1value,
    toggleSetting2,
  };


  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('loggedIn');

      console.log('loggedIn: ' + value);  

      if (value !== null) {
          setIsLoggedIn(true);
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          {isLoggedIn ? <BottomNavigation /> : <AuthNavigator/>}
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
