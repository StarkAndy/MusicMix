import {all} from 'redux-saga/effects';
import newsWatcher from '../../pages/News/saga';
import userRegisterWatcher from '../../pages/Account/registration/saga';
import loginWatcher from '../../pages/Account/login/saga';

export default function* rootSaga() {
  yield all([newsWatcher(),userRegisterWatcher(),loginWatcher()]);
}