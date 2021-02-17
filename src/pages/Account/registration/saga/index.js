import {takeLatest, put, all} from 'redux-saga/effects';
import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from '../actions/actionstypes';

import {getLoginSucess, getLoginFailed} from '../actions/action';

function* handleLogin() {
  
  const json = yield fetch(
    'https://api.mixcloud.com/spartacus/party-time/',
  )
    .then((response) => {
      //response.json();
      console.log(response.json());
    //  yield put(LOGIN_SUCCESS,getLoginSucess(response.data));
    })
    .catch((error) => {
      errorHandle(error);
      console.log('ERROR====>'+ error);
    });

  console.log('DATA==>', json);
  yield put(getLoginSucess(json));
}

function* errorHandle(error){
  yield put(LOGIN_FAILED,getLoginFailed(error));
}

 export default function* loginWatcher() {
  yield takeLatest(LOGIN_REQUEST, handleLogin)
}