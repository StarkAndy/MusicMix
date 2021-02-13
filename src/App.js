/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Dimensions,View} from 'react-native';

import FlatCard from './component/FlatCard';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{width: Dimensions.get('window').width}}>
          <FlatCard label="Liked Songs" />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
