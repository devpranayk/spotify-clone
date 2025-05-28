import React from 'react'
import './BSpecificMusicPage.css'

function BSpecificMusicPage({currentEle}){
    return(
        <>
            <div className="BSMPMainContainer">
                <div className="BSMPImg">
                    <img src={currentEle.imgSrc} alt={currentEle.heading}/>
                </div>
                <div ClassName="BSMPMatter">
                    <h1 className="BSMPHead">{currentEle.heading}</h1>
                    <p  className="BSMPSubhead">{currentEle.subHeading}</p>
                </div>
            </div>
            <div className="BSMPMusicContainer">
                <div className="BSMPSymbols">
                    <div className="BSMPSymbols1" >
                       <div className="heart"> <i class="fas fa-heart"></i> <span class="tooltip">Add to Liked Songs</span> </div>
                       <div className="lyrics"> <i class="fas fa-microphone-alt"></i> <span class="tooltip">lyrics</span> </div>
                       <div className="Playlist"> <i class="fas fa-bookmark"></i> <span class="tooltip">Add to Playlist</span> </div>
                        
                    </div>
                    <div className="BSMPSymbols2">
                        <div className="Queue">  <i class="fas fa-list-ul"></i> <span class="tooltip">Queue</span> </div>
                        <div className="Shuffle">  <i class="fas fa-random"></i> <span class="tooltip">Shuffle</span> </div>
                        <div className="Repeat">  <i class="fas fa-redo"></i> <span class="tooltip">Repeat</span> </div>
                        <div className="Device">  <i class="fas fa-tv"></i> <span class="tooltip">Connect to a device</span> </div>
                    </div>
                </div>
                <div className="BSMPAudio" >
                    <audio className="BSMPAudioCntrols" type="audio/mp3" src={currentEle.audio} controls></audio>
                </div>
            </div>
        </>
    )
}
export default BSpecificMusicPage