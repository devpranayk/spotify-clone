import React from'react'
import './BTrending.css'
import BTrendingCard from'../bTrendingCard/BTrendingCard'
function BTrending({setCurrentPage, setCurrentEle}){
    return(
        <div className="BtrendingSectionMainContainer">
            <span>
            Tollywood Pearls
            </span>
            
            <BTrendingCard  setCurrentPage={setCurrentPage} setCurrentEle={setCurrentEle} />
            
        </div>
    )
}
export default BTrending