import React from "react";
import Story from "../Story";
import './styles.css'


export default () => {
    return(
        <div className="storyReel">
            <Story 
                image ="http://criatilha.com.br/wp-content/uploads/2017/10/feed-organizado-bennedeto-e1508955760929.png"
                profileSrc="https://i.pinimg.com/736x/93/7d/f2/937df27e5b279abcd5272fc36f93e5c4.jpg"
                title="Michael Fassbender"
            />
            <Story 
                image="https://i.pinimg.com/originals/0e/ff/96/0eff96b1d805228c41f84be9d41a35b1.jpg"
                profileSrc="https://www.hypeness.com.br/1/2017/08/20140405124140_9220.jpg"
                title="Jhon Lenon"
            />
            <Story 
                image="https://francialemelo.com.br/wp-content/uploads/2020/05/WhatsApp-Image-2020-05-11-at-20.54.27.jpeg"
                profileSrc="https://img.r7.com/images/rosto-humano-irreal-inteligencia-artificial-19022019142837145"
                title="Gloria Ashely"
            />
            <Story 
                image="https://i.pinimg.com/736x/93/7d/f2/937df27e5b279abcd5272fc36f93e5c4.jpg"
                profileSrc="https://static.imasters.com.br/wp-content/uploads/2019/02/20112325/person05-300x300.jpg"
                title="Floyd brok"
            />
            <Story 
                image="https://francialemelo.com.br/wp-content/uploads/2020/05/WhatsApp-Image-2020-05-11-at-20.54.27.jpeg"
                profileSrc="https://img.r7.com/images/rosto-humano-irreal-inteligencia-artificial-19022019142837145"
                title="Gloria Ashely"
            />

        </div>
    );
}