import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Button } from 'react-bootstrap';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className='profile'>
<div className='profile-cover'>
<Button className='btn-cover-pic'><AddAPhotoIcon className='icon-add'/>Add cover photo</Button>
<Avatar className='profile-icon' src="/broken-image.jpg" />
</div>
<div className='icon2-add'>
{/* <AddAPhotoIcon /> */}
</div>
<h2 className='user-name'>{user.firstname} {user.lastname} </h2>
    </div>
  )
}

export default Profile