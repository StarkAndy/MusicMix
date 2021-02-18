import {REGISTER_FAILED,REGISTER_REQUEST,REGISTER_SUCCESS} from './actionstypes';

export const doUserRegister=(username,pwd,phno,gender,dob)=>({
    type:REGISTER_REQUEST,
    userid:username,
    password:pwd,
    phone:phno,
    gender:gender,
    dob: dob,
});

export const userRegisterSuccess=(data)=>({
    type:REGISTER_SUCCESS,
    payload: data,
});

export const userRegisterFailed=(error)=>({
    type:REGISTER_FAILED,
    payload:error,
});