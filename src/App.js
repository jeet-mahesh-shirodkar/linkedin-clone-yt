import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
//import { userSelector } from '@reduxjs/toolkit';
import { selectUser, login, logout } from './features/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect( ()=>{
    auth.onAuthStateChanged((userAuth) =>{
      if(userAuth){
        //login
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoURL:userAuth.photoURL
        }))
      }
      else{
        //logout
        dispatch(logout());
      }
    })
  },[])

  return (
    <div className="App">
        {/*Header*/}
          <Header/>
        {/**Login */
        console.log(user)}
        { !user ? <Login/> : ( 
        <div className="app__body">
          <Sidebar/>
          <Feed/>
          <Widgets/>
        </div>
        )}
    </div>
  );
}

export default App;
