import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
 
  const [name,setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) =>{
        e.preventDefault();
        console.log(name)
        auth.signInWithEmailAndPassword(email,password).then(
          (userAuth) =>{
            dispatch(login({
              displayName:userAuth.name,
              photoURL:userAuth.photoURL,
              email:userAuth.user.email,
              uid:userAuth.user.uid
            }))
          }
        )
  }
  const register = () =>{

      console.log(name+"_____"+email+"__________"+password+"______________" +'register__button');

      if(!name){
        alert('Please enter full name');
      }

      //Firebase Auth
      auth.createUserWithEmailAndPassword(email,password)
      .then((userAuth)=>{ userAuth.user.updateProfile({
        displayName:name,
        photoURL:photoURL
      }).then(()=>
        //console.log(userAuth)
        {dispatch(login({
          email:userAuth.user.email,
          uid:userAuth.user.uid,
          displayName:name,
          photoURL:photoURL
        }))}
      )
    })
  }

  const registerr = () =>{ dispatch(login({name:name}))}
  
  return (
    <div className='login'>
      <img src ={'https://upload.wikimedia.org/wikipedia/commons/1/19/LinkedIn_logo.svg'} alt='imgLogo'/>
      <form>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name if registered' type='text'/>
        <input value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} placeholder='Photo Profile Url(Optional)' type='text'/>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email'/>
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type='password'/>
        <button className='' type='submit' onClick={(e)=> loginToApp(e)}>Sign In</button>
      </form>
      <p>Not a Member?
        <span className='login__register' onClick={register}>Register Now!
        </span>
      </p>
    </div>
  )
}

export default Login