import React from'react'
import './Footer.css'

function Footer (){
    return(
        <>
            <div className="FooterMainContainer">


                <div className="footerTopContainer">


                    <div className="footerTop1">
                            <h3 className="FT11"> Company </h3>
                            <p className="FT12"> About </p>
                            <p className="FT13"> Jobs </p>
                            <p className="FT14"> Fore the Record </p>
                    </div>



                    <div className="footerTop2">
                            <h3 className="FT11"> Communities </h3>
                            <p className="FT12"> For Artists </p>
                            <p className="FT13"> Developers </p>
                            <p className="FT14"> Advertising </p>
                            <p className="FT14"> Investors </p>
                            <p className="FT14"> Vendors </p>


                    </div>



                    <div className="footerTop3">
                            <h3 className="FT11"> Useful Links </h3>
                            <p className="FT12"> Support </p>
                            <p className="FT13"> Free Mobile App </p>
                    </div>




                    <div className="footerTop4">
                            <h3 className="FT11"> Spotify Plans </h3>
                            <p className="FT12"> Premium Individual </p>
                            <p className="FT13"> Premium Duo </p>
                            <p className="FT14"> Premium Family </p>
                            <p className="FT14"> Premium Student </p>
                            <p className="FT14"> Spotify Free </p>
                    </div>



                    <div className="footerTop5">
                        <a href="https://www.instagram.com/spotify" target="_blank"><i class="fab fa-instagram icon footerIcon"></i></a>
                        <a href="https://x.com/spotify" target="_blank"><i class="fab fa-x-twitter icon footerIcon"></i></a>
                        <a href="https://www.facebook.com/Spotify" target="_blank"><i class="fab fa-facebook-f icon footerIcon"></i></a>                    </div>
                </div>


                <div className="footerBottomContainer">
                       <hr></hr>
                       <div className="footerbottomSection">
                            <div className="footerBottomLinks">
                                    <p> Legal</p>
                                    <p>Safety & Privacy Center</p>
                                    <p> Privacy Policy </p>
                                    <p> Cookies </p>
                                    <p> About Ads </p>
                                    <p> Accessibility</p>
                            </div>

                            <h3>@SpotifyClone.DevPranay.MERN</h3>
                       </div>

                </div>

            </div>


        </>
        
    )
}
export default Footer