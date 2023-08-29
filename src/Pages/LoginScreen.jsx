import React from 'react'
import './LoginScreen.css'
function LoginScreen() {
  return (
    <div className='loginScreen'>
      <div className="loginScreen__background">
        <img className='loginScreen__logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix Logo" itemprop="contentUrl" />
         <button className="loginScreen__button">
            Sign In
         </button>

          <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        <><h1>Unlimited files, TV programmes and more</h1>
        <h2>Watch anywhere. Cancel at any time</h2>
        <h3>Ready to watch? Enter your email to create or restart your membership</h3></>
         
      </div>
    </div>
  )
}

export default LoginScreen
