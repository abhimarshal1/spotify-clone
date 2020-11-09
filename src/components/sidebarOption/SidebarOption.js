import React from 'react'
import './SidebarOption.css'

const SidebarOption = ({ optionName, Icon }) => {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon"/>}
            {Icon ? <h4>{optionName}</h4> : <p>{optionName}</p>}
        </div>
    )
}

export default SidebarOption
