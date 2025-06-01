import React from 'react'
import './SpecificArtistPage.css'
import IconButton from "../../components/IconButton";


function SpecificArtistPage({currentEle}){
    return(
        <>
            <div className="SMPMainContainer">
                <div className="SMPImg">
                    <img src={currentEle.imgSrc} alt={currentEle.heading}/>
                </div>
                <div ClassName="SMPMatter">
                    <h1 className="SMPHead">{currentEle.heading}</h1>
                    <p  className="SMPSubhead">{currentEle.subHeading}</p>
                </div>
            </div>
            <div className="SMPMusicContainer">
                <div className="SMPSymbols">
                    <div className="SMPSymbols1" >
                       {/* <div className="heart"> <i class="fas fa-heart"></i> <span class="tooltip">Add to Liked Songs</span> </div> */}
                        <IconButton iconClass="fas fa-heart" label="Liked Songs" tooltip="Add to Liked Songs" />
                       {/* <div className="lyrics"> <i class="fas fa-microphone-alt"></i> <span class="tooltip">lyrics</span> </div> */}
                        <IconButton iconClass="fas fa-microphone-alt" label="Lyrics" tooltip="Lyrics" />
                       {/* <div className="Playlist"> <i class="fas fa-bookmark"></i> <span class="tooltip">Add to Playlist</span> </div> */}
                        <IconButton iconClass="fas fa-bookmark" label="Playlist" tooltip="Add to Playlist" />

                    </div>
                    <div className="SMPSymbols2">
                        {/* <div className="Queue">  <i class="fas fa-list-ul"></i> <span class="tooltip">Queue</span> </div> */}
                        <IconButton iconClass="fas fa-list-ul" label="Queue" tooltip="Queue" />
                        {/* <div className="Shuffle">  <i class="fas fa-random"></i> <span class="tooltip">Shuffle</span> </div> */}
                        <IconButton iconClass="fas fa-random" label="Shuffle" tooltip="Shuffle" />
                        {/* <div className="Repeat">  <i class="fas fa-redo"></i> <span class="tooltip">Repeat</span> </div> */}
                        <IconButton iconClass="fas fa-redo" label="Repeat" tooltip="Repeat" />
                        {/* <div className="Device">  <i class="fas fa-tv"></i> <span class="tooltip">Connect to a device</span> </div> */}
                        <IconButton iconClass="fas fa-tv" label="Device" tooltip="Connect to a device" />
                    </div>
                </div>
                <div className="SMPAudio" >
                        <h3>Currently Unavailable</h3>
                </div>
            </div>
        </>
    )
}
export default SpecificArtistPage