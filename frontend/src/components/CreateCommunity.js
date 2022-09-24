import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addcommunity } from '../redux/Action/communityActions'

const CreateCommunity = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name,setName] = useState('')

  const handleRegister=(e)=>{
    e.preventDefault();
    dispatch(addcommunity({name}),
    navigate('/community')
    )
  
  }
  return (
    <div className='border-community'>
        <h3 className='comm-title' id='under-l' >Create a community</h3>
        <h3 className='comm-title' >Name</h3>
        <p className='msg'>Community names including capitalization cannot be changed</p>
        <input className='name-community' placeholder="Add a name" value={name} onChange={(e)=>setName(e.target.value)}></input><br/>
        <button className='community-btn' id='cancel-btn'> <Nav.Link as={Link} to="/home" > Cancel</Nav.Link></button>
        <button className='community-btn' id='create-btn' onClick={handleRegister} ><Nav.Link  >Create Community</Nav.Link></button>

    </div>
  )
}

export default CreateCommunity