import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import Home from '../Home';

const Account = (props) => {
  return (
    <View>
    <TouchableOpacity 
    onPress={()=>props.navigation.navigate('Settings')} 
    style={{marginTop:15,justifyContent:'center'}}>
      <Text>Settings</Text>
    </TouchableOpacity>
    </View>
  );
};

export default Account;
