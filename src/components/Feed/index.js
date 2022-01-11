import React from "react";
import './styles.css'
import StoryReel from "../StoryReel";
import MessageSender from "../MessageSender";
import Post from "../Post";

export default() => {
    return(
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
                profilePic="https://yt3.ggpht.com/yti/APfAmoHWDJUfU0O2HwRJ1UE5A6-aFnNEdPvi4Fjc8h47qQ=s88-c-k-c0x00ffffff-no-rj-mo"
                message="Wow"
                timestamp="Este é o timestamp"
                username="lord"
                image="https://conteudo.imguol.com.br/c/entretenimento/dc/2020/05/07/video-games-the-movie-1588857989745_v2_450x337.jpg"
            />
            <Post 
                profilePic="https://yt3.ggpht.com/yti/APfAmoHWDJUfU0O2HwRJ1UE5A6-aFnNEdPvi4Fjc8h47qQ=s88-c-k-c0x00ffffff-no-rj-mo"
                message="Wow"
                timestamp="Este é o timestamp"
                username="lord"
                image="https://www.mundojs.com.br/wp-content/uploads/2019/07/reactnative.jpg"
            />
            <Post 
                profilePic="https://yt3.ggpht.com/yti/APfAmoHWDJUfU0O2HwRJ1UE5A6-aFnNEdPvi4Fjc8h47qQ=s88-c-k-c0x00ffffff-no-rj-mo"
                message="Wow"
                timestamp="Este é o timestamp"
                username="lord"
                image="https://cdn2.unrealengine.com/Diesel%2Fblog%2Faccount-security-at-epic-games%2FEGS_Social_Update_News-2560x1440-128a69890d92407b815582c1deba54450e5645f9.jpg"
            />
        </div>
    );
}