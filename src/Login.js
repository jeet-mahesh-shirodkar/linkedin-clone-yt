import React from 'react'
import './Login.css'

function Login() {
 
  const loginToApp = () =>{}
  const register = () =>{}
  
  return (
    <div className='login'>
      <img src ={'https://upload.wikimedia.org/wikipedia/commons/1/19/LinkedIn_logo.svg'} alt='imgLogo'/>
      <form>
        <input placeholder='Full Name if registered' type='text'/>
        <input placeholder='Photo Profile Url(Optional)' type='text'/>
        <input placeholder='Email' type='email'/>
        <input placeholder='Password' type='password'/>
        <button className='' type='submit' onClick={loginToApp}>login</button>
      </form>
      <p>Not a Member?
        <span className='login__register' onClick={register}>Register Now!
        </span>
      </p>
    </div>
  )
}

export default Login