import React,{useEffect, useState} from 'react'
import Layout from '../Layout/Layout'
import {Card,Col,FormGroup,Label,Input,Button,Form} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createcourseApi } from '../../Store/Course API/useApi';
import { allcoursecategoryApi } from '../../Store/CourseCategory API/useApi';
import {map} from "lodash"

function CCpage() {


  const dispatch=useDispatch();
  const navigate =useNavigate();
  const [input,setInput]=useState({});
  

  const handleSubmit=(e)=>{
    e.preventDefault()

    if(input){
      dispatch( createcourseApi(input,navigate))
    }
   
  }

  useEffect(() =>{
    dispatch(allcoursecategoryApi())
   },[dispatch])

  const { AllCourseCategoryDetails}=useSelector((state) => ({
    AllCourseCategoryDetails:state.CourseCategoryReducer.AllCourseCategoryDetails,
   }))

console.log(AllCourseCategoryDetails.results)


  return (
    <div>
        <Layout>
        <div className='main-card'>
            <h5 style={{fontSize:'14px',fontWeight:'600',color:'#495057',marginLeft:'15px'}}>CREATE COURSE</h5>
            <Card  className='subcard'    style={{width:'58%',height:'390px'}}>
            <Form onSubmit={handleSubmit}>


            <Col md={6}>
      <FormGroup>
        <Label for="exampleName" style={{fontSize:'smaller',fontWeight:'600',paddingLeft:'20px',paddingTop:'10px'}}>
          Course Name
        </Label>
        <Input style={{marginLeft:'15px',width:'100%'}}
          id="exampleName"
          name="course_name"
          placeholder="Enter a Name"
          type="string"
          onChange={(e) => setInput({...input,course_name: e.target.value })}
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleName" style={{fontSize:'smaller',fontWeight:'600',paddingLeft:'20px'}}>
          Duration
        </Label>
        <Input style={{marginLeft:'15px',width:'100%'}}
          id="exampleName"
          name="Name"
          placeholder="Enter a Duration"
          type="number"
          onChange={(e) => setInput({...input, duration: e.target.value })}

        />
      </FormGroup>
    </Col>
    <FormGroup>
    <Label for="exampleSelect"  style={{fontSize:'smaller',fontWeight:'600',paddingLeft:'20px'}}>
      Course Category:
    </Label>
    <Input style={{width:'50%',height:'30px',marginLeft:'15px',borderRadius:"1px",color:'grey',paddingTop:'1px'}}
      id="exampleSelect"
      name="course_category"
      type="select"
      onChange={(e) => setInput({...input, course_category: e.target.value })}

    >
      <option>adb</option>
    {map(AllCourseCategoryDetails?.results, (item) => (
    <option value={item.id}>
      {item.course_category_name}
    </option>

    ))}
     
    
    </Input>
    </FormGroup>

  
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
