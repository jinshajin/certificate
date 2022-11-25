import React ,{useState} from 'react'
import Layout from '../Layout/Layout'
import {Card,Col,FormGroup,Label,Input,Button,Form} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createcoursecategoryApi } from '../../Store/CourseCategory API/useApi';
import { Row } from 'react-bootstrap';



function CreateCC() {


    const dispatch=useDispatch();
    const navigate =useNavigate();
    const [input,setInput]=useState({});
    // console.log(state);


    const handleSubmit=(e)=>{
      e.preventDefault()

      if(input){
        dispatch( createcoursecategoryApi(input,navigate))
      }
     
    }
    
    
    

   

  return (
    <div>
      <Layout>
      <div className='main-card'>
            <h5 style={{fontSize:'14px',fontWeight:'600',color:'#495057',marginLeft:'15px'}}>CREATE COURSE CATEGORY</h5>
            <Card  className='subcard'    style={{width:'58%',height:'330px'}}>
              <Form onSubmit={handleSubmit}>
              <Row>
            
            <Col md={6}>
            
      <FormGroup>
        <Label for="exampleName" style={{fontSize:'smaller',fontWeight:'600',paddingLeft:'20px',paddingTop:'10px'}}>
          Course Category:
        </Label>
        <Input style={{marginLeft:'15px',width:'100%'}}
          id="exampleName"
          name=" course_category_name"
          placeholder="Enter a Course Category"
          type="string"
          onChange={(e) => setInput({...input,course_category_name: e.target.value })}

        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleName" style={{fontSize:'smaller',fontWeight:'600',paddingLeft:'20px'}}>
          Designation:
        </Label>
        <Input style={{marginLeft:'15px',width:'100%'}}
          id="exampleName"
          name="Name"
          placeholder="Enter a Designation"
          type="text"
          onChange={(e) => setInput({...input,designation: e.target.value })}
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
  <Button  style={{backgroundColor:'#4c6a61',width:'100%',height:'30px',paddingTop:'1px'}} type={"submit"}>
    Create
  </Button>
  </div>
  
</div>

    </Row>
    </Form>
  

  
  </Card>
    </div>
      </Layout>
    </div>
  )
}

export default CreateCC
