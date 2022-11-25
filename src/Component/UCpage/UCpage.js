import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import {Card,Col,FormGroup,Label,Input,Button,Form} from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getcourseApi, updatecourseApi } from '../../Store/Course API/useApi';


function UCpage() {


  const navigate = useNavigate();

  const dispatch = useDispatch();

  const params = useParams();
  const [state, setState] = useState();

  const id = params?.id;




  const { single } = useSelector((state) => ({
    single: state.CourseReducer.getcourseDetails,
  }));
  // console.log(single);

  useEffect(() => {
    dispatch(getcourseApi(params.id));
  }, []);

  useEffect(() => {
    setState(single);
  }, [single]);




  const Handle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };


  const HandleUpdateCourse = (e) => {
    e.preventDefault();
    dispatch(updatecourseApi(id,state,navigate));
  };




  return (
    <div>
        <Layout>
        <div className='main-card'>
            <h5 style={{fontSize:'14px',fontWeight:'600',color:'#495057',marginLeft:'15px'}}>UPDATE COURSE</h5>
            <Card  className='subcard'    style={{width:'58%',height:'390px'}}>
            <Form onSubmit={HandleUpdateCourse}>
            <Col md={6}>
      <FormGroup>
        <Label for="exampleName" style={{fontSize:'smaller',fontWeight:'600',paddingLeft:'20px',paddingTop:'10px'}}>
          Course Name
        </Label>
        <Input style={{marginLeft:'15px',width:'100%'}}
          name="course_name"
          placeholder="Enter a course name"
          type="text"
          onChange={(e) => Handle(e)}
          value={state?.course_name}
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleName" style={{fontSize:'smaller',fontWeight:'600',paddingLeft:'20px'}}>
          Duration
        </Label>
        <Input style={{marginLeft:'15px',width:'100%'}}
          name="duration"
          placeholder="Enter duration"
          type="number"
          onChange={(e) => Handle(e)}
          value={state?.duration}
        />
      </FormGroup>
    </Col>
    {/* <FormGroup>
    <Label for="exampleSelect"  style={{fontSize:'smaller',fontWeight:'600',paddingLeft:'20px'}}>
      Course Category:
    </Label>
    <Input style={{width:'50%',height:'30px',marginLeft:'15px',borderRadius:"1px",color:'grey',paddingTop:'1px'}}
      name="course_category"
      value={state?.course_category}
    >
    
     
    
    </Input>
  </FormGroup> */}
<div className='bottombtn' style={{marginTop:'90px'}}>
  <div className='bottombtn1'>
  <Button style={{backgroundColor:'#f3f3f3',color:'#4c6a61',width:'80px',height:'30px',paddingTop:'1px'}}>
    Back
  </Button>
  </div>
  <div className='bottombtn2'>
  <Button style={{backgroundColor:'#4c6a61',width:'100%',height:'30px',paddingTop:'1px'}}  type="submit">
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

export default UCpage
