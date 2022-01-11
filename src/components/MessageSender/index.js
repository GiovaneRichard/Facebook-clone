import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import './styles.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

export default () => {

    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = e => {
        e.preventDefaut();

        // some clever db stuff

        setInput("");
        setImageUrl("");
    }

    return(
        <div className="messageSender">
            <div className="messageSender--top">
                <Avatar src="https://yt3.ggpht.com/yti/APfAmoHWDJUfU0O2HwRJ1UE5A6-aFnNEdPvi4Fjc8h47qQ=s88-c-k-c0x00ffffff-no-rj-mo" />
                <form>
                    <input 
                        value={input} 
                        onChange={(e) => setInput(e.target.value) }
                        placeholder="No que você está pensando, Giovane?"  
                        className="messageSender--input"
                    />
                    <input 
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="Image URL (Opcional)" />
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="messageSender--bottom">
                <div className="messageSender--options">
                    <VideocamIcon style={{color: "red"}} />
                    <h3>Vídeo ao vivo</h3>
                </div> 
                <div className="messageSender--options">
                    <PhotoLibraryIcon style={{color: "green"}} />
                    <h3>Foto/Vídeo</h3>
                </div> 
                <div className="messageSender--options">
                    <InsertEmoticonIcon style={{color: "orange"}} />
                    <h3>Sentimentos/atividade</h3>
                </div>  
            </div>
        </div>
    );
}