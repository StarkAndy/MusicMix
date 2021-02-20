import {LOGIN_FAILED,LOGIN_REQUEST,LOGIN_SUCCESS} from '../actions/actionstypes';

const LOGIN_INIT_STATE={
    loading:false,
    data:'',
    error:'',
};

const reducer = (state = LOGIN_INIT_STATE, {type, payload}) => {
    switch (type) {
      case LOGIN_REQUEST:
          console.log('#1 LOGIN REUEST  EXECUTING');
        return {...state, loading: true};
  
      case LOGIN_SUCCESS:
        console.log('#2 LOGIN_SUCCESS  EXECUTING')
        console.log(payload);
        return {...state, loading: false, data: payload};
  
      case LOGIN_FAILED:
        console.log('#3 LOGIN_FAILED  EXECUTING')
        //  console.log('login request failed / cancelled due to '+payload);
        return {...state, loading: false, error: payload};
  
      default:
        return state;
    }
  };
  
  export default reducer;