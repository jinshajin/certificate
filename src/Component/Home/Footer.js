import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { BsFacebook,BsTwitter,BsGoogle} from "react-icons/bs";
import './Footer.css'



const footer = () => {
  return (
    <Container>
    <div className='footer'>
    {/* <Container> */}
        <Row>
          
            <Col md-6>
              <div className='footer-left' style={{paddingLeft:'184px'}}>
                <h6 className='mainhead'>EDISONVALLEY</h6>
                <p>2020 © Edisonvalley. Design & Develop by Osperb <br />
                  We are a bunch of tech enthusiasts determined to <br />
                  uplift the society utilising the latest technologies around us
                </p>

              </div>

            </Col>
            
       
        <Col md-6>
          <Row>
           <Col md-4>
              <div>
                <h4 className='group'>Resources</h4>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </div>
            </Col>
            <Col md-3>
              <div>
                <h4 className='group'>Company</h4>
                <li>About Us</li>
                <li>Features</li>
              </div>
            </Col>
            <Col md-3>
              <div>
                <h4 className='group'>Social Links</h4>
                <a href='https://www.facebook.com' className='icon1'><BsFacebook/></a>
                <a href='https://www.instagram.com' className='icon2'><BsTwitter/></a>
                <a href='https://www.google.com'className='icon3'><BsGoogle/></a>
                
              </div>
            </Col>
        </Row>
        </Col>

        </Row>
       
    {/* </Container> */}
    </div>
    </Container>
  )
}

export default footer