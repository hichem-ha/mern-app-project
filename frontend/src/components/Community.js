import React, { useEffect, useRef, useState } from 'react'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Avatar from '@mui/material/Avatar';
import { Button, Card, Form, Modal } from 'react-bootstrap';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CalendarViewDayOutlinedIcon from '@mui/icons-material/CalendarViewDayOutlined';
import RocketIcon from '@mui/icons-material/Rocket';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import Postart from './Postart';
import { useDispatch, useSelector } from 'react-redux';
import { getcommunities } from '../redux/Action/communityActions'; //, edit_profile,  getOneCommunity,edit_cover_profile
import { useParams } from 'react-router';
import Comment from './Comment';
import { deletePost, edit_post, Likespost } from '../redux/Action/postActions';
import { IconButton } from '@mui/material';
// import { Link } from 'react-router-dom';
import { getusers } from '../redux/Action/profileActions';

const Community = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const [show2, setShow2] = useState(false);
 
  const [show3, setShow3] = useState(false);

  const [show1, setShow1] = useState(false);
  const handleClose1=()=>setShow1(false);
  // const handleShow1 = () => setShow1(true);
  const refImage=useRef()
  const refcoverImage=useRef()

  const dispatch =useDispatch()
  const {id} =useParams()
  const [profileImage,setProfileImage] = useState('')
  const [coverImage,setCoverImage] = useState('')
  useEffect(()=>{
    dispatch(getusers())
     },[])
  // const user = useSelector((state) => state.authReducer.user);
  // const post = useSelector((state) => state.postReducer.posts);
  const community = useSelector((state) => state.communityReducer.communities);

  useEffect(()=>{
    dispatch(getcommunities())
     },[])
//   const editUserProfile=async(e)=>{
//     e.preventDefault();
//     const data=new FormData ()
//     data.append("profileImage",profileImage)
//     dispatch(edit_profile((data),community._id));   
//     console.log(community._id) 
//  }
//  const editUserCover=async()=>{
//   const data=new FormData ()
//   data.append("coverImage",coverImage)
//   dispatch(edit_cover_profile((data),community._id));    
// }
 
