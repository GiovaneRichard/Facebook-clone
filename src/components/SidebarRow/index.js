import { Avatar } from "@material-ui/core";
import React from "react";
import './styles.css';


export default ({src, Icon, title}) => {
    return(
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}

            <p>{title}</p>
        </div>

    );
}