import { Avatar } from "@material-ui/core";
import React from "react";
import './styles.css';



export default ({ image, profileSrc, title }) => {
    return (
        <div style={{backgroundImage: `url(${image})`}} className="story">
            <Avatar  src={profileSrc} className="story_avatar" />
            <h4>{title}</h4>
        </div>
    );
}