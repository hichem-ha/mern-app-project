import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { register } from '../redux/Action/authActions';
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [firstname,setFirstame] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [gender,setGender] = useState('')
    const handleRegister=(e)=>{
      e.preventDefault();
      dispatch(register({firstname,lastname,email,password,gender}),
      navigate('/login')
      )
    
    }
   

  return (
    <Form className='register'>
  <div class="form_container">
    <div class="title-container">
      <h2>Register</h2>
        <h5>It’s quick and easy.</h5>
    </div>
    <div class="row clearfix">
      <div class="">
        <form>
          <div class="input">
        <div class="input_field"> 
        <Grid container spacing={1}>
        <Grid item xs={15} sm={6}>
        <TextField
         className='name'
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e) => setFirstame(e.target.value)} value={firstname}
                />
                </Grid>
              <Grid item xs={12} sm={6}>
                 <TextField
                          className='name'
                  autoComplete="given-name"
                  name="lastName"
                  required
                  id="lastName"
                  label="Last Name"
                  autoFocus
                  onChange={(e) => setLastname(e.target.value)} value={lastname}           
                       />
                       </Grid>
                        </Grid>
              
                <TextField
                className='register-input'
                  required
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email} onChange={(e) => setEmail(e.target.value)}
                />
             
                <TextField
                className='register-input'
                  required
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password} onChange={(e) => setPassword(e.target.value)}
                />
           
              </div>    
             </div>    
       


    
              <div class="gender">
              <Form.Select className="gender_select" onChange={(e)=>setGender(e.target.value)} value={gender}>
                <option className="gender">----choose gender----</option>
                <option> male</option>
                <option> female</option>
              </Form.Select></div>
               
            <div class="input_field checkbox_option">
            	<input type="checkbox" id="cb1"/>
    			<label for="cb1">I agree with terms and conditions</label>
            </div>
            <Button type="submit" className='register-btn' onClick={handleRegister}>Register</Button>
        </form>
      </div>
    </div>
  </div>
</Form>

  )
}

export default Register
