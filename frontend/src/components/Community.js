import React, { useEffect, useState } from 'react'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Avatar from '@mui/material/Avatar';
import { Button, Card, Modal } from 'react-bootstrap';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CalendarViewDayOutlinedIcon from '@mui/icons-material/CalendarViewDayOutlined';
import RocketIcon from '@mui/icons-material/Rocket';
import Postart from './Postart';
import { useDispatch, useSelector } from 'react-redux';
import { getOneCommunity } from '../redux/Action/communityActions';

const Community = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch =useDispatch()
  useEffect(()=>{
 dispatch(getOneCommunity())
  },[])
  const community = useSelector((state) => state.postReducer.posts);

  return (
    <div className='community'>
    <div>
  <div className='profile-cover'>
  <Button className='btn-cover-pic'><AddAPhotoIcon className='icon-add'/>Edit cover photo</Button>
   <Avatar className='profile-icon' src="/broken-image.jpg" />
  </div>
 <div className='icon2-add'>
</div>
<h2 className='user-name'> community name </h2>
    </div>
    <div className='community-items'>
    <div >
      <Card className='description'>
      <Card.Body>
      <Card.Title> description </Card.Title>
      <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.Some quick example text to build on the card title and make up the
                  bulk of the card's content.
               </Card.Text>
      </Card.Body>
      </Card>
    </div>
    <div className='margin-community'>
   <div className='post-border'>
   <input className='post-area' placeholder="Create Post" onClick={handleShow}></input>
   <div className='modal' >
   <Modal  show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create post </Modal.Title>
        </Modal.Header>
         <textarea className='title-post' placeholder='title'></textarea>
      <textarea className='body-post' placeholder='body post'></textarea>
        <Modal.Footer>
          <Button className='post-btn' variant="primary" onClick={handleClose}>
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
    </div>
   
    </div>
  )
}

export default Community