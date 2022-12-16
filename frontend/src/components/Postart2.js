import React ,{useState } from 'react'
import {  Card, Form } from 'react-bootstrap'
import Moment from 'react-moment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Comment from './Comment';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost,edit_post,Likespost, Unlikespost } from '../redux/Action/postActions';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Postart2 = ({post,communityId}) => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const [show2, setShow2] = useState(false);
 

  const [show1, setShow1] = useState(false);
 





  const [image,setImage] = useState(post.image)
  const [title ,setTitle]=useState(post.title);
  const [body,setBody]= useState(post.body);
  const dispatch =useDispatch()
  
  const user = useSelector((state) => state.authReducer.user);


  
  const handlelike=()=>{
   
    dispatch(Likespost(user._id,post._id),
    console.log(post?.likes?._id)
    );
    ;
  }

  const handleunlike=()=>{
    
    dispatch(Unlikespost(post.likes._id),
    )
  
  }
  
  
 
  return (
    <div>
 
      
            <div>
       {!post.image ?(
           <Card  className='post'>
           <Card.Body>
              <div className='name-time'>
            <Link to={`/community/${post.createdIn._id}`}><Card.Title className='link' >{post.createdIn?.name}</Card.Title></Link>   
            <Link to={`/profile/${post.creatorId?._id}`}><Card.Text className="mb-2 ">Posted by {post.creatorId?.firstname} {post.creatorId?.lastname}</Card.Text></Link>
             <Card.Text className="mb-2 "><Moment titleFormat="D MMM YYYY" >{post.createdAt}</Moment></Card.Text>
             {post.creatorId?._id === user._id && (  
          <IconButton aria-label="settings">
            <MoreHorizIcon className='MoreHorizIcon' onClick={()=>setShow1(!show1)}/>
          </IconButton>
             )}
       
       {show1&& <div  className='edit-delete'>
          <Button variant="text" onClick={()=>dispatch(deletePost(post._id))} ><DeleteIcon />Delete</Button>
          <Button variant="warning" onClick={()=>dispatch(handleShow())}>
          <EditIcon /> EDIT
          </Button>

          <Modal show={show} onHide={handleClose}>
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
              {post?.likes?.userId != user._id &&
               (<Button className='likes'  onClick={handlelike} ><ThumbUpIcon/>{post.likes.length} Likes</Button>)
                      }
                 {post?.likes?.userId === user._id &&
               (<Button className='unlikes' onClick={handleunlike} ><ThumbUpIcon/>{post.likes.length} Likes</Button>)
                }
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
            
           <Link to={`/community/${post.createdIn._id}`}><Card.Title className='link' >{post.createdIn?.name}</Card.Title></Link>   
           <Link to={`/profile/${post.creatorId?._id}`}><Card.Text className="mb-2 ">Posted by {post.creatorId?.firstname} {post.creatorId?.lastname}</Card.Text></Link>
          <Card.Text className="mb-2 ">At <Moment titleFormat="D MMM YYYY">{post.createdAt}</Moment></Card.Text>
          {post.creatorId?._id === user._id && (  
          <IconButton aria-label="settings">
            <MoreHorizIcon className='MoreHorizIcon' onClick={()=>setShow1(!show1)}/>
          </IconButton>
             )}
        
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
             
           {post?.likes?.userId != user._id &&
               (<Button className='likes'  onClick={handlelike} ><ThumbUpIcon/>{post.likes.length} Likes</Button>)
                      }
                 {post?.likes?.userId === user._id &&
               (<Button className='unlikes' onClick={handleunlike} ><ThumbUpIcon/>{post.likes.length} Likes</Button>)
                }
             <Button className='comments' onClick={()=>setShow2(!show2)}><ChatBubbleIcon /> {post.comments.length} Comments</Button>
            </div>
            {show2 && <div>
             <Comment post={post} /> 
            </div> }
            </Card.Body>
           </Card>
       )}
              
       </div>
      </div>
  
        
    
  )
}

export default Postart2