import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

import {getNewsData} from './actions/action';

class News extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchNewsData();
  }
  render() {
    return (
      <View>
        <Text></Text>
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
