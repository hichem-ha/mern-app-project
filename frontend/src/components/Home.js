import React, { useEffect, useRef, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CalendarViewDayOutlinedIcon from '@mui/icons-material/CalendarViewDayOutlined';
import RocketIcon from '@mui/icons-material/Rocket';
import Postart from './Postart';
import {  Form, Modal } from 'react-bootstrap';
import { getcommunities, getOneCommunity } from '../redux/Action/communityActions';
import { useDispatch, useSelector } from 'react-redux';
import { addpost, getposts } from '../redux/Action/postActions';
import Button from '@mui/material/Button';





const Home = ({name,communityId}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [community,setCommunity] = useState('')
   const [image,setImage] = useState('')
  const [title ,setTitle]=useState('');
  const [body,setBody]= useState('');
  const user = useSelector((state)=>state.authReducer.user);
  const posts = useSelector((state) => state.postReducer.posts);
  const communities = useSelector((state) => state.communityReducer.communities);
  
 const refImage=useRef()
  const handlePost=()=> {
    const data=new FormData ()
    data.append("image",image)
    data.append("community",community)
    data.append("title",title)
    data.append("body",body)
    dispatch(addpost((data),user._id,community));
    setCommunity('')
    setTitle('')
    setBody('')
    setImage('')
    handleClose()
  }


const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(getcommunities(),getposts())
     },[])
     useEffect(()=>{
      dispatch(getOneCommunity(communityId))
       },[])

     
 
    
  return (
    <div>
   <div className='post-border'>
   <input className='post-area' placeholder="Create Post" onClick={handleShow}></input>
   <div className='modal' >
   <Modal  show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create post </Modal.Title>
        </Modal.Header>
        <Form.Select className='post-select' onChange={(e)=>setCommunity(e.target.value)}  >

        <option className="">----choose community----</option>
        {communities?.map((community)=><option value={community._id}>{community.name}</option>) } 
        </Form.Select>
        <Button onClick={()=>refImage.current.click()} >drop image</Button>
         <input className='choose_file'   type='file' ref={refImage} hidden onChange={(e)=>setImage(e.target.files[0])}  />
         <textarea className='title-post' placeholder='title'  onChange={(e)=>setTitle(e.target.value)}></textarea>
         <textarea className='body-post' placeholder='body post'  onChange={(e)=>setBody(e.target.value)}></textarea>
        <Modal.Footer>
          <Button className='post-btn' variant="primary" onClick={handlePost}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
   </div>
  
   </div> 
   <Avatar className='post-avatar' src={user?.profileImage ? `uploads/${user?.profileImage}`:"/broken-image.jpg"}/>
   <div className='filters'>
    <Button className='filter' ><LocalFireDepartmentIcon /> Hot</Button>
    <Button className='filter'><CalendarViewDayOutlinedIcon/>New</Button>
    <Button className='filter'><RocketIcon/>Top</Button>
   </div>
   {posts.map((post)=>communityId===post.createdIn._id  ?<div><Postart post={post}/></div>:communityId==="----choose community----"  ? <div><Postart post={post}/></div>: null)}
  </div>
  )
}

export default Home