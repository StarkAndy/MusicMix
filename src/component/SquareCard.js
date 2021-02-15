import React from 'react';
import {View, Text, Dimensions, Image} from 'react-native';


const SquareCard = ({title, img}) => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        borderWidth: 0.1,
        borderColor: 'black',
        height: Dimensions.get('window').height / 4,
        width: Dimensions.get('window').width / 3.1,
        marginTop: 5,
        marginLeft: 18,
      }}>
        <Image
          source={img}
          style={{flex: 0.75, height: '80%', width: '100%'}}
        />
        <Text
          style={{
            backgroundColor: 'transparent',
            flex: 0.25,
            fontSize: 14,
            marginTop: 5,
            color: 'white',
          }}>
          {title}
        </Text>
    </View>
  );
};

export default SquareCard;
