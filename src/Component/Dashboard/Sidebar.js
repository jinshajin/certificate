import React from 'react'
import { Container } from 'reactstrap'
// import { BiHomeCircle } from "react-icons/bi";
// import { BsPersonCircle} from "react-icons/bs";
// import { ImOffice } from "react-icons/im";
// import { MdSupervisorAccount } from "react-icons/md";
import './Sidebar.css'
import { Link } from 'react-router-dom';


function Sidebar() {
  return (
    <div className='sidebar-main'>
        <Container>
            <div className='sidebar-top'>
                <div className='sidebar-icon'>
                    <BiHomeCircle/>
                </div>
                <div className='sidebar-name'>
                    Dashboard

                </div>
                </div>
                <div className='sidebar-bottom'>
                    <div className='sidebar-icon'>
                        <BsPersonCircle/>

                    </div>
                    <div className='sidebar-name'>
                        Student
                        <Link to= '/allstudents'><li>All Students</li></Link>
                        <Link to= '/studentcourse'><li>Student Course</li></Link>
                       <Link to='/createstudents'><li>Create Students</li></Link>




                    </div>

             

            </div>
            <div className='sidebar-bottom'>
                    <div className='sidebar-icon'>
                        <ImOffice/>

                    </div>
                    <div className='sidebar-name'>
                        Courses
                        <Link to={'/Courses'}><li>All Courses</li></Link>
                        <Link to={'/updatecourse'}><li>Update Courses</li></Link>
                       <Link to={'/createcourse'} ><li>Create Courses</li></Link>




                    </div>

             

            </div>
            <div className='sidebar-bottom'>
                    <div className='sidebar-icon'>
                        <MdSupervisorAccount/>

                    </div>
                    <div className='sidebar-name'>
                        Courses Category 
                       <Link to={'/coursecategory'}> <li>All Courses Category</li></Link>
                        <Link to={'/updatecoursecategory'}><li>Update Courses Category</li></Link>
                        <Link to={'/createcoursecategory'}><li>Create Courses Category</li></Link>

                     </div>
                  
            </div>
            
        </Container>
    </div>
  )
}

export default Sidebar