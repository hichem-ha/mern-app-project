import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import CreateIcon from '@mui/icons-material/Create';
import HelpIcon from '@mui/icons-material/Help';
import FeedbackIcon from '@mui/icons-material/Feedback';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { logout } from "../redux/Action/authActions";
import { getcommunities, getOneCommunity } from "../redux/Action/communityActions";
import { Button } from "@mui/material";


const Navigation = ({setName,setCommunityId}) => {
  const user = useSelector((state) => state.authReducer.user);
  // const auth = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 const dispatch = useDispatch();
 const Navigate =useNavigate();
  // ---------------//

 useEffect(()=>{
   dispatch(getcommunities())
    },[])
    const communities = useSelector((state) => state.communityReducer.communities);
  // ---------------//
 const handleLogout = (e) => {
     e.preventDefault();
   dispatch(logout())
   Navigate('/login') 
 };


  return (
    <div className="nav-bar">
    {!user ? (
        <Navbar >
          <Container>
            <Navbar.Brand className="Share-nav" as={Link} to="/">
              Share
            </Navbar.Brand >
            <Nav className="me-auto" >
              <Nav.Link as={Link} to="/login">
              <button className="nav-login">log In</button>
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                <button className="nav-register">Register</button>
              </Nav.Link>
              
            </Nav>
          </Container>
        </Navbar>):(
            <Navbar className='nav-bar'>
        <Container>
          <Navbar.Brand href="#home" className='logo'>Share</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='nav-home' as={Link} to="/home"><HomeIcon/>Home</Nav.Link>
            <Form className="d-flex">
          <SearchIcon className='search-icon'/>
            <Form.Control
              type="search"
              placeholder="Search..."
              className="search-input"
              onChange={(e)=>setName(e.target.value)}
            />
          </Form>
          <Button className="nav_btn"><NorthEastIcon className='icons' /></Button>
          <Button className="nav_btn"><SignalCellularAltIcon className='icons'/></Button>
          <Form.Select className="community_select" onChange={(e)=>setCommunityId(e.target.value)} >
              <option className="">----choose community----</option>
          {communities?.map((community)=>
          <option   className="dropdown__option" value={community._id}> 
               {community.name}
               </option>) } 
              </Form.Select>
          <Avatar className='nav-profile-icon' src={user?.profileImage ? `uploads/${user?.profileImage}`:"/broken-image.jpg"} onClick={()=>setShow(!show)}  />
          <div show={show} onHide={handleClose}>
          {show && 
          <div className='setting-menu' >
          <div className='setting-menu-inner'>
            <div className='under-line'>
            <div className='use-profile'>
          <Avatar className='setting-profile-icon' src={user?.profileImage ? `uploads/${user?.profileImage}`:"/broken-image.jpg"} />
          <Nav.Link as={Link} onClick={handleClose} to="/profile" > {user.firstname} {user.lastname}</Nav.Link>
          </div>
            </div>
         
          <div className='under-line'> 
            <Nav.Link className='create-community' onClick={handleClose} as={Link} to="/create-community" > <CreateIcon/> Create Community</Nav.Link>
          <Nav.Link className='settings' > <SettingsIcon/> Settings</Nav.Link>
          <Nav.Link className='help-support' > <HelpIcon/> Help & Support</Nav.Link>
          <Nav.Link className='help-support' > <FeedbackIcon/> Give Feedback</Nav.Link>
          <Nav.Link className='help-support' > < DeleteOutlineRoundedIcon/> Delete Account</Nav.Link>

          </div>
          <Nav.Link className='log-out'  onClick={handleLogout} ><LogoutIcon/> Log Out</Nav.Link>
         <p className='C-R'>© 2022 Share, Inc. All rights reserved</p>
          </div>
          </div>}
          
          </div>
          </Nav>
        </Container>
      </Navbar>
         )
        } 
    
          
      
         
            
  
      </div>
  );
};

export default Navigation;