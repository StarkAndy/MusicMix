import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import {changeUserInfo} from './actions/action';
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.props.saveUserInfo('Hello');
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Account')}>
          <Text>Account</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: '',
  };
};

const mapDispatchState = (dispatch) => {
  return {
    saveUserInfo: (data) => dispatch(changeUserInfo(data)),
  };
};

export default connect(mapStateToProps, mapDispatchState)(Home);
