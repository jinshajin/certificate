import React,{useEffect, useState} from 'react'
import Layout from '../Layout/Layout'
import {Card,Col,FormGroup,Label,Input,Button,Form} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CreateNewcourseApi, studentApi } from '../../Store/Students API/useApi';
import {map} from "lodash"
import { allcourseApi } from '../../Store/Course API/useApi';

function CCpage() {


  const dispatch=useDispatch();
  const navigate =useNavigate();
  const [input,setInput]=useState({});
  

  const handleSubmit=(e)=>{
    e.preventDefault()

    if(input){
      dispatch( CreateNewcourseApi(input,navigate))
    }
   
  }

useEffect(() =>{
    dispatch(studentApi())
   },[dispatch])


  const { AllstudentsDetails}=useSelector((state) => ({
    AllstudentsDetails:state.StudentsReducer.allstudentsDetails
   }))



   useEffect(() =>{
    dispatch(allcourseApi())
   },[dispatch])


   const { AllcourseDetails}=useSelector((state) => ({
    AllcourseDetails:state.CourseReducer.AllCourseDetails
   }))
// console.log(AllCourseCategoryDetails.results)


  return (
    <div>
        <Layout>
        <div className='main-card'>
            <h5 style={{fontSize:'14px',fontWeight:'600',color:'#495057',marginLeft:'15px'}}>CREATE STUDENT COURSE</h5>
            <Card  className='subcard'    style={{width:'58%',height:'390px'}}>
            <Form onSubmit={handleSubmit}>


            <Col md={6}>
            <FormGroup>
    <Label for="exampleSelect"  style={{fontSize:'smaller',fontWeight:'600',paddingLeft:'20px'}}>
      Student Name:
    </Label>
    <Input style={{width:'50%',height:'30px',marginLeft:'15px',borderRadius:"1px",color:'grey',paddingTop:'1px'}}
    
      name="student"
      type="select"
      onChange={(e) => setInput({...input, student : e.target.value })}

    >
    <option>Select a StudentName</option>
    {map(AllstudentsDetails?.results, (item) => (
    <option value={item.id}>
      {item.full_name }
    </option>

    ))}
     
    
    </Input>
    </FormGroup>
    </Col>
    <Col md={6}>
    <FormGroup>
    <Label for="exampleSelect"  style={{fontSize:'smaller',fontWeight:'600',paddingLeft:'20px'}}>
      Course Name:
    </Label>
    <Input style={{width:'50%',height:'30px',marginLeft:'15px',borderRadius:"1px",color:'grey',paddingTop:'1px'}}
      
      name="course"
      type="select"
      onChange={(e) => setInput({...input,  course: e.target.value })}

    >
      <option>Select a CourseName</option>
    {map(AllcourseDetails?.results, (item) => (
    <option value={item.id}>
      {item.course_name}
    </option>

    ))}
     
    
    </Input>
    </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleName" style={{fontSize:'smaller',fontWeight:'600',paddingLeft:'20px'}}>
          Progress
        </Label>
        <Input style={{marginLeft:'15px',width:'100%'}}
         
          name=" progress"
          placeholder="Enter a progress"
          type="text"
          onChange={(e) => setInput({...input, progress : e.target.value })}

        />
      </FormGroup>
    </Col>
  
<div className='bottombtn' style={{marginTop:'90px'}}>
  <div className='bottombtn1'>
  <Button style={{backgroundColor:'#f3f3f3',color:'#4c6a61',width:'80px',height:'30px',paddingTop:'1px'}}>
    Back
  </Button>
  </div>
  <div className='bottombtn2'>
  <Button style={{backgroundColor:'#4c6a61',width:'100%',height:'30px',paddingTop:'1px'}} type={"submit"}>
    Create
  </Button>
  </div>
  </div>


</Form>  
 </Card>
 </div>
        </Layout>
      
    </div>
  )
}

export default CCpage
