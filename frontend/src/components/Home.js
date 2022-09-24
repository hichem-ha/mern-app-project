import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CalendarViewDayOutlinedIcon from '@mui/icons-material/CalendarViewDayOutlined';
import RocketIcon from '@mui/icons-material/Rocket';
import Post from './Post';
import { Button, Modal } from 'react-bootstrap';


const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
   <div className='post-border'>
   <input className='post-area' placeholder="Create Post" onClick={handleShow}></input>
   <Modal className='modal' show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create post </Modal.Title>
        </Modal.Header>
        <select name="choice">
        <option value="first" selected>Select community</option>
        <option value="second" >Value</option>
        <option value="third">Value</option>
         </select>
      <textarea placeholder='Create Post'></textarea>
        <Modal.Footer>
          <Button className='post-btn' variant="primary" onClick={handleClose}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
   </div> 
   <Avatar className='post-avatar'/>
   <div className='filters'>
    <p className='filter'><LocalFireDepartmentIcon /> Hot</p>
    <p className='filter'><CalendarViewDayOutlinedIcon/>New</p>
    <p className='filter'><RocketIcon/>Top</p>
   </div>
   <Post/>
  </div>
  )
}

export default Home