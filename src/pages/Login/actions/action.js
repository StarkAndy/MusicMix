import {LOGIN_FAILED,LOGIN_REQUEST,LOGIN_SUCCESS} from './actionstypes';

export const getLoginRequest=(username,pwd)=>({
    type:LOGIN_REQUEST,
    userid:username,
    password:pwd,
});

export const getLoginSucess=(data)=>({
    type:LOGIN_SUCCESS,
    payload: data,
});

export const getLoginFailed=(error)=>({
    type:LOGIN_FAILED,
    payload:error,
});