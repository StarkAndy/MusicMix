import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {doUserRegister} from '../registration/actions/action';

class UserRegistration extends React.Component {
  constructor(props) {
    super(props);
  }

  userRegister = () => {
    this.props.register('Laxman', 'test$1234', '+9112345678990', '05/06/194');
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        {this.props.data.title ? this.props.navigation.navigate('Login') : null}
        {this.props.isloading ? (
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 32, color: '#880088', textAlign: 'center'}}>
              ...LOADING DATA...
            </Text>
          </View>
        ) : (
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={styles.titleStyle}>My Sportify App</Text>
            { this.props.data.userId ? (
              <Text
                style={{
                  justifyContent: 'center',
                  fontSize: 18,
                  color: 'green',
                  textAlign: 'center',
                }}>
                You are registered sucsessfully
              </Text>
            ) : null}
            <View style={styles.inputContainerStyle}>
              <Text style={styles.textStyle}>Username</Text>

              <TextInput
                placeholder="Enter Username"
                value="test user1"
                style={styles.textInputStyle}></TextInput>

              <Text style={styles.textStyle}>Password</Text>
              <TextInput
                placeholder="Enter Password"
                value="test user1"
                secureTextEntry={true}
                style={styles.textInputStyle}></TextInput>

              <Text style={styles.textStyle}>Mobile Number</Text>
              <TextInput
                placeholder="Phno with '+COUNTRY-CODE'"
                value="+911234567890"
                style={styles.textInputStyle}></TextInput>

              <Text style={styles.textStyle}>Date of Birth</Text>
              <TextInput
                placeholder="01/12/2021 format"
                value="01/01/1984"
                style={styles.textInputStyle}></TextInput>

              <TouchableOpacity
                style={styles.loginBtnStyle}
                onPress={() => this.userRegister()}>
                <Text style={styles.loginBtnTextStyle}>Register</Text>
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
    status: state.RegisterReducer.status,
    isloading: state.RegisterReducer.loading,
    data: state.RegisterReducer.data,
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    register: (userName, pwd, phno, gender, dob) =>
      dispatch(doUserRegister(userName, pwd, phno, gender, dob)),
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
    flex: 0.70,
  },
  textStyle: {
    fontSize: 18,
    padding: 7,
    marginHorizontal: 10,
  },
  titleStyle: {
    flex: 0.1,
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