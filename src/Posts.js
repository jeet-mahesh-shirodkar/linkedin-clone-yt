import React from 'react';
import './Posts.css';
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Post({name, description, messages, photoURL}) {
  return (
    <div className="post">
        <div className="post__header">
            <Avatar/>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
                <p>{messages}</p>
        </div>
        <div className="post__buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon} title={'Like'} color={'gray'}/>
            <InputOption Icon={CommentOutlinedIcon} title={'Comment'} color={'gray'}/>
            <InputOption Icon={ShareOutlinedIcon} title={'Share'} color={'gray'}/>
            <InputOption Icon={SendOutlinedIcon} title={'Send'} color={'gray'}/>
        </div>
    </div>
  )
}

export default Post
