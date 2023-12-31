import React, { useRef } from 'react'
import { auth , createUserWithEmailAndPassword, signInWithEmailAndPassword} from '../auth/firebase';
import { useNavigate } from 'react-router-dom';
import './SignInScreen.css'
function SignIn() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
      e.preventDefault();
   
      createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
      ).then((authUser) => {
        console.log(authUser);
        console.log('navigating the user')
       navigate('/');
      }).catch((error) =>{
          alert(error.message); 
      })
  }
  const signIn = (e) => {
     e.preventDefault();
     signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).then((authUser) => {
      console.log(authUser);
      navigate('/home');
     }).catch((error) => { 
      console.log(error.message);
     });
  }
  return (
    <div className='SignupScreen'>
      <form  >
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='Email' />
        <input ref={passwordRef} type="password" placeholder='Password' />
        <button type='submit' onClick={signIn}>Sign In</button>
       
      </form>

      <h4>
          <span className='signupScreen__gray'>New to Netflix?</span>
          <span className='signupScreen__link' onClick={register}>Sign Up now</span>
      </h4>
    </div>
  )
}

export default SignIn
