
import { axiosApi } from "../api_methods";
import {
  loginFail,
  loginRequest,
  loginSuccess,
  logoutRequest,
  logoutSuccess,
  profileFail,
  profileRequest,
  profileSuccess,
} from "./action";

export const loginApi = (input, navigate) => {
  return async (dispatch) => {
    dispatch(loginRequest(input));

    try {
      const res = await axiosApi.post(`/account/login/`, input);
      console.log(res);
      sessionStorage.setItem("token", res?.data?.token);

      if (res?.data?.token) {
        dispatch(loginSuccess(res.data));
        navigate("/dashboard");
      }
    } catch (error) {
      dispatch(loginFail(error?.response?.data));
    }
  };
};
//..............LOGIN....................................//
export const logoutApi = (navigate) => {
  return async (dispatch) => {
    dispatch(logoutRequest());

    try {
      const token = sessionStorage.getItem("token");
      const res = await axiosApi.post(`/account/logout/`, token);
      console.log(res);
      if (res) {
        dispatch(logoutSuccess(res));
        sessionStorage.clear("token");
        navigate("/");
      }
    } catch (error) {
      dispatch(loginFail(error?.response?.data));
    }
  };
};

//...................LOGOUT................................//

export const profileApi=() =>{
  return async (dispatch) => {

    dispatch(profileRequest());
    try{
      const res=await axiosApi.get('./account/profile');
      console.log(res);

      if(res){
        dispatch(profileSuccess(res.data));
      }

    }catch (error){

      console.log(error);
      dispatch(profileFail(error?.response?.data));
    }
  };
};


//....................PROFILE..................................//