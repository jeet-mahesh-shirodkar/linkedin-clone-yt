import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {

  const recentItems = (topics) => {
        return(
        <div className="sidebar__recentItems">
            <span className="sidebar__hash">#</span>
            <p className="sidebar__topics">{topics}</p>
        </div>
        )
  } 

  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img 
                src='https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-nature-forest-sun-ecology-image_2256183.jpg'
                alt=''/>
            <Avatar className='sidebar__avatar' src=''/>
            <h2>Jeet</h2>
            <h4>jeet@gmail.com</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Profile Viewed</p>
                <p className="sidebar__statNumber">55</p>
            </div>
            <div className="sidebar__stat">
                <p>Post Viewed</p>
                <p className="sidebar__statNumber">65</p>
            </div>
        </div>
        <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItems('reactjs')}
                {recentItems('programming')}
                {recentItems('design')}
                {recentItems('softwareEngineering')}
        </div>
    </div>
  )
}

export default Sidebar;