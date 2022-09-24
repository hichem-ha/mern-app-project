import React, { useState } from 'react'
import { Container,Nav,Navbar, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { logout } from "../redux/Action/authActions";
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
const Navi = () => {
  const [show, setShow] = useState(false);


     // ---------------//
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
      dispatch(logout());
      Navigate('/login')
    };
  return (
    <div>
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
            />
          </Form>
          <NorthEastIcon className='icons'/>
          <SignalCellularAltIcon className='icons'/>
          <Avatar className='nav-profile-icon' src="/broken-image.jpg" onClick={()=>setShow(!show)} />
          {show && 
          <div className='setting-menu' >
          <div className='setting-menu-inner'>
            <div className='under-line'>
            <div className='use-profile'>
          <Avatar className='setting-profile-icon' src="/broken-image.jpg" />
          <Nav.Link as={Link} to="/profile" >Hamdi Hichem</Nav.Link>
          </div>
            </div>
         
          <div className='under-line'> 
            <Nav.Link className='create-community' as={Link} to="/create-community" > <CreateIcon/> Create Community</Nav.Link>
          <Nav.Link className='settings' > <SettingsIcon/> Settings</Nav.Link>
          <Nav.Link className='help-support' > <HelpIcon/> Help & Support</Nav.Link>
          <Nav.Link className='help-support' > <FeedbackIcon/> Give Feedback</Nav.Link>
          <Nav.Link className='help-support' > < DeleteOutlineRoundedIcon/> Delete Account</Nav.Link>

          </div>
          <Nav.Link className='log-out' as={Link} to="/login" onClick={handleLogout} ><LogoutIcon/> Log Out</Nav.Link>
         <p className='C-R'>© 2022 Share, Inc. All rights reserved</p>
          </div>
          </div>}
          
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navi