import React from 'react'
import './Sidebar.css'
import SidebarCards from './sidebarCards'

function Sidebar(){
    const text=["Legal", "Security and privacy Center", "Privacy Policy", "Cookies", "About Ads","Accessibility"]
    return(
        <div class="sidebarMainContainer">
            <div className="sideBarTopSection">
                <h1>Your Library</h1>
                <button ><h1> <p>+</p> Create </h1></button>
            </div>
            <div className="sideBarMiddleSection">
                <SidebarCards heading="Create your first Playlist" subheading="keep your favorite songs at one place" buttontext="Create Playlist"/>
                <SidebarCards heading="Find some Podcasts to follow" subheading="we'll keep you updated on new episodes" buttontext="Browse now"/>
            </div>
            <div className="sideBarBottomSection">
                <div className="sideBarBottomSectionTopContainer">
                    {
                        text.map((ele)=>{
                            return(
                                <p>{ele}</p>
                            )
                        })
                    }
                </div>
                <div className="sideBarBottomSectioBottomContainer">
                    <button>English</button>
                </div>
            </div>
        </div>
    )
}
export default Sidebar