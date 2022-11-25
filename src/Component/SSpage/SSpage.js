import React ,{useEffect}from "react";
import Layout from "../Layout/Layout";
import { Card, Row, Col, Button,Table,Input,Pagination,PaginationItem,PaginationLink, Container, NavItem} from "reactstrap";
import {map} from "lodash"

import MenAvatar from "./MenAvatar.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { navigate,deleteStudentApi, singleviewApi ,updateStudentApi} from "../../Store/Students API/useApi";

const SSpage =() => {


  const dispatch = useDispatch();
  const params=useParams();
  const navigate = useNavigate();
    

  const {single}=useSelector((state) => ({
    single:state.StudentsReducer.singleviewDetails
  }));
 console.log(single.id);
 console.log(single?.email)
 console.log(single.student_courses);

 
  useEffect(() =>{
   dispatch(singleviewApi(params.id))
  },[])


const deleteStudent = () => {
  dispatch(deleteStudentApi(params.id,navigate))
}

const updateStudent =()=>{
  dispatch(updateStudentApi(params.id,navigate))
}

  // const tableData = singleview?.results


const  course =  single?.student_courses;

console.log(course);

console.log(course?.progress);
  return (
    <div>
    <Layout>
        <div className="main-card">
          <h5
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#495057",
              marginLeft: "15px",
            }}
          >
            STUDENT VIEW
          </h5>
    <Card
            className="subcard"
            style={{ width: "55%", height: "316px", borderRadius: "3px" }}
          >
        <div>
              <Row>
                <Col md="6" style={{ paddingLeft: "40px", paddingTop: "25px" }}>
                  <h6 style={{ fontSize: "smaller" }}>{single?.full_name}</h6>
                  <p style={{ color: "#85889b", marginBottom: "0px" }}>
                    Date of Birth :{single?.dob}  </p>
                    <br></br>
                   <p>Address:{single?.address}</p> 
                    <br></br>
                    <p>Phone Number:{single?.phone}</p>  
                   
                  
                </Col>

                <Col md="6">
                  <img
                    src={MenAvatar}
                    alt="error"
                    style={{
                      width: "100px",
                      height: "100px",
                      marginTop: "25px",
                      marginLeft: "10px",
                      borderRadius: "5px",
                    }}
                  />
                  <p style={{ color: "#85889b", paddingLeft: "20px" }}>
                    Designation:{single?.designation}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md="12" style={{ paddingLeft: "40px", marginTop: "10px" }}>
                  <h6 style={{ fontSize: "smaller" }}>Contact Details:</h6>
                  <p style={{ color: "#85889b" }}>
                    Email:{single?.email}
                    <br></br>
                    Mobile:{single?.phone}
                  </p>
                </Col>
              </Row>
            <div className="bottombtn">
                <div className="bottombtn1">
                  <Link to={`/updatestudent/${params.id}`}
                  className="btn btn-success"
                    style={{
                      backgroundColor: "#4c6a61",
                      color: "white",
                      width: "110px",
                      height: "30px",
                      fontSize: "smaller",
                    }}
                  >
                    Update
                  </Link > 
                </div>
                <div className="bottombtn2">
                  <Button onClick={deleteStudent}
                    style={{
                      backgroundColor: "#e6555e",
                      width: "150%",
                      height: "30px",
                      fontSize: "smaller",
                    }}
                  >
                    Delete 
                  </Button>
                </div>
            </div>
        </div>
    </Card>
    <Row className="mt-5">
      {map(course,(item,key)=>(
        <Col key={key} md="6">
    
    <Card
   
            className="subcard"
            style={{ width: "55%", height: "280px", borderRadius: "3px" }}
          >
            <Container>
            <div className="d-flex">
              <div style={{color:"rgb(76,106,97)",marginTop:"50px"}}>
                <h6>Course Name:</h6>
                <h6>Duration:</h6>
                <h6>Progress:</h6>
                <h6>Course Category Name:</h6>
                <h6>Designation:</h6>
              </div>
              <div 
              style={{color:"rgb(230,85,94)",height:"70%",marginTop:"50px",marginLeft:"10px"}}>
                <h6>{item.course.course_name}</h6>
                <h6>{item.course.duration}</h6>
                <h6>
                  {item.progress? item.progress:"NO"}</h6>
                  <h6>
                    {item.course.course_category.course_category_name}
                  </h6>
                  <h6>{item.course.course_category.designation}</h6> 
              </div>
            </div>



            
            
            </Container>
          </Card>
          </Col>
       ))}
          </Row>
          <Row>
            <Col>
            <Link to ={"/createcourse"}
            className="mt-0 mx-4 btn-success"
            style={{fontFamily:"-moz-initial",fontWeight:"bold"}}>
              <span className="me-3">+Create NewCourse</span>            </Link>
            </Col>
            <Col md={6} className="mt-2 d-flex" style={{justifyContent:"center",fontFamily:"-moz-initial",fontWeight:"bold"}}>
              <Link to={`/certificate/${params.id}`}>Certificate</Link>
            </Col >
          </Row>
 </div>
 

      </Layout>
    </div>
  );
}

export default SSpage;
