import React ,{useState , useEffect} from 'react'
import { Button, Card } from 'react-bootstrap'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Comment from './Comment';
import { useDispatch, useSelector } from 'react-redux';
import { getposts ,Likespost } from '../redux/Action/postActions';
// import { useDispatch } from 'react-redux';

const Postart = () => {

  const [show, setShow] = useState(false);



  const dispatch =useDispatch()
 useEffect(()=>{
dispatch(getposts())
 },[])
  const posts = useSelector((state) => state.postReducer.posts);

  return (
    <div>
   {
      posts.map((post)=> 
        <div>
          <Card  className='post'>
           <Card.Body>
              <div className='name-time'>
             <Card.Title>{post.createdIn?.name}</Card.Title>
             <Card.Text className="mb-2 ">{post.createdAt}</Card.Text>
                </div>
                <Card.Title>{post.title}</Card.Title>
                 <Card.Text>
                 {post.body}
               </Card.Text>
              <div className='likes-comments'>
                <Button className='likes' onClick={()=>dispatch(Likespost(post.id))}><ThumbUpAltOutlinedIcon/>{post.likecount} Likes</Button>
                <Button className='comments' onClick={()=>setShow(!show)}><ChatBubbleIcon /> Comments</Button>
               </div>
               {show && <div>
                <Comment post={post} /> 
               </div> }
               </Card.Body>
              </Card>
              
       </div>
       ) 
        } 
      
      
      </div>
  
        
    
  )
}

export default Postart