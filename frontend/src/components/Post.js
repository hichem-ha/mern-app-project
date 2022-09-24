import React ,{useState , useEffect} from 'react'
import { Card } from 'react-bootstrap'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
// import { useDispatch } from 'react-redux';

const Post = () => {
  // const [data,setData]=useState([])
  // // const dispatch=useDispatch()
  //  useEffect(()=>{
  //     fetch('/allpost'
  // ,{
  //     headers:{
  //       "Authorization":"bearer"+localStorage.getItem('jwt')  
  //         }
  // }
  //   ).then(res=>res.json())
  //   .then(result=>{
  //     console.log(result)
  //     setData(result)
  //   })
  //  },[])
  return (
    <div>
      {/* {
        data.map(item=>{ */}
          {/* return( */}
            <Card  className='post'>
            <Card.Body>
              <div className='name-time'>
              <Card.Title>Community Name</Card.Title>
              <Card.Text className="mb-2 ">time</Card.Text>
              </div>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            <div className='likes-comments'>
            <Card.Text className='likes'><ThumbUpAltOutlinedIcon/>Likes</Card.Text>
              <Card.Text className='comments'> Comments</Card.Text>
            </div>
            </Card.Body>
          </Card>
          )
        {/* })
      }
  */}
    </div>
  )
}

export default Post