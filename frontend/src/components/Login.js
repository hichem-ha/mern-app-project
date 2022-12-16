import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/Action/authActions'
import { useNavigate } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import TextField from '@mui/material/TextField';


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
      <TextField
        className='login-input'
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
      <Form.Group className="mb-3" controlId="formBasicEmail">
      
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <TextField
             className='login-input'
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
      </Form.Group>
      <div class="input_field">
            	<input type="checkbox" id="cb1"/>
    			<label for="cb1">Remember me</label>
            </div>
      <Button className='login-btn' variant="primary" type="submit" onClick={handleLogin}>
        LOG IN
      </Button>
    </Form>
      
      
    </div>
   

  )
}

export default Login