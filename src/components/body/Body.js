import React from 'react'
import './Body.css'
import Header from '../header/Header'
import { useDataLayerValue } from '../../contexts/DataLayer'
import Banner from '../banner/Banner'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilledWhiteSharp'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SongRow  from '../songRow/SongRow'

const Body = ({ spotify }) => {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();
    return (
        <div className="body">
            <Header spotify={spotify} />
            <Banner discover_weekly={discover_weekly} />

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle"/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon />
                </div>
                {discover_weekly?.tracks.items.map(item => (
                    <SongRow key={item.track.id} track={item.track}/>
                ))}
            </div>
        </div>


    )
}

export default Body
