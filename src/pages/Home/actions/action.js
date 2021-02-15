import {CHANGE_USER_INFORMATION} from './actionstypes';

export const changeUserInfo = (data) => ({
  type: CHANGE_USER_INFORMATION,
  payload: data,
});
