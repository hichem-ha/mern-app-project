import React, { useEffect, useRef, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { Button } from 'react-bootstrap';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useDispatch, useSelector } from 'react-redux';
import { getusers } from '../redux/Action/profileActions';
import { useParams } from 'react-router';

const Profileuser = () => {
    const user = useSelector((state) => state.profileReducer.user);
const {id} =useParams()
const dispatch =useDispatch()

useEffect(() => {
    dispatch(getusers());
  }, []);  

  return (
    <div>
         {user.filter((el)=>el._id===id).map((el)=> 
         
            <h1>{el.firstname}</h1>
            
        
    )}
    </div>
  )
}

export default Profileuser