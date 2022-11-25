import { CREATE_COURSE_SUCCESS } from "../Course API/actionType";
import { CREATE_FAIL, CREATE_REQUEST, CREATE_SUCCESS ,STUDENT_REQUEST,STUDENT_SUCCESS,STUDENT_FAIL,SINGLE_VIEW_REQUEST,SINGLE_VIEW_SUCCESS,SINGLE_VIEW_FAIL, DELETE_STUDENT_REQUEST, DELETE_STUDENT_SUCCESS, DELETE_STUDENT_FAIL,UPDATE_STUDENT_REQUEST,UPDATE_STUDENT_SUCCESS,UPDATE_STUDENT_FAIL, CREATE_NEW_COURSE_REQUEST, CREATE_NEW_COURSE_FAIL, ALL_STUDENT_COURSE_REQUEST, ALL_STUDENT_COURSE_SUCCESS, ALL_STUDENT_COURSE_FAIL, DELETE_STUDENT_COURSE_REQUEST, DELETE_STUDENT_COURSE_SUCCESS, DELETE_STUDENT_COURSE_FAIL} from "./actionType";
    
export const createStudentRequest = (input) =>
({
type: CREATE_REQUEST,
payload: input,
});

export const createStudentSuccess = (studentDetails) => ({
type: CREATE_SUCCESS,
payload: studentDetails,
});

export const createStudentFail = (error) => ({
type: CREATE_FAIL,
payload: error,
});






//.................STUDENREQUESTT.......................//
    
export const studentRequest = () =>
({
type: STUDENT_REQUEST,
payload: "",
});

export const studentSuccess = (AllStudentsDetails) => ({
type: STUDENT_SUCCESS,
payload: AllStudentsDetails,
});

export const studentFail = (error) => ({
type: STUDENT_FAIL,
payload: error,
});




//.................SINGLEVIEW.................//


export const singleviewRequest = () =>
({
type: SINGLE_VIEW_REQUEST,
payload: "",
});

export const singleviewSuccess = (singleviewDetails) => ({
type: SINGLE_VIEW_SUCCESS,
payload: singleviewDetails,
});

export const singleviewFail = (error) => ({
type: SINGLE_VIEW_FAIL,
payload: error,
});



//.............DELETESTUDENT...............//
export const deletestudentRequest = () =>
({
type: DELETE_STUDENT_REQUEST,
payload: "",
});

export const deletestudentSuccess = (id) => ({
type: DELETE_STUDENT_SUCCESS,
payload: id,
});

export const deletestudentFail = (error) => ({
type: DELETE_STUDENT_FAIL,
payload: error,
});


//............UPDATESTUDENT...............//


export const updatestudentRequest = () =>
({
type: UPDATE_STUDENT_REQUEST,
payload: "",
});

export const updatestudentSuccess = (id) => ({
type: UPDATE_STUDENT_SUCCESS,
payload: id,
});

export const updatestudentFail = (error) => ({
type: UPDATE_STUDENT_FAIL,
payload: error,
});


//..................CREATE NEW COURSE...............................//


export const createNewcourseRequest = (input) =>
({
type: CREATE_NEW_COURSE_REQUEST,
payload: input,
});

export const createNewcourseSuccess = (NewCourseDetails) => ({
type: CREATE_COURSE_SUCCESS,
payload: NewCourseDetails,
});

export const createNewcourseFail = (error) => ({
type: CREATE_NEW_COURSE_FAIL,
payload: error,
});

//...........ALLCOURSE...............................//

export const AllStudentcourseRequest = () =>
({
type: ALL_STUDENT_COURSE_REQUEST,
payload: "",
});

export const AllStudentcourseSuccess = (AllStudentCourseDetails) => ({
type: ALL_STUDENT_COURSE_SUCCESS,
payload: AllStudentCourseDetails,
});

export const AllStudentcourseFail = (error) => ({
type: ALL_STUDENT_COURSE_FAIL,
payload: error,
});



//.....................DELETECOURSE......................//

export const deleteStudentCourseRequest = (id) => ({
    type: DELETE_STUDENT_COURSE_REQUEST,
    payload: id,
  });
  
  export const deleteStudentCourseSuccess = () => ({
    type: DELETE_STUDENT_COURSE_SUCCESS,
    payload:  "",
  });
  
  export const deleteStudentCourseFail = (error) => ({
    type: DELETE_STUDENT_COURSE_FAIL,
    payload: error,
  });
  