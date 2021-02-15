import React from 'react';
import {View,} from 'react-native';
import PlayListSession2 from '../../component/PlayListSession2';

const play_list = [
  {id: '1', title: 'Locked Songs', img: require('../../../resources/item1.png')},
  {
    id: '2',
    title: 'Black pink kill this love',
    img: require('../../../resources/item2.png'),
  },
  {id: '3', title: 'Today Top Hits', img: require('../../../resources/item3.png')},
];

const play_list2 = [
  {
    id: '1',
    title: 'Yuvan Shankar Raja, G.V. Prakash, Anirudh..',
    img: require('../../../resources/item3.png'),
  },
  {
    id: '2',
    title: 'Sid Sriram,Yuvan Shankar Raja, G.V. Prakash..',
    img: require('../../../resources/item1.png'),
  },
  {
    id: '3',
    title: 'Your daily updates of the most played tracks in..',
    img: require('../../../resources/item2.png'),
  },
];

const Home = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
      }}>
      <View style={{flex: 1}}>
        <PlayListSession2 title="Recently played" result={play_list} navigation={navigation} />
        <PlayListSession2 title="Try something else" result={play_list2}  navigation={navigation} />
      </View>
    </View>
  );
};

export default Home;
