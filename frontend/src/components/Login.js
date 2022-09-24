import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/Action/authActions'
import { useNavigate } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleLogin=(e)=>{
        e.preventDefault();
        dispatch(login({email,password}) ,
        navigate('/home')
        )
        
      }

  return (
    <div>
      
      <Form className='login'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control className='login-input' type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required  />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control className='login-input' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  required/>
      </Form.Group>
      <div class="input_field">
            	<input type="checkbox" id="cb1"/>
    			<label for="cb1">Remember me</label>
            </div>
      <Button className='login-btn' variant="primary" type="submit" onClick={handleLogin}>
        Log In
      </Button>
    </Form>
      
      
    </div>
   

  )
}

export default Login