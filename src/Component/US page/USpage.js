import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import {Card,Col,FormGroup,Label,Input,Button,Form,Row} from 'reactstrap';
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import {  singleviewApi,updateStudentApi  } from "../../Store/Students API/useApi";
import { useState } from "react";


import './USpage.css'



function USpage() {


  const navigate = useNavigate();

  const dispatch = useDispatch();

  const params = useParams();
  const [state, setState] = useState();
  const id = params?.id;
  
  const { upstudents} = useSelector((state) => ({
    
    upstudents:state.StudentsReducer.singleviewDetails,
   
  }));

  console.log(upstudents);

useEffect(()=>{
  setState(upstudents);
},[upstudents]);


  useEffect(() => {
    dispatch(singleviewApi(id));
  }, [dispatch]);



  


  
  const Handle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const HandleStudentUpdate = (e) => {
    e.preventDefault();
    dispatch(updateStudentApi(id,state,navigate));
  };



  return (
    <div>
        <Layout>
        <div className='main-card'>
            <h5 style={{fontSize:'14px',fontWeight:'600',color:'#495057',marginLeft:'15px'}}>UPDATE STUDENT</h5>
            <Card  className='subcard'    style={{width:'55%',height:'470px'}}>
            <Form onSubmit={HandleStudentUpdate}>
   <div className='form'>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleName" style={{fontSize:'smaller',fontWeight:'600'}}>
          Full Name
        </Label>
        <Input
          id="exampleName"
          name="full_name"
          placeholder="Fasil Paloli"
          type="text"
          onChange={(e) => Handle(e)}
          value={state?.full_name}
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
          name="designation"
          placeholder="Lorem ipsum"
          type="Designation"
          
          onChange={(e) => Handle(e)}
          value={state?.designation}
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
          name="email"
          placeholder="Devs.osperb@gmail.com"
          type="email"
          onChange={(e) => Handle(e)}
          value={state?.email}
          
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
          name="start_date"
          placeholder="09 June,2021"
          type="date"
          onChange={(e) => Handle(e)}
                value={state?.start_date}

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
          name="dob"
          placeholder="09 June,2021"
          type="date"
          onChange={(e) => Handle(e)}
          value={state?.dob}
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
          name="end_date"
          placeholder="09 Jan,2021"
          type="address"
          onChange={(e) => Handle(e)}
          value={state?.end_date}
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
          name="address"
          placeholder="Malappuram"
          type="Address"
          onChange={(e) => Handle(e)}
          value={state?.address}
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
          name="phone"
          placeholder="+91 2354678943"
          type="tel"
          onChange={(e) => Handle(e)}
          value={state?.phone}
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
    />
    </FormGroup>
  <div className='bottombtn' >
  <div className='bottombtn1'>
  <Button style={{backgroundColor:'#f3f3f3',color:'#4c6a61',width:'90px'}}
  onClick={() => {
    navigate(`/studentview/${params.id}`);
  }}>
    Back
  </Button>
  </div>
  <div className='bottombtn2'>
  <Button
  type="submit" 
  style={{backgroundColor:'#4c6a61',width:'100%'}}>
    Update
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

export default USpage