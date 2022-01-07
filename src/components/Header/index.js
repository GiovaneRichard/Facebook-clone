import React from "react";
import './styles.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default () => {
    return(
        <div className="header">
            <div className="header--left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="logo_facebook" />
            </div>
                <div className="header--input">
                    <SearchIcon />
                    <input type="text" placeholder="Pesquisar no Facebook" />
                </div>

            <div className="header--center">
                <div className="header--option header--option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header--option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header--option">
                    <SubscriptionsIcon fontSize="large" />
                </div>
                <div className="header--option">
                    <StorefrontIcon fontSize="large" />
                </div>
                <div className="header--option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>

            <div className="header--right">
                <div className="header--info">
                    <Avatar src="https://yt3.ggpht.com/yti/APfAmoHWDJUfU0O2HwRJ1UE5A6-aFnNEdPvi4Fjc8h47qQ=s88-c-k-c0x00ffffff-no-rj-mo" alt="Avatar" />
                    <h4>Giovane Richard</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    );
}