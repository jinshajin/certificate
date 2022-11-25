import React, { useEffect } from 'react'
import{Row,Col,Button} from 'react-bootstrap'
import pic from './pic.jpeg'
 import Avatar from './Avatar.jpeg'
import { Card } from 'reactstrap'
import icon1 from './icon1.PNG'
import icon2 from './icon2.PNG'
import icon3 from './icon3.PNG'



import './Dashbanner.css'
import { useDispatch, useSelector } from 'react-redux'
import { profileApi } from '../../Store/Login API/useApi'
function Dashbanner() {

    const dispatch= useDispatch();
    const{loginDetails}=useSelector((state)=>({
        loginDetails:state.LoginReducer.loginDetails,
    }))
    useEffect(()=>{
        dispatch (profileApi())
    },[dispatch])


  return (
    <div>
        <Row style={{padding:'12px',paddingTop:'24px'}}>
            <Col md='4'>
                {/* <Card className='d-card'> */}
                <Card className='d-card'>
                <div className='c-top'>
                    <h5>Welcome Back...!</h5>
                    <p>it will seem like shiplified</p>
                    <div className='cardbg-body'>
                        <img className='card-bg1' src={pic} alt="error" />
                    </div>

                </div>
                <div className='c-bottom'>
                    <Row className='bottom-row'>
                        <Col className='md-4'>
                            <div className='avatar-img'>
                                <img className='avatar' src={Avatar}/>
                            </div>
                            <h6>{loginDetails?.username}</h6>
                            <p>{loginDetails?.email}</p>

                        </Col>
                        <Col md-4 className="lcol">
                            <p>125</p>
                            <p>Project</p>
                            <Button className='loginbtn'>View Profile</Button>
                        </Col>
                        <Col md-4  className="lcol">
                            <h6>$12.45</h6>
                            <p>Revenue</p>

                        </Col>
                    </Row>


                </div>
                </Card>
                {/* </Card> */}
            </Col>
            
            <Col md='8' className='rightrow'>
                <Row className='leftrow'>
                    <Col md='6' >
                        <Card className='rightmd'>
                            <p>Available Course</p>
                            <h6>3</h6>
                            <div style={{display:'flex',justifyContent:'flex-end'}}>
                            <img className='icons' src={icon3} alt="error" />
                            </div>
                        </Card>
                    </Col>
                    
                    <Col md='6'>
                        <Card className='rightm'>
                            <p>Course Completed Students </p>
                            <h6>3</h6>
                            <div style={{display:'flex',justifyContent:'flex-end'}}>
                            <img className='icons' src={icon2} alt="error" />
                            </div>
                        </Card>
                    </Col>
                    <Col md='6' >
                        <Card className='rightmd'>
                            <p>Total Students</p>
                            <h6>5</h6>
                            <div style={{display:'flex',justifyContent:'flex-end'}}>
                            <img className='icons' src={icon1} alt="error" />
                            </div>
                        </Card>
                    </Col>
                    <Col md='6' >
                        <Card className='rightm'>
                            <p>Total Students</p>
                            <h6>5</h6>
                            <div style={{display:'flex',justifyContent:'flex-end'}}>
                            <img className='icons' src={icon1} alt="error" />
                            </div>
                        </Card>
                    </Col>
                    
                   </Row>
                
              </Col>
            </Row>

        
    </div>
  )
}

export default Dashbanner
