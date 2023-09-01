import React from 'react'
import './LoginScreen.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../Slices/userSlice';
import SignInScreen from './SignInScreen';
function LoginScreen() {
  const [signIn, setSignIn] = useState(true);
  const navigate = useNavigate();
  const user = useSelector(selectUser);
 if(user){
  navigate('/home');
 }
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
            <h2>Watch anywhere. Cancel at any time</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership</h3>
            <div className="loginScreen__input">
              <form action="">
                <input type="email" placeholder='Enter Email' />
                <button className="loginScreen__getStarted">GET STARTED</button>
              </form>
            </div>
            </>
          )}
         
      </div>
    </div>
  )
}

export default LoginScreen
