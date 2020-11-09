import React from 'react'
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPreviousOutlined'
import SkipNextIcon from '@material-ui/icons/SkipNextOutlined'
import ShuffleIcon from '@material-ui/icons/ShuffleOutlined'
import RepeatIcon from '@material-ui/icons/RepeatOutlined'
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlayOutlined';
import VolumeDownIcon from '@material-ui/icons/VolumeDownOutlined';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <img src="https://images-na.ssl-images-amazon.com/images/I/71MvK4UWskL._SX355_.jpg" alt="" className="footer__albumLogo" />
                <div className="footer__songInfo">
                    <h4>Handwritten</h4>
                    <p>Shawn Mendis</p>
                </div>

            </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
