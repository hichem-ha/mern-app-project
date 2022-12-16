import React ,{useState} from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
// import {Typography , TextField , Button} from '@material-ui/core';
import ForumIcon from '@mui/icons-material/Forum';
import {useDispatch, useSelector} from 'react-redux';
import { addcomment, deletecomment } from '../redux/Action/commentAction';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';




const Comment = ({post}) => {
  const [textComment ,setTextComment]=useState('');
  const [show1, setShow1] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()

  const user = useSelector((state) => state.authReducer.user);

  
  const handleRegister=(e)=>{
    e.preventDefault();
    dispatch(addcomment({textComment},user._id,post._id),
    setTextComment('')
    )
  
  }
  return (
    <div className='comment-top-line'>

     
     
        {!post.comments ? (
          
        <div>
        <input className='comment-area' placeholder="Write a comment..." value={textComment} onChange={(e)=>setTextComment(e.target.value)}></input>
        <Button onClick={handleRegister} >Add comment</Button>
        <ForumIcon/>
       <p>No Comments Yet</p>
       <p>Be the first to share what you think!</p>
        </div>
         
        
         
       
       ):(
        <div>
          
          <input className='comment-area' placeholder="Write a comment..." value={textComment} onChange={(e)=>setTextComment(e.target.value)}></input>
          <Button onClick={handleRegister} >Add comment</Button>

        
        <div>
       
        {post.comments.map((comment,index)=>
        <Card className='comment'>
        <Card.Body>
          {comment.creatorId   === user._id &&(
            <IconButton aria-label="settings">
            <MoreVertIcon onClick={()=>setShow1(!show1)}/>
          </IconButton>
          )}
        
          {show1&& <div >
          <Button variant="text" onClick={()=>dispatch(deletecomment(comment._id))}><p><DeleteIcon />Delete</p></Button>
          <Button variant="text" onClick={handleShow}><p> <EditIcon /> Edit</p></Button>
          <Modal  show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit comment </Modal.Title>
        </Modal.Header> 
      <textarea className='body-post' placeholder='body post' value={textComment} onChange={(e)=>setTextComment(e.target.value)}></textarea>
        <Modal.Footer>
          <Button className='post-btn' variant="primary"  >
            Post
          </Button>
        </Modal.Footer>
      </Modal>
         </div>
          }
          <p>{comment.createdAt}</p>
         <p>commented by {comment?.creatorId?.firstname}{comment?.creatorId.lastname}</p>
       <p className='p-comment'> {comment.textComment}</p>
       
        </Card.Body>
       </Card>
       )} 
        </div>
        </div>
        
      ) }
     
    </div>
  )
}

export default Comment