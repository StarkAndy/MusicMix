import React from 'react';
import {StyleSheet, Text, View,ScrollView} from 'react-native';
import {connect} from 'react-redux';

import {getNewsData} from './actions/action';

class News extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchNewsData();
   // console.log('fetched result: ',this.props.data.totalResults);
  }
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:20,color:'#880088'}}>News Fetching</Text>
        <ScrollView style={{flex:1}}>
    <Text style={{fontSize:16,marginVertical:15}}>Fetched Results: {JSON.stringify(this.props.data)}</Text>
    </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.NewsReducer.data.articles,
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    fetchNewsData: () => dispatch(getNewsData()),
  };
};

export default connect(mapStateToProps, mapsDispatchToProps)(News);
