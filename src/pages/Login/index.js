import React ,{useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  NativeModules,
} from 'react-native';
import {connect} from 'react-redux';
import {getLoginRequest} from './actions/action';
import AsyncStorage from '@react-native-community/async-storage';

class Login extends React.Component {

  //const myContext = useContext(AppContext);

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log('Login Status: ' + this.props.data.length);
    this.storeData(this.props.data.length);

  }

  storeData = async (value) => {
    try {
      await AsyncStorage.setItem('loggedIn', ''+value);
      NativeModules.DevSettings.reload();
    } catch (e) {
      console.log('AsyncStore error: ' + e);
      // saving error
    }
  };

  doLogin = () => {
    this.props.login('Laxman', 'test$1234');
  };

  render() {
    return (
      <>
          <View style={styles.containerStyle}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={styles.titleStyle}>My Sportify App</Text>
              <View style={styles.inputContainerStyle}>
                <Text style={styles.textStyle}>Username</Text>
                <TextInput
                  placeholder="Enter Username"
                  style={styles.textInputStyle}></TextInput>
                <Text style={styles.textStyle}>Password</Text>
                <TextInput
                  placeholder="Enter Password"
                  secureTextEntry={true}
                  style={styles.textInputStyle}></TextInput>
                <TouchableOpacity
                  style={styles.loginBtnStyle}
                  onPress={() => this.doLogin()}>
                  <Text style={styles.loginBtnTextStyle}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </>
        
    );
 }
}

const mapStateToProps = (state) => {
  return {
    error: state.LoginReducer.error,
    //isloading: false,
    data: state.LoginReducer.data,
    userId: state.RegisterReducer.data.userId,
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    login: (userName, pwd) => dispatch(getLoginRequest(userName, pwd)),
  };
};

export default connect(mapStateToProps, mapsDispatchToProps)(Login);

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
    flex: 0.58,
  },
  textStyle: {
    fontSize: 18,
    padding: 7,
    marginHorizontal: 10,
  },
  titleStyle: {
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