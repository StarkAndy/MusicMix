import {REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAILED} from '../../registration/actions/actionstypes';

const INIT_STATE={
    loading:false,
    data:'',
    error:'',
};

const reducer = (state = INIT_STATE, {type, payload}) => {
    switch (type) {
      case REGISTER_REQUEST:
          console.log('#1 REGISTER REUEST  EXECUTING');
        return {...state, loading: true};
  
      case REGISTER_SUCCESS:
        console.log('#2 REGISTER  EXECUTING')
        console.log(payload);
        return {...state, loading: false, data: payload};
  
      case REGISTER_FAILED:
        console.log('#3 REGISTER EXECUTING')
        //  console.log('login request failed / cancelled due to '+payload);
        return {...state, loading: false, error: payload};
  
      default:
        return state;
    }
  };
  
  export default reducer;