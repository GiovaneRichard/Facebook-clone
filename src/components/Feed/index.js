import React from "react";
import './styles.css'
import StoryReel from "../StoryReel";
import MessageSender from "../MessageSender";

export default() => {
    return(
        <div className="feed">
            <StoryReel />
            <MessageSender />

        </div>
    );
}