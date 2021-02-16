import {
  GET_NEWS_DATA,
  SUCCESS_NEWS_DATA,
  FAILURE_NEWS_DATA,
} from './actiontypes';

export const getNewsData = () => ({
  type: GET_NEWS_DATA,
});

export const newsDataSuccess = (data) => ({
  type: SUCCESS_NEWS_DATA,
  payload: data,
});

export const newDataFailure = (error) => ({
  type: FAILURE_NEWS_DATA,
  payload: error,
});
