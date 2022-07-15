import axios from 'axios';
import { UserDataType } from '../../types/types';
import $api from '../../http/index';
import { AUTH_ACTIONS_TYPES } from './index';

const loginStart = () => ({
  type: AUTH_ACTIONS_TYPES.LOGIN_START,
});

const loginSuccess = (token: any, user: any) => ({
  type: AUTH_ACTIONS_TYPES.LOGIN_SUCCESS,
  payload: {token, user},
});

const loginFail = (error: any) => ({
  type: AUTH_ACTIONS_TYPES.LOGIN_FAIL,
  payload: error,
});

const registerStart = () => ({
  type: AUTH_ACTIONS_TYPES.REGISTER_START,
});

const registerSuccess = (token: any, user: any) => ({
  type: AUTH_ACTIONS_TYPES.REGISTER_SUCCESS,
  payload: {token, user},
});

const registerFail = (error: any) => ({
  type: AUTH_ACTIONS_TYPES.REGISTER_FAIL,
  payload: error,
});

const logout = () => ({
  type: AUTH_ACTIONS_TYPES.LOGOUT,
});

export const setErrorEmpty = () => ({
  type: AUTH_ACTIONS_TYPES.SET_ERROR_EMPTY,
});

const checkAuthStart = () => ({
  type: AUTH_ACTIONS_TYPES.CHECK_AUTH_START,
});

const checkAuthSuccess = (token: any, user: any) => ({
  type: AUTH_ACTIONS_TYPES.CHECK_AUTH_SUCCESS,
  payload: {token, user},
});

const checkAuthFail = (error: any) => ({
  type: AUTH_ACTIONS_TYPES.CHECK_AUTH_FAIL,
  payload: error,
});

export const loginInitiate = (email: string, password: string) => {
  return function (dispatch: any) {
    dispatch(loginStart());
    dispatch(setErrorEmpty());
    // axios
    //   .post(`${process.env.REACT_APP_SERVER_API_URL}/login`, {
    //     email,
    //     password,
    //   })
    $api
      .post('/login', {
        email,
        password,
      })
      .then((response) => {
        dispatch(loginSuccess(response.data.accessToken, response.data.user));
        console.log(response.data.user)
        localStorage.setItem('token',response.data.accessToken);
      })
      .catch((error) => dispatch(loginFail(error.response.data.message)));
  };
};

export const logoutInitiate = () => {
  return function (dispatch: any) {
    // axios
    //   .post(`${process.env.REACT_APP_SERVER_API_URL}/logout`)
        $api
      .post('/logout')
      .then((response) => {
        dispatch(logout());
        localStorage.removeItem('token');
      })
      .catch((error) => console.log(error.response.data.message));
  };
};

export const registerInitiate = (userData: UserDataType) => {
  const { email, password, firstName, lastName, fatherName, phone } = userData;
  return function (dispatch: any) {
    dispatch(registerStart());
    dispatch(setErrorEmpty());
    // axios
    //   .post(`${process.env.REACT_APP_SERVER_API_URL}/registration`, {
    //     email,
    //     password,
    //     firstName,
    //     lastName,
    //     fatherName,
    //     phone,
    //   })
        $api
      .post('/registration', {
        email,
        password,
        firstName,
        lastName,
        fatherName,
        phone,
      })
      .then((response) => {
        dispatch(registerSuccess(response.data.accessToken, response.data.user));
        localStorage.setItem('token',response.data.accessToken);
      })
      .catch((error) => dispatch(registerFail(error.response.data.message)));
  };
};

export const checkAuthInitiate =() => {
  return function (dispatch: any) {
  dispatch(checkAuthStart());
    axios
      .get(`${process.env.REACT_APP_SERVER_API_URL}/refresh`, {withCredentials: true})
      .then((response) => {
        dispatch(checkAuthSuccess(response.data.accessToken, response.data.user));
        localStorage.setItem('token',response.data.accessToken);
      })
      .catch((error) => dispatch(checkAuthFail(error.response.data.message)));
  };
}