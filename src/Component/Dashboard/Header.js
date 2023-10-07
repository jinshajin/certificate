import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { GoDash } from "react-icons/go";
import {useDispatch, useSelector} from "react-redux"
import './Header.css'
import { useNavigate } from 'react-router-dom';
import { logoutApi } from '../../Store/Login API/useApi';




function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const Handlelogout =()=>{
    dispatch(logoutApi(navigate))
  }
    const{loginDetails}=useSelector((state)=>({
        loginDetails:state.LoginReducer.loginDetails,
    }))
  return (
    
    <div>
    <Navbar className='main-head' expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">EdisonValley</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
         
          {/* <Nav.Link href="#action1">Home</Nav.Link> */}
          <div className='hicon'>
          <GoDash/>
          </div>
          <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search..."
            className="me-2"
            aria-label="Search"
          />
          </Form>
        </Nav>
       
         
          <NavDropdown title={loginDetails?.username} id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">View profile</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Settings
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item  className='drop' onClick={Handlelogout}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header