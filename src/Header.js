import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG8.png" alt='linkedln'/>
        </div>
       <div className="header__search">
            <SearchIcon/>
            <input type='text'/>
       </div>
        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='Network'/>
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
            <HeaderOption Icon={ChatIcon} title='Messages'/>
            <HeaderOption Icon={NotificationsIcon} title='Notification'/>
            <HeaderOption avator={'https://lh3.googleusercontent.com/a/ACg8ocJgByU-Xzi1c4A_IkdLAkpxysSSXjRwC2HzXXLVUyMMEzjdSxl1=s360-c-no'} title='me'/>
        </div>
    </div>
  )
}

export default Header;