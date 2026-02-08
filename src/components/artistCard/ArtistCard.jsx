import React from'react'
import './ArtistCard.css'
import {artistCardData} from '../../config2/config2'


function ArtistCard ({setCurrentPage,setCurrentEle}){
   return(
           <>
           <div className="artistCardMainContainer">
           {
               artistCardData.map((ele,id)=>{
                
                   
                   return(
                       <>
                       <div key={id} onClick={()=>{
                        setCurrentPage("artistSpecificPage")
                        setCurrentEle(ele)
                       }} className="AcardContainer ">


                           <img src={ele.imgSrc} alt="img"/>
                           <div className=" AcardTextContainer">
                               <h2>{ele.heading}</h2>


                               <p>{ele.subHeading}</p>
                           </div>
                           <span id="playButton"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-9812-icon e-9812-baseline" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg></span>



                       </div>

                       </>
                   )
               })
           }
           </div>
           </>
           
       )
}
export default ArtistCard