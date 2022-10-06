import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CalendarViewDayOutlinedIcon from '@mui/icons-material/CalendarViewDayOutlined';
import RocketIcon from '@mui/icons-material/Rocket';
import Postart from './Postart';
import { Button, Form, Modal } from 'react-bootstrap';
import { getcommunities } from '../redux/Action/communityActions';
import { useDispatch, useSelector } from 'react-redux';
import { addpost } from '../redux/Action/postActions';
import { useNavigate } from 'react-router';


const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Navigate =useNavigate() 

  const [community,setCommunity] = useState('')
  const [title ,setTitle]=useState('');
  const [body,setBody]= useState('');
  const handlePost=(e)=>{
    e.preventDefault();
    dispatch(addpost({community,title,body}));
    handleClose()
   
  }
  console.log(community,title,body)
const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(getcommunities())
     },[])
     const communities = useSelector((state) => state.communityReducer.communities);
   
  return (
    <div>
   <div className='post-border'>
   <input className='post-area' placeholder="Create Post" onClick={handleShow}></input>
   <div className='modal' >
   <Modal  show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create post </Modal.Title>
        </Modal.Header>
        <Form.Select className='post-select'onChange={(e)=>setCommunity(e.target.value)} value={community} >

        <option className="">----choose community----</option>
        {communities?.map((community)=><option > {community.name}</option>) } 
        </Form.Select>

         
         <textarea className='title-post' placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)}></textarea>
      <textarea className='body-post' placeholder='body post' value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
        <Modal.Footer>
          <Button className='post-btn' variant="primary" onClick={handlePost}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
   </div>
  
   </div> 
   <Avatar className='post-avatar'/>
   <div className='filters'>
    <p className='filter'><LocalFireDepartmentIcon /> Hot</p>
    <p className='filter'><CalendarViewDayOutlinedIcon/>New</p>
    <p className='filter'><RocketIcon/>Top</p>
   </div>

   <Postart/>
  </div>
  )
}

export default Home