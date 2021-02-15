import React from 'react';
import {View, Text, FlatList,TouchableOpacity} from 'react-native';
import SuareCard from '../component/SquareCard';
//import { useNavigation } from '@react-navigation/native';

const PlayListSession2 = ({navigation,title,result}) => {

  

  itemClicked=(title,img)=> {
     navigation.navigate('Details', { title: title,img:img});
  }

  return (
    <View>
      <Text
        style={{
          color: 'white',
          marginLeft: 15,
          marginTop: 5,
          marginVertical: 5,
          fontSize: 24,
          fontWeight: 'bold',
          fontFamily: 'verdana',
        }}>
        {title}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <FlatList
          data={result}
          keyExtractor={(item1) => item1.id}
          horizontal
          renderItem={({item}) => (
          <TouchableOpacity style={{flex:1}} onPress={()=>{itemClicked(item.title,item.img)}}>
          <SuareCard title={item.title} img={item.img} />
          </TouchableOpacity>)
        }
        />
      </View>
    </View>
  );
};

export default PlayListSession2;
