import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAIL,
} from "./actionType";
//.................LOGIN.............................//

export const loginRequest = (input) => ({
  type: LOGIN_REQUEST,
  payload: input,
});

export const loginSuccess = (userDetails) => ({
  type: LOGIN_SUCCESS,
  payload: userDetails,
});

export const loginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
});

// ......LOGOUT...//

export const logoutRequest = (navigate) => ({
  type: LOGOUT_REQUEST,
  payload: navigate,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
  payload: {},
});

export const logoutFail = (error) => ({
  type: LOGOUT_FAIL,
  payload: error,
});

//    .....PROFILE....//

export const profileRequest = () => ({
  type: PROFILE_REQUEST,
  payload: "",
});

export const profileSuccess = (loginDetails) => ({
  type: PROFILE_SUCCESS,
  payload: loginDetails,
});

export const profileFail = () => ({
  type: PROFILE_FAIL,
  payload: "error",
});
