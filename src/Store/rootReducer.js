import { combineReducers } from "redux"
import LoginReducer from "./Login API/LoginReducer"
import StudentsReducer from "./Students API/StudentsReducer"
import CourseCategoryReducer from "./CourseCategory API/CourseCategoryReducer"
import CourseReducer from "./Course API/CourseReducer"


              
           const rootReducer = combineReducers({
           LoginReducer,StudentsReducer,CourseCategoryReducer,CourseReducer
           })
           
           export default rootReducer