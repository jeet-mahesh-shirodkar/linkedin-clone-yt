import React from 'react';
import "./HeaderOption.css";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';



function HeaderOption({avator,title,Icon,onClick,avatorLink}) {

  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className='headerOption'>
        {Icon && <Icon className = "headerOption__icon"/>}
        {avator && <Avatar className='headerOption__icon' src={'J'}></Avatar>}
        <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption;