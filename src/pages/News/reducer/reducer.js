import {
  FAILURE_NEWS_DATA,
  GET_NEWS_DATA,
  SUCCESS_NEWS_DATA,
} from '../actions/actiontypes';

const INITIAL = {
  loading: false,
  data: '',
  error: '',
};

const reducer = (state = INITIAL, {type, payload}) => {
  switch (type) {
    case GET_NEWS_DATA:
      return {...state, loading: true};

    case SUCCESS_NEWS_DATA:
      return {...state, loading: false, data: payload};

    case FAILURE_NEWS_DATA:
      return {...state, loading: false, error: payload};

    default:
      return state;
  }
};

export default reducer;
