import React from 'react';
import './Widgets.css';
import { Info, InfoRounded } from '@mui/icons-material';

function Widgets() {

  const newsArticles = (heading,subtitles) => (
    
    <div className="widgets__newsArticles">
      <div className="widgets__newsArticlesLeft">
        <InfoRounded/>
      </div>
      <div className="widgets__newsArticlesRight">
        <h3>{heading}</h3>
        <p>{subtitles}</p>
      </div>
    </div>
  );  

  return (
    <div className='widgets'>
      <div className="widgets__header">
          <h2>Linkdln News</h2>
          <Info/>
      </div>
      {newsArticles("Jeet Completed the build","Top Achi 212121 readers")}
      {newsArticles("Jeet Completed the build","Top Achi 212121 readers")}
      {newsArticles("Jeet Completed the build","Top Achi 212121 readers")}
      {newsArticles("Jeet Completed the build","Top Achi 212121 readers")}
    </div>
  )
}

export default Widgets
