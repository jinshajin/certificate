import { axiosApi } from "../api_methods";
import {
CreateCourseRequest,CreateCourseSuccess,CreateCourseFail, AllCourseFail, AllCourseRequest, AllCourseSuccess, deleteCourseRequest, deleteCourseSuccess, deleteCourseCategoryFail, getcoursedetailsRequest, getcoursedetailsSuccess, getcoursedetailsFail, updatecourseRequest, updatecourseSuccess, updatecourseFail
} from "./action";


//.............................CREATECOURSE.........................//
  
export const  createcourseApi = (state, navigate) => {
    return async (dispatch) => {
      dispatch(CreateCourseRequest(state));
  
      try {
        const res = await axiosApi.post("/course/course/", state);
        console.log(res);
        dispatch(CreateCourseSuccess(res?.data));
        navigate("/Courses");
      } catch (error) {
        console.log(error);
        dispatch(CreateCourseFail(error?.res?.data));
      }
    };
  };
  
//..............................ALLCOURSE.............................//


  export const allcourseApi = (page) => {
 
 
    return async (dispatch) => {
      dispatch(AllCourseRequest());
  
      try {
        const res = await axiosApi.get(`/course/course/?page=${page ?page :1}`);
        if(res){
        // console.log(res);
        dispatch(AllCourseSuccess(res?.data));
        }
      } catch (error) {
        console.log(error);
        dispatch(AllCourseFail(error));
      }
    };
  };


//...................DELETECOURSE.......................................//

  export const deletecourseApi = (id,navigate,page) => {
 
 
    return async (dispatch) => {
      dispatch(deleteCourseRequest(id));
  
      try {
        const res = await axiosApi.delete(`/course/course/${id}`);
        if(res){
        // console.log(res);
        dispatch(deleteCourseSuccess(res?.data));
        navigate('/Courses')
        try {
          const res = await axiosApi.get(`/course/course/?page=${page ? page :1}`);
          if(res){
          // console.log(res);
          dispatch(AllCourseSuccess(res?.data));
          }
        } catch (error) {
          console.log(error);
          dispatch(AllCourseFail(error));
        }
        }
      } catch (error) {
        console.log(error);
        dispatch(deleteCourseCategoryFail(error));
      }
    };
  };
  
//...........................SINGLEVIEW..........................//


  export const getcourseApi = (id) => {
 
 
    return async (dispatch) => {
      dispatch(getcoursedetailsRequest());
  
      try {
        const res = await axiosApi.get(`/course/course/${id}`);
        if(res){
        // console.log(res);
        dispatch(getcoursedetailsSuccess(res?.data));
        }
      } catch (error) {
        console.log(error);
        dispatch(getcoursedetailsFail(error));
      }
    };
  };
  
//........................UPDATECOURSE.................................//

  
export const updatecourseApi = (id,state,navigate) => {
  return async (dispatch) => {
    dispatch(updatecourseRequest(id));

    try {
      const res = await axiosApi.put( `/course/course/${id}/`,state);
      console.log(res?.data);
      if(res){
      dispatch(updatecourseSuccess(res?.data));
      navigate(`/Courses`)
      }
      
    } catch (error) {
      console.log(error);
      dispatch(updatecourseFail(error));
    }
  };
};