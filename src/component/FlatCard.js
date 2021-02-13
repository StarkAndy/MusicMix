import React from 'react';
import {View, Text, Dimensions} from 'react-native';

const FlatCard = (props) => {
  return (
    <View style={{borderWidth: 1, flexDirection: 'row', width: '43%'}}>
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
      </View>
      <View style={{justifyContent: 'center', marginLeft: 12}}>
        <Text>{props.label}</Text>
      </View>
    </View>
  );
};

export default FlatCard;
