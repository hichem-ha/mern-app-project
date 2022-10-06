import React ,{useState} from 'react';
import { Card } from 'react-bootstrap';
// import {Typography , TextField , Button} from '@material-ui/core';
import ForumIcon from '@mui/icons-material/Forum';
import {useDispatch} from 'react-redux';



const Comment = ({post}) => {
  const [textComment ,setTextComment]=useState('');
console.log(textComment)

  return (
    <div className='comment-top-line'>
        {!post.comments ? (
          
        <div>
        <input className='comment-area' placeholder="Write a comment..." value={textComment} onChange={(e)=>setTextComment(e.target.value)}></input>
        <ForumIcon/>
        <p>No Comments Yet</p>
        <p>Be the first to share what you think!</p>
        </div>
       ):(
        <div>
        <input className='comment-area' placeholder="Write a comment..."></input>
        <div>
       
        {post.comments.map((comment)=>
        <Card className='comment'>
        <Card.Body>
          <p>{comment.createdAt}</p>
         <p className=''> {comment.creatorId?.firstname}</p>
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