import React, {useState} from 'react'
import './MainSection.css'
import Trending from '../trending/Trending'
import PopularArtist from '../popularArtist/PopularArtist'
import BTrending from'../btrending/BTrending'
import CTrending from'../ctrending/CTrending'
import SpecificMusicPage from '../../pages/specificMusicPage/SpecificMusicPage'
import SpecificArtistPage from '../../pages/specificArtistPage/SpecificArtistPage'
import BSpecificMusicPage from '../../pages/BSpecificMusicPage/BSpecificMusicPage'
import CSpecificMusicPage from '../../pages/CSpecificMusicPage/CSpecificMusicPage'





function MainSection(){

    const [currentPage, setCurrentPage] = useState("home")
    const [currentEle,setCurrentEle]=useState(null)

    return(

        <main class="mainSection">
            {console.log(currentPage)}

            {
                currentPage === "home" ? <>

                <Trending setCurrentEle={setCurrentEle} setCurrentPage={setCurrentPage} />
                <PopularArtist setCurrentEle={setCurrentEle} setCurrentPage={setCurrentPage} />
                <BTrending setCurrentEle={setCurrentEle} setCurrentPage={setCurrentPage} />
                <CTrending setCurrentEle={setCurrentEle} setCurrentPage={setCurrentPage} /> </>
                :currentPage==="musicSpecificPage" ? <> <SpecificMusicPage currentEle={currentEle}/>  </>
                :currentPage==="artistSpecificPage" ? <> <SpecificArtistPage currentEle={currentEle}/> </>
                :currentPage==="BmusicSpecificPage" ? <> <BSpecificMusicPage currentEle={currentEle}/> </>
                :currentPage==="CmusicSpecificPage" ? <> <CSpecificMusicPage currentEle={currentEle}/> </> :null

            }
            
        </main>
        
    )

}

export default MainSection