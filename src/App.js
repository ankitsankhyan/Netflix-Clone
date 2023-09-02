import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Homescreen from './Pages/Homescreen';
import './App.css';
import ProfileScreen from './Pages/ProfileScreen';
import {  Routes, Route } from 'react-router-dom';
import LoginScreen from './Pages/LoginScreen';
import { auth, onAuthStateChanged } from './auth/firebase';
import { selectUser } from './Slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { logout , login } from './Slices/userSlice';
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
       localStorage.setItem('user', JSON.stringify(user));
        navigate('/home');
      } else {
        console.log("user is logged out");
        dispatch(logout());
      }
      
    })
    // cleanup function 
   
    return unsubscribe;
  }, [])
  return (
    <div className="App">
       <Routes>
       <Route exact path="/profile" element = {<ProfileScreen/>} />
       <Route exact path="/home" element={<Homescreen/>} />
       <Route exact path="/" element={<LoginScreen/>} />
       <Route path="*" element={<h1 style={{'color':'white'}}>404 Not Found</h1>} />
      
        </Routes>
    </div>
  );
}

export default App;
