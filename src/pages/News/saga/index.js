import {takeLatest, put, all} from 'redux-saga/effects';
import {
  GET_NEWS_DATA,
  SUCCESS_NEWS_DATA,
  FAILURE_NEWS_DATA,
} from '../actions/actiontypes';
import {newsDataSuccess, newDataFailure} from '../actions/action';

function* fetchNewsData() {
  const json = yield fetch(
    'http://newsapi.org/v2/everything?q=tesla&from=2021-01-16&sortBy=publishedAt&apiKey=525d59de9c564eceb17a9d1cf351f174',
  )
    .then((response) => response.json())
    .catch((error) => {
      console.log('ERROR', er);
    });

  console.log('DATA', json);
  yield put(newsDataSuccess(json));
}

function* newsWatcher() {
  yield takeLatest(GET_NEWS_DATA, fetchNewsData);
}

export default function* rootSaga() {
  yield all([newsWatcher()]);
}
