import React from 'react'
import{ ALL_COURSE_FAIL, ALL_COURSE_REQUEST, ALL_COURSE_SUCCESS, CREATE_COURSE_FAIL, CREATE_COURSE_REQUEST, CREATE_COURSE_SUCCESS, DELETE_COURSE_FAIL, DELETE_COURSE_REQUEST, DELETE_COURSE_SUCCESS, GET_COURSE_DETAILS_FAIL, GET_COURSE_DETAILS_REQUEST, GET_COURSE_DETAILS_SUCCESS, UPDATE_COURSE_REQUEST, UPDATE_COURSE_SUCCESS }from "./actionType";




const initiailState = {
    loading: false,
    error: "",
    CreateCourseDetails:[],
    AllCourseDetails:{},
    deletecours:{},
    getcourseDetails:{},
    updateCourse:{}

   
  };
  

const CourseReducer = (state = initiailState, action) =>{
        switch (action.type) {


          case CREATE_COURSE_REQUEST:
            return {
              ...state,
              loading: true,
            };
      
          case CREATE_COURSE_SUCCESS:
            return {
              ...state,
              loading: false,
              CreateCourseDetails: action.payload,
              error: "",
            };
          case CREATE_COURSE_FAIL:
            return {
              ...state,
              loading: false,
              error: action.payload,
            };



//..................CREATECOURSE...............................//


            case ALL_COURSE_REQUEST:
              return {
                ...state,
                loading: true,
              };
        
            case ALL_COURSE_SUCCESS:
              return {
                ...state,
                loading: false,
                AllCourseDetails: action.payload,
                error: "",
              };
            case ALL_COURSE_FAIL:
              return {
                ...state,
                loading: false,
                error: action.payload,
              };



//.....................ALLCOURSE...................................//


              case DELETE_COURSE_REQUEST:
                return {
                  ...state,
                  loading: true,
                };
          
              case DELETE_COURSE_SUCCESS:
                return {
                  ...state,
                  loading: false,
                  deletecourse: action.payload,
                  error: "",
                };
              case DELETE_COURSE_FAIL:
                return {
                  ...state,
                  loading: false,
                  error: action.payload,
                };



//.......................DELETESTUDENT...............................//
                case GET_COURSE_DETAILS_REQUEST:
                  return {
                    ...state,
                    loading: true,
                  };
            
                case GET_COURSE_DETAILS_SUCCESS:
                  return {
                    ...state,
                    loading: false,
                    getcourseDetails: action.payload,
                    error: "",
                  };
                case GET_COURSE_DETAILS_FAIL:
                  return {
                    ...state,
                    loading: false,
                    error: action.payload,
                  };
        
  
//......................SINGLEVIEW............................//


                  case  UPDATE_COURSE_REQUEST:
                    return {
                      ...state,
                      loading: true,
                    };
              
                  case UPDATE_COURSE_SUCCESS:
                    return {
                      ...state,
                      loading: false,
                      updateCourse: action.payload,
                      error: "",
                    };
                  case UPDATE_COURSE_SUCCESS:
                    return {
                      ...state,
                      loading: false,
                      error: action.payload,
                    };
    
    
    
    
    //...................UPDATECOURSE...........................//
    
    











            default:
                return state;



}
    };

export default CourseReducer
