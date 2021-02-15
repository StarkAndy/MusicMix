import {CHANGE_USER_INFORMATION} from '../actions/actionstypes';

const INITIAL_STATe = {
  userInfo: '',
};

const reducer = (state = INITIAL_STATe, {type, payload}) => {
  switch (type) {
    case CHANGE_USER_INFORMATION:
      return {...state, userInfo: payload};

    default:
      return state;
  }
};

export default reducer;
