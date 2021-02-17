import {takeLatest, put, all} from 'redux-saga/effects';
import newsWatcher from '../../pages/News/saga';
import loginWatcher from '../../pages/Account/registration/saga';


export default function* rootSaga() {
  yield all([newsWatcher(),loginWatcher()]);
}