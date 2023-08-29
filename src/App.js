import React, { useEffect } from 'react';
import Homescreen from './Pages/Homescreen';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import LoginScreen from './Pages/LoginScreen';
import { auth, onAuthStateChanged } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout , login ,selectUser} from './features/userSlice';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        dispatch(login({
          uid:user.uid,
          email:user.email,
        }));
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
        {!user?( <Route path="/" element={<LoginScreen />} />):(
        <>
          <Route path="/" element={<Homescreen/>} />
        <Route path="*" element={<h1 style={{'color':'white'}}>404 Not Found</h1>} />
        </>
      
        )}
        </Routes>
    </div>
  );
}

export default App;
