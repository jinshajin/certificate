import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  PROFILE_FAIL,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
} from "./actionType";

const initiailState = {
  loading: false,
  error: "",
  userDetails: [],
  // loginDetails
};
//...................LOGIN...................//

const LoginReducer = (state = initiailState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.payload,
        error: "",
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };



//............STUDENT LOGIN..................//

      
      case PROFILE_REQUEST:
        return{
          ...state,
          loading:false,
        }
        case PROFILE_SUCCESS:
          return{
          ...state,

          loginDetails:action.payload
          }
          case PROFILE_FAIL:
            return{
              ...state,
              error: action.payload,
            }



//..............PROFILE............//





    default:
      return state;
  }
};

export default LoginReducer;


//................LOGOUT..............................//


export const LogoutReducer = (state = initiailState, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        userDetails: [],
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  }
};
