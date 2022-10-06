import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './components/Navi';
import Profile from './components/Profile';
import CreateCommunity from './components/CreateCommunity';
import { useDispatch } from 'react-redux';
import{ useEffect } from 'react';
import { get_current } from './redux/Action/authActions';
import Community from './components/Community';
import { getposts } from './redux/Action/postActions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_current());
  }, []);
  return (
    <div className="App">
    <Navigation/> 
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={ <Register /> } />
    <Route path="/home" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/create-community" element={<CreateCommunity/>} />
    <Route path="/community" element={<Community/>} />

    </Routes>
    </div>
  );
}

export default App;
