import React, { useEffect } from 'react'
import './LoginScreen.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../Slices/userSlice';
import SignInScreen from './SignInScreen';
function LoginScreen() {
  console.log('login screen');
  const [signIn, setSignIn] = useState(false);
  const navigate = useNavigate();
  const user = useSelector(selectUser);
   useEffect(() => {
    if(user){
      navigate('/home');
     }
    }, [user, navigate]);
  return (
    <div className='loginScreen'>
      <div className="loginScreen__background">
        <img className='loginScreen__logo' loading='lazy'  onClick={()=>{
          setSignIn(false);
         }} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix Logo" itemprop="contentUrl" />
         <button className="loginScreen__button" onClick={()=>{
          setSignIn(true);
         }}>
            SIGN IN
         </button>

          <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignInScreen /> ):(
            <><h1>Unlimited files, TV programmes and more</h1>
            <h2> Join Today. Cancel any time</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership</h3>
            <div className="loginScreen__input">
             <form >
             <input type="email" placeholder='Enter Email' />
                <button className="loginScreen__getStarted" onClick={()=>{
          setSignIn(true);
         }}>GET STARTED</button>
             </form>
               
              
            </div>
            </>
          )}
         
      </div>
    </div>
  )
}

export default LoginScreen
