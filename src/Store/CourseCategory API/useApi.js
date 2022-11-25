
import { axiosApi } from "../api_methods";
import {
  CreateCourseCategoryRequest,CreateCourseCategorySuccess,CreateCourseCategoryFail, AllCourseCategoryRequest, AllCourseCategorySuccess, AllCourseCategoryFail, updatecoursecategoryRequest, updatecoursecategorySuccess, updatecoursecategoryFail, deleteCourseCategoryRequest, deleteCourseCategorySuccess, deleteCourseCategoryFail, getcoursecategorydetailsRequest, getcoursecategorydetailsSuccess, getcoursecategorydetailsFail
} from "./action";

//...................CREATECOURSECATEGORY..............................//
  
export const  createcoursecategoryApi = (state, navigate) => {
    return async (dispatch) => {
      dispatch(CreateCourseCategoryRequest(state));
  
      try {
        const res = await axiosApi.post(`/course/course_category/`, state);
        console.log(res);
        dispatch(CreateCourseCategorySuccess(res?.data));
        navigate("/coursecategory");
      } catch (error) {
        console.log(error);
        dispatch(CreateCourseCategoryFail(error?.res?.data));
      }
    };
  };
  


//...................ALLCOURSECATEGORY...............//
  

export const allcoursecategoryApi = (page) => {
 
 
  return async (dispatch) => {
    dispatch(AllCourseCategoryRequest());

    try {
      const res = await axiosApi.get(`/course/course_category/?page=${page ?page :1}`);
      if(res){
      // console.log(res);
      dispatch(AllCourseCategorySuccess(res?.data));
      }
    } catch (error) {
      console.log(error);
      dispatch(AllCourseCategoryFail(error));
    }
  };
};



//.........................SINGLEVIEW........................./
export const getcoursecategoryApi = (id) => {
 
 
  return async (dispatch) => {
    dispatch(getcoursecategorydetailsRequest());

    try {
      const res = await axiosApi.get(`/course/course_category/${id}`);
      if(res){
      // console.log(res);
      dispatch(getcoursecategorydetailsSuccess(res?.data));
      }
    } catch (error) {
      console.log(error);
      dispatch(getcoursecategorydetailsFail(error));
    }
  };
};















  

export const deletecourseCategoryApi = (id,navigate,page) => {
 
 
  return async (dispatch) => {
    dispatch(deleteCourseCategoryRequest(id));

    try {
      const res = await axiosApi.delete(`/course/course_category/${id}`);
      if(res){
      // console.log(res);
      dispatch(deleteCourseCategorySuccess(res?.data));
      navigate('/coursecategory')
      try {
        const res = await axiosApi.get(`/course/course_category/?page=${page ? page :1}`);
        if(res){
        // console.log(res);
        dispatch(AllCourseCategorySuccess(res?.data));
        }
      } catch (error) {
        console.log(error);
        dispatch(AllCourseCategoryFail(error));
      }
      }
    } catch (error) {
      console.log(error);
      dispatch(deleteCourseCategoryFail(error));
    }
  };
};





export const updatecoursecategoryApi = (id,state,navigate) => {
  return async (dispatch) => {
    dispatch(updatecoursecategoryRequest(id));

    try {
      const res = await axiosApi.put( `/course/course_category/${id}/`,state);
      console.log(res);
      if(res){
      dispatch(updatecoursecategorySuccess(res?.data));
      navigate(`/CourseCategory`)
      }
      
    } catch (error) {
      console.log(error);
      dispatch(updatecoursecategoryFail(error));
    }
  };
};