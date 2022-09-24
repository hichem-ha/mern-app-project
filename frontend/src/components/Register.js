import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { register } from '../redux/Action/authActions';

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
    
      <div class="form_wrapper">
  <div class="form_container">
    <div class="title_container">
      <h2>Register</h2>
        <h5>It’s quick and easy.</h5>
    </div>
    <div class="row clearfix">
      <div class="">
        <form>
          <div class="input">
        <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
        <Form.Control className='register-input' type="text" placeholder="first name" onChange={(e) => setFirstame(e.target.value)} value={firstname}  required/>
        <Form.Control className='register-input' type="text" placeholder="last name" onChange={(e) => setLastname(e.target.value)} value={lastname}  required/>
              </div>
          <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
          <Form.Control className='register-input' type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required  />
          </div>
          <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
          <Form.Control className='register-input' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  required/>
          </div>
          </div>        
            	{/* <div class="input_field radio_option">
                <h5>Gender</h5>
                <div class="label">
                <input type="radio" name="radiogroup1" id="rd1"/>
              <label for="rd1">Male</label>
              <input type="radio" name="radiogroup1" id="rd2"/>
              <label for="rd2">Female</label>
                </div>
              </div> */}
              <div class="input">
              <Form.Label>Gender</Form.Label>
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
</div>

  )
}

export default Register
