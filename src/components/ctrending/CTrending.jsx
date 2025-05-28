import React from'react'
import './CTrending.css'
import CTrendingCard from'../cTrendingCard/CTrendingCard'
function CTrending({setCurrentPage, setCurrentEle}){
    return(
        <div className="CtrendingSectionMainContainer">
            <span>
            India's Best
            </span>
            
            <CTrendingCard  setCurrentPage={setCurrentPage} setCurrentEle={setCurrentEle} />
            
        </div>
    )
}
export default CTrending