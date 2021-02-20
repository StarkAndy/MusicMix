import {takeLatest,takeEvery, put} from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
} from '../actions/actionstypes';

import {getLoginSucess, getLoginFailed} from '../actions/action';

function* handleLogin() {
  
  console.log('handleLogin');
  const json = yield fetch(
    'https://jsonplaceholder.typicode.com/users/1/posts/',
  )
  .then((response) => response.json())
    .catch((error) => {
      errorHandle(error);
      console.log('ERROR====>'+ error);
    });

    console.log(json);
    yield put(getLoginSucess(json));
}

function* errorHandle(error){
  yield put(getLoginFailed(error));
}

 export default function* loginWatcher() {
  yield takeEvery(LOGIN_REQUEST, handleLogin)
}