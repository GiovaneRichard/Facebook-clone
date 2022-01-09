import React, { useReducer } from "react";
import './styles.css';
import SidebarRow from "../SidebarRow";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import { IconButton } from "@material-ui/core";
import StorefrontIcon from '@material-ui/icons/Storefront';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import RestoreIcon from '@material-ui/icons/Restore';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default () => {

    let photoUrl = 'https://yt3.ggpht.com/yti/APfAmoHWDJUfU0O2HwRJ1UE5A6-aFnNEdPvi4Fjc8h47qQ=s88-c-k-c0x00ffffff-no-rj-mo';

    return(
        <div className="sidebar">
            <SidebarRow src={photoUrl} title="Giovane Richard" />
            <SidebarRow 
                Icon={LocalHospitalIcon}
                title="COVID-19 Centro de Informações"
            />

            <SidebarRow Icon={PeopleIcon} title="Amigos" />
            <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
            <SidebarRow Icon={OndemandVideoIcon} title='Watch' />
            <SidebarRow Icon={SupervisedUserCircleIcon} title='Grupos' />
            <SidebarRow Icon={RestoreIcon} title='Lembranças' />
            <SidebarRow Icon={BookmarkIcon} title='Salvos' />
            <IconButton className="sidebar--buttom">
                <ExpandMoreIcon />
            </IconButton>
        </div>
    );
}