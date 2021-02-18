import {takeLatest, put, all} from 'redux-saga/effects';
import {
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS
} from '../actions/actionstypes';

import {userRegisterSuccess, userRegisterFailed} from '../actions/action';

function* handleUserRegister() {
  
  const json = yield fetch(
    'https://jsonplaceholder.typicode.com/todos/1',
  //  method: "GET",
  )
  .then((response) => 
    response.json()
  )
    .catch((error) => {
      errorHandle(error);
      console.log('ERROR====>'+ error);
    });
    
    console.log(json);
    yield put(userRegisterSuccess(json));
}

function* handleSucessPayload(json){
  console.log('RECEIVED JSON-PLACE-HOLDER RESPONSE: '+son);
  yield put(userRegisterSuccess(json));
}
function* errorHandle(error){
  yield put(REGISTER_FAILED,userRegisterFailed(error));
}

 export default function* userRegisterWatcher() {
  yield takeLatest(REGISTER_REQUEST, handleUserRegister)
}