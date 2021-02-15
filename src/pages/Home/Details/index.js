import React from 'react';
import {View,Dimensions,Image,Text} from 'react-native';
import SuareCard from '../../../component/SquareCard';

const Details = ({route}) => {
  const {title,img} =route.params;
 // console.log(route.params);
  return (
    <View style={{flex:1,backgroundColor:'black'}}>
    <View
    style={{
      marginHorizontal:10,
      borderWidth: 0.1,
      justifyContent:'center',
      height: Dimensions.get('window').height/1.2,
      width: Dimensions.get('window').width,
      marginTop: 5,
    }}>
      <Image
        source={img}
        style={{height: '60%', width: '100%'}}
      />
      <Text
        style={{
          backgroundColor: 'transparent',
      
          flex: 0.25,
          fontSize: 18,
          marginTop: 5,
          color: 'white',
        }}>
        {title}
      </Text>
  </View>
  </View>
  );
};
export default Details;
