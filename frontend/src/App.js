import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile';
import CreateCommunity from './components/CreateCommunity';
import { useDispatch } from 'react-redux';
import{ useEffect, useState } from 'react';
import { get_current } from './redux/Action/authActions';
import Community from './components/Community';
import { getposts } from './redux/Action/postActions';
import Profileuser from './components/Profileuser';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_current());
  }, []);
  useEffect(()=>{
    dispatch(getposts())
     },[])
  const [name , setName] =useState('')
  const [communityId,setCommunityId]=useState("----choose community----")
  console.log(communityId)
  return (
    <div className="App">
    <Navigation setName={setName} setCommunityId={setCommunityId} communityId={communityId} /> 
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={ <Register /> } />
    <Route path="/home" element={<Home name={name} communityId={communityId} />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/create-community" element={<CreateCommunity/>} />
    <Route exact path="/community/:id"  element={<Community />} />
    <Route path="/profileuser/:id "element={<Profileuser/>}/>
    </Routes>
    </div>
  );
}

export default App;
