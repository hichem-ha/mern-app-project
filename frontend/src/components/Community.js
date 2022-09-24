import React from 'react'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Avatar from '@mui/material/Avatar';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Community = () => {
  const community = useSelector((state) => state.community);

  return (
    <div className='community'>
    <div>
  <div className='profile-cover'>
  <Button className='btn-cover-pic'><AddAPhotoIcon className='icon-add'/>Edit cover photo</Button>
   <Avatar className='profile-icon' src="/broken-image.jpg" />
  </div>
 <div className='icon2-add'>
</div>
<h2 className='user-name'>{community.name} </h2>
    </div>
    </div>
  )
}

export default Community