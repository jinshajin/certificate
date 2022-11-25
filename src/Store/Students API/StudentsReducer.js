import {
  CREATE_FAIL,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  STUDENT_REQUEST,
  STUDENT_SUCCESS,
  STUDENT_FAIL,
  SINGLE_VIEW_REQUEST,
  SINGLE_VIEW_SUCCESS,
  SINGLE_VIEW_FAIL,
  DELETE_STUDENT_REQUEST,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAIL,
  UPDATE_STUDENT_REQUEST,
  UPDATE_STUDENT_SUCCESS,
  UPDATE_STUDENT_FAIL,
  CREATE_NEW_COURSE_REQUEST,
  CREATE_NEW_COURSE_SUCCESS,
  CREATE_NEW_COURSE_FAIL,
  ALL_STUDENT_COURSE_REQUEST,
  ALL_STUDENT_COURSE_SUCCESS,
  ALL_STUDENT_COURSE_FAIL,
  DELETE_STUDENT_COURSE_REQUEST,
  DELETE_STUDENT_COURSE_SUCCESS,
  DELETE_STUDENT_COURSE_FAIL
} from "./actionType";

const initiailState = {
  loading: false,
  error: "",
  userDetails: [],
  allstudentsDetails: {},
  singleviewDetails:{},
  deleteStudents:{},
  updateStudents:{},
  NewCourseDetails:{},
  AllStudentCourseDetails:{},
  deletestudentcourse:{}
  

  
};

const StudentsReducer= (state = initiailState, action) => {
  switch (action.type) {
    case CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        createDetails: action.payload,
        error: "",
      };
    case CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };



//...............CREATESTUDENT............................//





    case STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        allstudentsDetails: action.payload,
        error: "",
      };
    case STUDENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };



//........................ALLSTUDENTS...................//


      case SINGLE_VIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case SINGLE_VIEW_SUCCESS:
        return {
          ...state,
          loading: false,
          singleviewDetails: action.payload,
          error: "",
        };
      case SINGLE_VIEW_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
  


//................SINGLEVIEW............................//

        
    
  



          case  DELETE_STUDENT_REQUEST:
            return {
              ...state,
              loading: true,
            };
      
          case DELETE_STUDENT_SUCCESS:
            return {
              ...state,
              loading: false,
              deleteStudents: action.payload,
              error: "",
            };
          case DELETE_STUDENT_FAIL:
            return {
              ...state,
              loading: false,
              error: action.payload,
            };
      
      
//...................DELETESTUDENT...................................//


            case  UPDATE_STUDENT_REQUEST:
              return {
                ...state,
                loading: true,
              };
        
            case UPDATE_STUDENT_SUCCESS:
              return {
                ...state,
                loading: false,
                updateStudents: action.payload,
                error: "",
              };
            case UPDATE_STUDENT_FAIL:
              return {
                ...state,
                loading: false,
                error: action.payload,
              };
           
      
          

    //.........................UPDATESTUDENT............................//          
             
    
        case CREATE_NEW_COURSE_REQUEST:
                return {
                  ...state,
                  loading: true,
                };
          
              case CREATE_NEW_COURSE_SUCCESS:
                return {
                  ...state,
                  loading: false,
                  NewCourseDetails: action.payload,
                  error: "",
                };
              case CREATE_NEW_COURSE_FAIL:
                return {
                  ...state,
                  loading: false,
                  error: action.payload,
                };
          
          
          

//...................CREATECOURSE.......................//



                case ALL_STUDENT_COURSE_REQUEST:
                  return {
                    ...state,
                    loading: true,
                  };
            
                case ALL_STUDENT_COURSE_SUCCESS:
                  return {
                    ...state,
                    loading: false,
                    AllStudentCourseDetails: action.payload,
                    error: "",
                  };
                case ALL_STUDENT_COURSE_FAIL:
                  return {
                    ...state,
                    loading: false,
                    error: action.payload,
                  };
        
  

//...................ALLCOURSE......................//



                  case DELETE_STUDENT_COURSE_REQUEST:
                    return {
                      ...state,
                      loading: true,
                    };
              
                  case DELETE_STUDENT_COURSE_SUCCESS:
                    return {
                      ...state,
                      loading: false,
                      deletestudentcourse: action.payload,
                      error: "",
                    };
                  case DELETE_STUDENT_COURSE_FAIL:
                    return {
                      ...state,
                      loading: false,
                      error: action.payload,
                    };
    


//.................DELETECOURSE.................................//

    


    default:
      return state;
  }
};
export default StudentsReducer;
