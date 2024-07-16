import React, { useEffect } from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';
import { auth } from './firebase';

function Header({avatorLink}) {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () =>{
        dispatch(logout());
        auth.signOut();
  }

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
    <div className='header'>
        <div className="header__left">
            <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG8.png" alt='linkedln'/>
        </div>
       <div className="header__search">
            <SearchIcon/>
            <input placeholder='Search' type='text'/>
       </div>
        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='Network'/>
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
            <HeaderOption Icon={ChatIcon} title='Messages'/>
            <HeaderOption Icon={NotificationsIcon} title='Notification'/>
            <HeaderOption avator={true}
                          avatorLink={avatorLink}
                          title='me'
                          onClick={logoutOfApp}
                          />
        </div>
    </div>
  )
}

export default Header;