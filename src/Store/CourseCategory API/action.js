
import{
    CREATE_COURSE_CATEGORY_REQUEST,CREATE_COURSE_CATEGORY_SUCCESS,CREATE_COURSE_CATEGORY_FAIL, ALL_COURSE_CATEGORY_REQUEST, ALL_COURSE_CATEGORY_SUCCESS, ALL_COURSE_CATEGORY_FAIL, GET_COURSE_CATEGORY_DETAILS_REQUEST, GET_COURSE_CATEGORY_DETAILS_SUCCESS, GET_COURSE_CATEGORY_DETAILS_FAIL, DELETE_COURSE_CATEGORY_REQUEST, DELETE_COURSE_CATEGORY_SUCCESS, DELETE_COURSE_CATEGORY_FAIL,UPDATE_COURSE_CATEGORY_REQUEST,UPDATE_COURSE_CATEGORY_SUCCESS,UPDATE_COURSE_CATEGORY_FAIL
}from "./actionType";


//.................CREATECOURSECATEGORY..............................//

export const CreateCourseCategoryRequest = (input) => ({
    type: CREATE_COURSE_CATEGORY_REQUEST,
    payload: input,
  });
  
  export const CreateCourseCategorySuccess = (CreateCourseCategoryDetails) => ({
    type: CREATE_COURSE_CATEGORY_SUCCESS,
    payload:  CreateCourseCategoryDetails,
  });
  
  export const CreateCourseCategoryFail = (error) => ({
    type: CREATE_COURSE_CATEGORY_FAIL,
    payload: error,
  });
  

//............................................ALLCOURSECATEGORY.....................//
  export const AllCourseCategoryRequest = () =>
({
type: ALL_COURSE_CATEGORY_REQUEST,
payload: "",
});

export const AllCourseCategorySuccess = (AllCourseCategoryDetails) => ({
type: ALL_COURSE_CATEGORY_SUCCESS,
payload: AllCourseCategoryDetails,
});

export const AllCourseCategoryFail = (error) => ({
type: ALL_COURSE_CATEGORY_FAIL,
payload: error,
});



//.....................SINGLEVIEW..................................//



export const getcoursecategorydetailsRequest = () =>
({
type: GET_COURSE_CATEGORY_DETAILS_REQUEST,
payload: "",
});

export const getcoursecategorydetailsSuccess = (getcoursecategoryDetails) => ({
type: GET_COURSE_CATEGORY_DETAILS_SUCCESS,
payload: getcoursecategoryDetails,
});

export const getcoursecategorydetailsFail = (error) => ({
type: GET_COURSE_CATEGORY_DETAILS_FAIL,
payload: error,
});




//........................DELETECOURSECATEGORY....................//

export const deleteCourseCategoryRequest = (id) => ({
  type: DELETE_COURSE_CATEGORY_REQUEST,
  payload: id,
});

export const deleteCourseCategorySuccess = () => ({
  type: DELETE_COURSE_CATEGORY_SUCCESS,
  payload:  "",
});

export const deleteCourseCategoryFail = (error) => ({
  type: DELETE_COURSE_CATEGORY_FAIL,
  payload: error,
});







//.....................UPDATECOURSECATEGORY..................................//

export const updatecoursecategoryRequest = (id) =>
({
type: UPDATE_COURSE_CATEGORY_REQUEST,
payload: id,
});

export const updatecoursecategorySuccess = (id,updateCourseCategory) => ({
type: UPDATE_COURSE_CATEGORY_SUCCESS,
payload: id,updateCourseCategory,
});

export const updatecoursecategoryFail = (error) => ({
type: UPDATE_COURSE_CATEGORY_FAIL,
payload: error,
});
