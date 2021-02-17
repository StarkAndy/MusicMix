import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {getLoginRequest} from '../registration/actions/action';

class UserRegistration extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log('Login Status: ' + this.props.isloading);
  }

  doLogin = () => {
    this.props.login('Laxman', 'test$1234');
  };

  render() {
    return (
      
        <View style={styles.containerStyle}>
          {this.props.isloading ? (
            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
                justifyContent: 'center',
              }}>
              <Text
                style={{fontSize: 30, color: '#880088', textAlign: 'center'}}>
                ...LOADING DATA...
              </Text>
            </View>
          ) : (
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={styles.titleStyle}>My Sportify App</Text>
              <View style={styles.inputContainerStyle}>
                <Text style={styles.textStyle}>Username</Text>
                <TextInput
                  placeholder="Enter Username"
                  style={styles.textInputStyle}></TextInput>
                <View style={{flex: 0.3}}></View>
                <Text style={styles.textStyle}>Password</Text>
                <TextInput
                  placeholder="Enter Password"
                  secureTextEntry={true}
                  style={styles.textInputStyle}></TextInput>
                <TouchableOpacity
                  style={styles.loginBtnStyle}
                  onPress={() => this.doLogin()}>
                  <Text style={styles.loginBtnTextStyle}>submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.LoginReducer.status,
    isloading: state.LoginReducer.loading,
    data: state.LoginReducer.data,
    //  userId:state.LoginReducer.userId,
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    login: (userName, pwd) => dispatch(getLoginRequest(userName, pwd)),
  };
};

export default connect(mapStateToProps, mapsDispatchToProps)(UserRegistration);

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    marginHorizontal: 8,
    justifyContent: 'center',
    paddingVertical: 15,
  },
  inputContainerStyle: {
    paddingTop: 7,
    marginBottom: 7,
    borderColor: '#afafaf',
    marginHorizontal: 8,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 0.5,
    flex: 0.37,
  },
  textStyle: {
    fontSize: 18,
    padding: 7,
    marginHorizontal: 10,
  },
  titleStyle: {
    flex: 0.15,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 7,
    marginHorizontal: 10,
    textAlign: 'center',
    color: 'black',
    marginVertical: 15,
  },
  textInputStyle: {
    fontSize: 18,
    padding: 7,
    paddingLeft: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    marginBottom: 8,
  },
  loginBtnStyle: {
    marginTop: 18,
    paddingVertical: 10,
    marginHorizontal: 18,
    justifyContent: 'center',
    backgroundColor: 'gray',
    borderRadius: 7,
    borderWidth: 0.5,
  },
  loginBtnTextStyle: {
    fontSize: 18,
    paddingHorizontal: 10,
    color: 'white',
    textAlign: 'center',
  },
});

//connect(mapStateToProps, mapsDispatchToProps)(UserRegistration);
