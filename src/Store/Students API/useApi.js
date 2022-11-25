// import { navigate}  from "react-router-dom";
import { axiosApi } from "../api_methods";
import {
  createStudentFail,
  createStudentRequest,
  createStudentSuccess,
  studentRequest,
  studentSuccess,
  studentFail,
  singleviewRequest,singleviewSuccess,singleviewFail,
  deletestudentRequest,deletestudentSuccess,deletestudentFail,
  updatestudentRequest,updatestudentSuccess,updatestudentFail, createNewcourseRequest, createNewcourseSuccess, AllStudentcourseRequest, AllStudentcourseSuccess, AllStudentcourseFail, deleteStudentCourseRequest, deleteStudentCourseFail, deleteStudentCourseSuccess
} from "./action";

export const studentCreateApi = (state, navigate) => {
  return async (dispatch) => {
    dispatch(createStudentRequest(state));

    try {
      const res = await axiosApi.post("/student/student/", state);
      console.log(res);
      dispatch(createStudentSuccess(res?.data));
      navigate("/allstudents");
    } catch (error) {
      console.log(error);
      dispatch(createStudentFail(error?.res?.data));
    }
  };
};





//............CREATESTUDENTS...............//


export const studentApi = (page) => {
 
 
  return async (dispatch) => {
    dispatch(studentRequest());

    try {
      const res = await axiosApi.get(`/student/student/?page=${page ?page :1}`);
      if(res){
      // console.log(res);
      dispatch(studentSuccess(res?.data));
      }
    } catch (error) {
      console.log(error);
      dispatch(studentFail(error));
    }
  };
};







//..............SINGLEVIEW...................//




export const singleviewApi = (id) => {
  return async (dispatch) => {
    dispatch(singleviewRequest());

    try {
      const res = await axiosApi.get( `/student/student/${id}`);
      console.log(res);
      if(res){
      dispatch(singleviewSuccess(res?.data));
      }
      
    } catch (error) {
      console.log(error);
      dispatch(singleviewFail(error));
    }
  };
};


//..............DELETESTUDENT........//


export const deleteStudentApi = (id,navigate) => {
  return async (dispatch) => {
    dispatch(deletestudentRequest(id));

    try {
      const res = await axiosApi.delete( `/student/student/${id}`);
      console.log(res);
      if(res){
      dispatch(deletestudentSuccess(res?.data));
      navigate('/allstudents')
      }
      
    } catch (error) {
      console.log(error);
      dispatch(deletestudentFail(error));
    }
  };
};


//...............UPDATESTUDENT...................//


export const updateStudentApi = (id,state,navigate) => {
  return async (dispatch) => {
    dispatch(updatestudentRequest(id));

    try {
      const res = await axiosApi.put( `/student/student/${id}/`,state);
      console.log(res);
      if(res){
      dispatch(updatestudentSuccess(res?.data));
      navigate(`/studentview/${id}`)
      }
      
    } catch (error) {
      console.log(error);
      dispatch(updatestudentFail(error));
    }
  };
};

//.................CREATE NEW COURSE......................//

export const CreateNewcourseApi = (state, navigate) => {
  return async (dispatch) => {
    dispatch(createNewcourseRequest(state));

    try {
      const res = await axiosApi.post("/student/student_course/", state);
      console.log(res);
      dispatch(createNewcourseSuccess(res?.data));
      navigate("/studentcourse");
    } catch (error) {
      console.log(error);
      dispatch(createNewcourseSuccess(error?.res?.data));
    }
  };
};



//...................ALLCOURSE...................//


export const allstudentcourseApi = (page) => {
 
 
  return async (dispatch) => {
    dispatch(AllStudentcourseRequest());

    try {
      const res = await axiosApi.get(`/student/student_course/?page=${page ?page :1}`);
      if(res){
      // console.log(res);
      dispatch(AllStudentcourseSuccess(res?.data));
      }
    } catch (error) {
      console.log(error);
      dispatch(AllStudentcourseFail(error));
    }
  };
};


//.....................DELETECOURSE................................//
  

export const deletestudentcourseApi = (id,navigate,page) => {
 
 
  return async (dispatch) => {
    dispatch(deleteStudentCourseRequest(id));

    try {
      const res = await axiosApi.delete(`/student/student_course/${id}`);
      if(res){
      // console.log(res);
      dispatch(deleteStudentCourseSuccess(res?.data));
      navigate('/studentcourse')
      try {
        const res = await axiosApi.get(`/student/student_course/?page=${page ? page :1}`);
        if(res){
        // console.log(res);
        dispatch(AllStudentcourseSuccess(res?.data));
        }
      } catch (error) {
        console.log(error);
        dispatch(AllStudentcourseFail(error));
      }
      }
    } catch (error) {
      console.log(error);
      dispatch(deleteStudentCourseFail(error));
    }
  };
};
