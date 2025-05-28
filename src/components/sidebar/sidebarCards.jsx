import React from'react'
import './Sidebar.css'

function SidebarCards({heading,subheading,buttontext}){
    return(
        <div className="sidebarMiddleCards">
            <h1>{heading}</h1>
            <p>{subheading}</p>
            <button>{buttontext}</button>
        </div>
    )
}
export default SidebarCards