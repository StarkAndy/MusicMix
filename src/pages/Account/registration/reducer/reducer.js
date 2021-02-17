import {LOGIN_FAILED,LOGIN_REQUEST,LOGIN_SUCCESS} from '../../registration/actions/actionstypes';

const INIT_STATE={
    loading:false,
    data:'',
    error:'',
};

const reducer = (state = INIT_STATE, {type, payload}) => {
    switch (type) {
      case LOGIN_REQUEST:
          console.log('#1 LOGIN REUEST  EXECUTING');
        return {...state, loading: true};
  
      case LOGIN_SUCCESS:
        console.log('#2 LOGIN_SUCCESS  EXECUTING')
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