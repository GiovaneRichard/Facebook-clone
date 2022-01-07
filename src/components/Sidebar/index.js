import React, { useReducer } from "react";
import './styles.css';
import SidebarRow from "../SidebarRow";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import StorefrontIcon from '@material-ui/icons/Storefront';

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
            {/* <SidebarRow Icon={} title='Watch' />
            <SidebarRow Icon={} title='Grupos' />
            <SidebarRow Icon={} title='Lembranças' />
            <SidebarRow Icon={} title='Salvos' /> */}
        </div>
    );
}