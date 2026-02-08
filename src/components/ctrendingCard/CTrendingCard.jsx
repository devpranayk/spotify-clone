import React from 'react'
import './CTrendingCard.css'
import {CtrendingCardData} from '../../config4/config4'
function CTrendingCard({setCurrentPage, setCurrentEle}){
    
    return(
        <>
        <div className="CtrendingCardMainContainer">
        {
            CtrendingCardData.map((ele,id)=>{
                
                return(
                    <>

                    <div key={id} onClick={()=>{


                        setCurrentPage("CmusicSpecificPage") 
                        setCurrentEle(ele)

                    }} className="CcardContainer">


                        <img src={ele.imgSrc} alt="img"/>

                        <div className="CcardTextContainer">
                            <h2>{ele.heading}</h2>
                            <p>{ele.subHeading}</p>
                        </div>

                        <span id="playButtonn"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-9812-icon e-9812-baseline" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg></span>



                    </div>
                    </>
                )
            })
        }
        </div>
        </>
        
    )
}
export default CTrendingCard