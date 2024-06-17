import React from 'react';
import "./HeaderOption.css";
import { Avatar } from '@mui/material';

function HeaderOption({avator,title,Icon}) {
  return (
    <div className='headerOption'>
        {Icon && <Icon className = "headerOption__icon"/>}
        {avator && <Avatar className='headerOption__icon' src={avator}/>}
        <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption;