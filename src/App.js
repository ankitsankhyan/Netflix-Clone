import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Homescreen from './Pages/Homescreen';
import './App.css';
import ProfileScreen from './Pages/ProfileScreen';
import {  Routes, Route } from 'react-router-dom';
import LoginScreen from './Pages/LoginScreen';
import { auth, onAuthStateChanged } from './auth/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout , login ,selectUser} from './Slices/userSlice';
function App() {
 const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        dispatch(login({
          uid:user.uid,
          email:user.email,
        }));
        console.log(user,'user is logged in');
        navigate('/home');
      } else {
        console.log("user is logged out");
        dispatch(logout());
      }
    })
    // cleanup function
  
    return unsubscribe;
  }, [dispatch])
  return (
    <div className="App">
       <Routes>
       <Route path="/profile" element = {<ProfileScreen/>} />
          <Route path="/home" element={<Homescreen/>} />
          <Route path="/" element={<LoginScreen/>} />
        <Route path="*" element={<h1 style={{'color':'white'}}>404 Not Found</h1>} />
      
        </Routes>
    </div>
  );
}

export default App;
