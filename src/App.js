
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Component/Home/Home';
import Footer from './Component/Home/Footer';
import Login from './Component/Login/Login';
import Dashboard from './Component/Dashboard/Dashboard';
import Alls from './Component/All students/Alls'
import USpage from './Component/US page/USpage';
import CSpage from './Component/CSpage/CSpage';
import SSpage from './Component/SSpage/SSpage';
import Courses from './Component/Courses/Courses'
import CCpage from './Component/CCpage/CCpage'
import CourseCategory from './Component/CourseCategory/CourseCategory';
import UCpage from './Component/UCpage/UCpage';
import CreateCC from './Component/CreateCC/CreateCC';
import UpdateCC from './Component/UpdateCC/UpdateCC.js';
import NewCourse from './Component/All students/NewCourse.js'
import Studentcourse from './Component/STUDENT COURSE/Studentcourse';
import Certificate from './Component/Certificate/Certificate';





function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      
      {/* <div className='App'> */}
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/> 
          <Route path='/allstudents' element={<Alls/>}/> 
         <Route path='/updatestudent/:id' element={<USpage/>}/>
         <Route path='/createstudents' element={<CSpage/>}/>
         <Route path='/studentview/:id' element={<SSpage/>}/>
         <Route path='/Courses' element={<Courses/>}/>
         <Route path='/createcourse' element={<CCpage/>}/>
         <Route path='/coursecategory' element={<CourseCategory/>}/>
         <Route path='/updatecourse/:id' element={<UCpage/>}/>
         <Route path='/createcoursecategory' element={<CreateCC/>}/>
         <Route path='/updatecoursecategory/:id' element={<UpdateCC/>}/>
         <Route path='/newcourse/' element={<NewCourse/>}/>
         <Route path='/studentcourse' element={<Studentcourse/>}/>
         <Route path='/certificate/:id' element={<Certificate/>}/>
      
         



        </Routes>
        </BrowserRouter>
       
      {/* </div> */}
      
      
      
      
    </div> 
  );
}

export default App;
