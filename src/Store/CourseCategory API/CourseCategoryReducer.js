
import{
    CREATE_COURSE_CATEGORY_REQUEST,CREATE_COURSE_CATEGORY_SUCCESS,CREATE_COURSE_CATEGORY_FAIL, ALL_COURSE_CATEGORY_REQUEST, ALL_COURSE_CATEGORY_SUCCESS, ALL_COURSE_CATEGORY_FAIL,UPDATE_COURSE_CATEGORY_REQUEST,UPDATE_COURSE_CATEGORY_SUCCESS,UPDATE_COURSE_CATEGORY_FAIL, GET_COURSE_CATEGORY_DETAILS_REQUEST, GET_COURSE_CATEGORY_DETAILS_SUCCESS, GET_COURSE_CATEGORY_DETAILS_FAIL, DELETE_COURSE_CATEGORY_REQUEST, DELETE_COURSE_CATEGORY_SUCCESS, DELETE_COURSE_CATEGORY_FAIL
}from "./actionType";




const initiailState = {
    loading: false,
    error: "",
    CreateCourseCategoryDetails:[],
    AllCourseCategoryDetails:{},
    updateCourseCategory:{},
    getcoursecategoryDetails:[],
    deletecoursecategory:{}
    
  };
  

const CourseCategoryReducer = (state = initiailState, action) =>{
        switch (action.type) {


          case CREATE_COURSE_CATEGORY_REQUEST:
            return {
              ...state,
              loading: true,
            };
      
          case CREATE_COURSE_CATEGORY_SUCCESS:
            return {
              ...state,
              loading: false,
              CreateCourseCategoryDetails: action.payload,
              error: "",
            };
          case CREATE_COURSE_CATEGORY_FAIL:
            return {
              ...state,
              loading: false,
              error: action.payload,
            };


//..................CREATECOURSECAEGORY.........................................//

            case ALL_COURSE_CATEGORY_REQUEST:
              return {
                ...state,
                loading: true,
              };
        
            case ALL_COURSE_CATEGORY_SUCCESS:
              return {
                ...state,
                loading: false,
                AllCourseCategoryDetails: action.payload,
                error: "",
              };
            case ALL_COURSE_CATEGORY_FAIL:
              return {
                ...state,
                loading: false,
                error: action.payload,
              };



//......................ALLCOURSECATEGORY......................../

              case GET_COURSE_CATEGORY_DETAILS_REQUEST:
                return {
                  ...state,
                  loading: true,
                };
          
              case GET_COURSE_CATEGORY_DETAILS_SUCCESS:
                return {
                  ...state,
                  loading: false,
                  getcoursecategoryDetails: action.payload,
                  error: "",
                };
              case GET_COURSE_CATEGORY_DETAILS_FAIL:
                return {
                  ...state,
                  loading: false,
                  error: action.payload,
                };
  
  
  
//.......................SINGLE VIEW OF COURSE CATEGORY.....................//  
  
  
  



              case DELETE_COURSE_CATEGORY_REQUEST:
                return {
                  ...state,
                  loading: true,
                };
          
              case DELETE_COURSE_CATEGORY_SUCCESS:
                return {
                  ...state,
                  loading: false,
                  deletecoursecategory: action.payload,
                  error: "",
                };
              case DELETE_COURSE_CATEGORY_FAIL:
                return {
                  ...state,
                  loading: false,
                  error: action.payload,
                };


//.....................DELETECOURSECATEGORY...................................//


              // case GET_COURSE_CATEGORY_DETAILS_REQUEST:
              //   return {
              //     ...state,
              //     loading: true,
              //   };
          
              // case GET_COURSE_DETAILS_SUCCESS:
              //   return {
              //     ...state,
              //     loading: false,
              //     getcoursecategoryDetails: action.payload,
              //     error: "",
              //   };
              // case GET_COURSE_CATEGORY_DETAILS_FAIL:
              //   return {
              //     ...state,
              //     loading: false,
              //     error: action.payload,
              //   };
      


//................SINGLEVIEW.......................................//

              case  UPDATE_COURSE_CATEGORY_REQUEST:
                return {
                  ...state,
                  loading: true,
                };
          
              case UPDATE_COURSE_CATEGORY_SUCCESS:
                return {
                  ...state,
                  loading: false,
                  updateCourseCategory: action.payload,
                  error: "",
                };
              case UPDATE_COURSE_CATEGORY_FAIL:
                return {
                  ...state,
                  loading: false,
                  error: action.payload,
                };


//...................UPDATECOURSECATEGORY..................................//

















      
      
 
            default:
                return state;



}
    };

export default CourseCategoryReducer
