import { Avatar } from '@material-ui/core';
import React from 'react';
import './post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ReplyIcon from '@material-ui/icons/Reply';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Post({profilePic, image, username, timestamp, message}) {
    return(
        <div className='post'>
            <div className='post--top'>
                <Avatar src={profilePic} className='post--avatar' />
                <div className='post--topinfo'>
                    <h3>{username}</h3>
                    <p>Timestamp...</p>
                </div>
            </div>

            <div className='post--bottom'>
                <p>{message}</p>
            </div>
            <div className='post--image'>
                <img src={image} alt='' />
            </div>
            <div className='post--options'>
                <div className='post-option'>
                    <ThumbUpIcon />
                    <p>Curtir</p>
                </div>
                <div className='post-option'>
                    <ChatBubbleOutlineIcon />
                    <p>Comentar</p>
                </div>
                <div className='post-option'>
                    <ReplyIcon />
                    <p>Compartilhar</p>
                </div>
                <div className='post-option'>
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </div>
            </div>
        </div>
    );
}

export default Post;