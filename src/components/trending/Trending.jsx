import React from'react'
import './Trending.css'
import TrendingCard from '../trendingCard/TrendingCard'

function Trending({setCurrentPage, setCurrentEle}){
    return(
        
        <div className="trendingSectionMainContainer">
            <span>
            Trending Songs
            </span>
            
            <TrendingCard  setCurrentPage={setCurrentPage} setCurrentEle={setCurrentEle} />
            
        </div>
    )
}
export default Trending