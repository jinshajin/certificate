import{ ALL_COURSE_FAIL, ALL_COURSE_REQUEST, ALL_COURSE_SUCCESS, CREATE_COURSE_FAIL, CREATE_COURSE_REQUEST, CREATE_COURSE_SUCCESS, DELETE_COURSE_FAIL, DELETE_COURSE_REQUEST, DELETE_COURSE_SUCCESS, GET_COURSE_DETAILS_FAIL, GET_COURSE_DETAILS_REQUEST, GET_COURSE_DETAILS_SUCCESS, UPDATE_COURSE_REQUEST, UPDATE_COURSE_SUCCESS }from "./actionType";




export const CreateCourseRequest = (input) => ({
    type: CREATE_COURSE_REQUEST,
    payload: input,
  });
  
  export const CreateCourseSuccess = (CreateCourseDetails) => ({
    type: CREATE_COURSE_SUCCESS,
    payload:  CreateCourseDetails,
  });
  
  export const CreateCourseFail = (error) => ({
    type: CREATE_COURSE_FAIL,
    payload: error,
  });
  


//................CREATECOURSE..........................//






  export const AllCourseRequest = () =>
  ({
  type: ALL_COURSE_REQUEST,
  payload: "",
  });
  
  export const AllCourseSuccess = (AllCourseDetails) => ({
  type: ALL_COURSE_SUCCESS,
  payload: AllCourseDetails,
  });
  
  export const AllCourseFail = (error) => ({
  type: ALL_COURSE_FAIL,
  payload: error,
  });
  


//......................ALLCOURSE..............................//



  export const deleteCourseRequest = (id) => ({
    type: DELETE_COURSE_REQUEST,
    payload: id,
  });
  
  export const deleteCourseSuccess = (CreateCourseDetails) => ({
    type: DELETE_COURSE_SUCCESS,
    payload:  "",
  });
  
  export const deleteCourseCategoryFail = (error) => ({
    type: DELETE_COURSE_FAIL,
    payload: error,
  });


//...................ALLCOURSES................................//



  export const getcoursedetailsRequest = () =>
({
type: GET_COURSE_DETAILS_REQUEST,
payload: "",
});

export const getcoursedetailsSuccess = (getcourseDetails) => ({
type: GET_COURSE_DETAILS_SUCCESS,
payload: getcourseDetails,
});

export const getcoursedetailsFail = (error) => ({
type: GET_COURSE_DETAILS_FAIL,
payload: error,
});


//....................SINGLECOURSEVIEW.............................//


export const updatecourseRequest = (id) =>
({
type: UPDATE_COURSE_REQUEST,
payload: id,
});

export const updatecourseSuccess = (updateCourse) => ({
type: UPDATE_COURSE_SUCCESS,
payload: updateCourse,
});

export const updatecourseFail = (error) => ({
type: UPDATE_COURSE_SUCCESS,
payload: error,
});

//.......................UPDATECOURSE..................................//