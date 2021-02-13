import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Home = (props) => {
  const test = props;
  const hello=test;

  return (
    <View>
      <TouchableOpacity onPress={() => props.navigation.navigate('Account')}>
        <Text>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
