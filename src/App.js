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
} from 'react-native';

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
import logger from 'redux-logger';
import rootSaga from './routes/sagas';

const sagaMiddleWear = createSagaMiddleware();

const reducers = combineReducers({HomeReducer, NewsReducer, RegisterReducer});

const store = createStore(reducers, applyMiddleware(sagaMiddleWear));

sagaMiddleWear.run(rootSaga);

const App = () => {

  //console.log('User Registration Status: '+this.props)

  //console.log(this.props.HomeReducer.userInfo);

  const [isEnabled, changeUseSate] = useState(false);

  //this.state.RegisterReducer.data ? changeUseSate(true) : changeUseSate(false);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          {isEnabled ? <BottomNavigation /> : <AuthNavigator />}
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
