import React from 'react'
import './PopularArtist.css'
import ArtistCard from '../artistCard/ArtistCard'


function PopularArtist({setCurrentPage, setCurrentEle}){
    return (
        <div className="popularArtistMaincontainer  trendingSectionMainContainer">
            <span>
            Popular Artists
            </span>
            
            <ArtistCard  setCurrentPage={setCurrentPage} setCurrentEle={setCurrentEle}/>
        </div>
    )
}
export default PopularArtist 