const [image,setImage] = useState('')
  const [title ,setTitle]=useState('');
  const [body,setBody]= useState('');
  return (
    <div>
      {community.filter((el)=>el._id===id).map((el)=> 
       <div className='community'>
       <div>
     <div className='profile-cover'>
     <img className='image-cover' src={el?.coverImage ? `uploads/${el?.coverImage}`:null} />
  <Button className='btn-cover-pic' onClick={()=>refcoverImage.current.click()}><AddAPhotoIcon className='icon-add'/>Add cover photo</Button>
 <Avatar  className='profile-icon' src={el?.profileImage ? `uploads/${el?.profileImage}`:"/broken-image.jpg"} />
<input className='choose_file'   type='file'  ref={refImage} hidden  onChange={(e)=>setProfileImage(e.target.files[0])}  />
<input className='choose_file'   type='file' name='coverImage' ref={refcoverImage} hidden  onChange={(e)=>setCoverImage(e.target.files[0])}  />
     </div>
    <Button className='btn-avtar-add' onClick={()=>refImage.current.click()}><AddAPhotoIcon className='avatar-add'/></Button>
{/* <Button >  profileImage  </Button>
<Button onClick={editUserCover}>CoverImage</Button> */}
   <h2 className='user-name'> {el.name} </h2>
       </div>
       <div className='community-items'>
       <div >
         <Card className='description'>
         <Card.Body>
         <Card.Text>{el.description}</Card.Text>
         </Card.Body>
         </Card>
       </div>
       <div className='margin-community'>
      <div className='post-border'>
      <input className='post-area' placeholder="Create Post" onClick={handleShow} ></input> 
      
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
      {el.posts.map((post)=>
      <div>

 {!post.image ?(
     <Card  className='post'>
     <Card.Body>
        <div className='name-time'>
      <Card.Title >{post?.createdIn?.name}</Card.Title>  
      <Card.Text className="mb-2 ">Posted by {post?.creatorId?.firstname} {post?.creatorId?.lastname}</Card.Text>
       <Card.Text className="mb-2 ">{post.createdAt}</Card.Text>
        <IconButton aria-label="settings">
      <MoreHorizIcon className='MoreHorizIcon' onClick={()=>setShow1(!show1)} onHide={handleClose1}/>
    </IconButton>
 
 {show1&& <div  className='edit-delete'>
    <Button variant="text" ><p><DeleteIcon onClick={()=>dispatch(deletePost(post._id))}/>Delete</p></Button>
    <Button variant="warning" onClick={()=>dispatch(handleShow())}>
    <EditIcon /> EDIT
    </Button>

    <Modal show3={show3} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Edit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              onChange={(e)=>dispatch(setTitle(e.target.value))}
              value={title}
              
            />
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>body</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter body"
              onChange={(e)=>dispatch(setBody(e.target.value))}
              value={body}
             
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="warning " onClick={()=>dispatch(edit_post({title,body,image},post._id),handleClose())} >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
   </div>
    }

          </div>
          <Card.Title>{post.title}</Card.Title>
           <Card.Text>
           {post.body}
         </Card.Text>
        <div className='likes-comments'>
          <Button className='likes' onClick={()=>dispatch(Likespost())}><ThumbUpAltOutlinedIcon/>{post.likes.length} Likes</Button>
          <Button className='comments' onClick={()=>setShow2(!show2)}><ChatBubbleIcon />{post.comments.length} Comments</Button>
         </div>
         {show2 && <div>
          <Comment post={post} /> 
         </div> }
         </Card.Body>
        </Card>
 ):(
  
  <Card  className='post'>
  <Card.Body>
     <div className='name-time'>
 <Card.Title >{post?.createdIn?.name}</Card.Title>
     <Card.Text className="mb-2 ">Posted by {post?.creatorId?.firstname} {post?.creatorId?.lastname}</Card.Text>
    <Card.Text className="mb-2 ">{post.createdAt}</Card.Text>
    <IconButton aria-label="settings">
      <MoreHorizIcon className='MoreHorizIcon' onClick={()=>setShow1(!show1)}/>
    </IconButton>
    {show1&& <div className='edit-delete2' >
      <Button variant="text" ><p><DeleteIcon onClick={()=>dispatch(deletePost(post._id))}/>Delete</p></Button>
      <Button variant="warning" onClick={handleShow}>
      <EditIcon /> EDIT
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Edit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group className="mb-3" >
         <input className='choose_file'   type="file" name='filename' onChange={(e)=>setImage(e.target.filename[0])}  />
       </Form.Group>
        
          <Form.Group className="mb-3" controlId="formBasicEmail">
         
            <Form.Label>title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              onChange={(e)=>dispatch(setTitle(e.target.value))}
              value={title}
              
            />
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>body</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter body"
              onChange={(e)=>dispatch(setBody(e.target.value))}
              value={body}
             
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="warning " onClick={()=>dispatch(edit_post({title,body,image},post?._id),handleClose())} >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
   </div>
    }
       </div>
       <Card.Title>{post.title}</Card.Title>
        <Card.Text>
        {post.body}
      </Card.Text>
      <Card.Img src={`/uploads/${post.image}`} />
     <div className='likes-comments'>
       <Button className='likes' onClick={()=>dispatch(Likespost(post._id))}><ThumbUpAltOutlinedIcon/>{post.likes.length} Likes</Button>
       <Button className='comments' onClick={()=>setShow2(!show2)}><ChatBubbleIcon />{post.comments.length} Comments</Button>
      </div>
      {show2 && <div>
       <Comment post={post} /> 
      </div> }
      </Card.Body>
     </Card>
 )}
        
 </div>
      )}

     </div>
       </div>
      
       </div>
     ) } 
    </div>
    
  )
}

export default Community