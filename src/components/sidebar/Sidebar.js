import React from 'react';
import './Sidebar.css';
import SidebarOption from '../sidebarOption/SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../../contexts/DataLayer'


const Sidebar = () => {
    const [{ playlists }, dispatch] = useDataLayerValue();
    console.log("playlists : ",playlists);
    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="Spotify Logo"
            />
            <SidebarOption Icon={HomeIcon} optionName="Home" />
            <SidebarOption Icon={SearchIcon} optionName="Search" />
            <SidebarOption Icon={LibraryIcon} optionName="Your Library" />

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {
                playlists?.items?.map(playlist => (
                    <SidebarOption key={playlist.id} optionName={playlist.name} />
                ))
            }
        </div>
    )
}

export default Sidebar
