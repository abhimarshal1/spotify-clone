import React from 'react'
import './Banner.css'

const Banner = ({ discover_weekly }) => {
    console.log(discover_weekly)
    return (
        <div className="body__info">
            <img src={discover_weekly?.images[0]?.url} alt="" />
            <div className="body__infoText">
                <strong>PLAYLIST</strong>
                <h2>{discover_weekly?.name}</h2>
                <p>{discover_weekly?.description}</p>
            </div>
        </div>
    )
}

export default Banner
