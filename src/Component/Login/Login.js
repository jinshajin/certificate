import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { loginApi } from '../../Store/Login API/useApi';
import { useDispatch, useSelector } from "react-redux";
import { Form } from 'reactstrap';

  const Login = () => {
        const {loading}= useSelector((state) => ({
        loading:state.LoginReducer.loading,
      }));
      
       
 const navigate = useNavigate()
  const dispatch = useDispatch();
  const [state, setState]=useState("")


 

//   const { loginError, loading } = useSelector((state) => ({
//         loginError: state.error,
//         loading: state.loading,
// }));


  // const Handle =(e)=>{
  //   const Data ={...input
  //   }
  // Data[e.target.name]= e.target.value
  // setInput(Data)
  // }


  

  const handleSubmitLogin=(e)=>{  
      e.preventDefault() 
      dispatch(loginApi(state,navigate));
  }
  
  return(
    <div className='main-div'>
        <div className='sub-div'>
        <Card className='l-card shadow-lg p-3 mb-5 bg-white rounded'>
          <Form onSubmit={handleSubmitLogin}>
          
            
            
            <h3>EDISONVALLEY</h3>
            <h5 className='h5-login'>Login</h5>
            <span className='box-name'>Username</span>
            <input type={"text"} placeholder=" Enter username" className='type-box'  
              onChange={(e) =>setState({...state,username:e.target.value})} />
            <span className='box-name'>Password</span>
            <input type={"Password"} placeholder="Password" className='type-box'
            onChange={(e) =>setState({...state,password:e.target.value})} />
            <Button type='submit'  className='login-box'>{  loading ? "loading...":"Login"}</Button>
            <span className='text'>You dont have an account ?
            <Link to={'/register'}>Register</Link>
            </span>
            <footer className='bottom'>© 2020 Edisonvalley. Design & Developed by Osperb</footer>

            </Form>

        </Card>
        </div>
    </div>
  )
}

export default Login