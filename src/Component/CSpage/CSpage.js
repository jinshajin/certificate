import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import {Card,Row,Col,FormGroup,Label,Button,Input,Form} from 'reactstrap';
import './CSpage.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { studentCreateApi } from '../../Store/Students API/useApi';

function CSpage() {
  const dispatch=useDispatch();
  const navigate =useNavigate();
  const [state,setState]=useState({});
  console.log(state);


const HandleCreateStudent=(e)=>{
  e.preventDefault()
  dispatch(studentCreateApi(state,navigate))
}



  return (
    <div>
        <Layout>
        <div className='main-card'>
            <h5 style={{fontSize:'14px',fontWeight:'600',color:'#495057',marginLeft:'15px'}}>CREATE STUDENT</h5>
            <Card  className='subcard'    style={{width:'55%',height:'470px'}}>
            <Form onSubmit={HandleCreateStudent}>
   <div className='form'>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleName" style={{fontSize:'smaller',fontWeight:'600'}}>
          Full Name
        </Label>
        <Input
          id="exampleName"
          name="Name"
          placeholder="Full Name"
          type="text"
          onChange={(e) =>
          setState({...state,full_name: e.target.value}) }
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="Designation" style={{fontSize:'smaller',fontWeight:'600'}}>
          Designation
        </Label>
        <Input
          id="exampleDesignation"
          name="Designation"
          placeholder="Enter your Designation"
          type="string"
          onChange={(e) =>
            setState({...state,designation: e.target.value}) }

        />
      </FormGroup>
    </Col>
   
    
    <Col md={6}>
      <FormGroup>
        <Label for="exampleEmail" style={{fontSize:'smaller',fontWeight:'600'}}>
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="Email"
          placeholder="Enter Your Email"
          type="Email"
          onChange={(e) =>
            setState({...state,email: e.target.value}) }
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="Joining Date" style={{fontSize:'smaller',fontWeight:'600'}}>
          Joining Date
        </Label>
        <Input
          id="exampleJoiningDate"
          name="Joining Date"
          placeholder="date"
          type="date"
          onChange={(e) =>
            setState({...state,start_date: e.target.value}) }
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleDOB" style={{fontSize:'smaller',fontWeight:'600'}}>
          Date of Birth
        </Label>
        <Input
          id="exampleDOB"
          name="Date of Birth"
          placeholder="date"
          type="date"
          onChange={(e) =>
            setState({...state,dob: e.target.value}) }
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleDate of Leaving" style={{fontSize:'smaller',fontWeight:'600'}}>
          Date of Leaving
        </Label>
        <Input
          id="exampleDOL"
          name="email"
          placeholder="date"
          type="date"
          onChange={(e) =>
            setState({...state,end_date: e.target.value}) }
        />
      </FormGroup>
    </Col>
    
    <Col md={6}>
      <FormGroup>
        <Label for="exampleAddress" style={{fontSize:'smaller',fontWeight:'600'}}>
          Address
          
        </Label>
        <Input
          id="exampleAddress"
          name="Address"
          placeholder="Enter Your Address"
          type="Address"
          onChange={(e) =>
            setState({...state,address: e.target.value}) }
        />
      </FormGroup>
    </Col>
    
    <Col md={6}>
      <FormGroup>
        <Label for="examplePhone" style={{fontSize:'smaller',fontWeight:'600'}}>
        Phone number
        </Label>
        <Input
          id="examplePhone"
          name="Phone number"
         
          type="number"
          onChange={(e) =>
            setState({...state,phone: e.target.value}) }
        />
      </FormGroup>
    </Col>
     
  </Row>
  </div>
  <FormGroup>
    <Label for="exampleFile" style={{paddingLeft:'20px',fontSize:'smaller'}} >
      Image:
    </Label>
    <Input 
      id="exampleFile"
      name="file"
      type="file"
      onChange={(e) =>
        setState({...state,image: e.target.value}) }
    />
    </FormGroup>
  <div className='bottombtn' >
  <div className='bottombtn1'>
  <Button style={{backgroundColor:'#f3f3f3',color:'#4c6a61',width:'90px'}}>
    Back
  </Button>
  </div>
  <div className='bottombtn2'>
  <Button style={{backgroundColor:'#4c6a61',width:'100%'}} type='submit'>
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

export default CSpage