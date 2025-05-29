// import React from 'react'
// import './Navbar.css'

// function Navbar(){
//     return(
//         <nav>
//             <div className="navLeftPart">
//                 <div className="SpotifyLogo">
//                     <i class="fab fa-spotify"></i>
//                 </div>
//                 <div className="navdiv2">
//                 <button className="homeButton" type="submit"> <i id="homeButton"class="fas fa-home"></i> </button> 
//                 <div className="search"> 
//                         <div className="searchBar"> 
//                             <input type="text" className="searchBox" placeholder='What do you want to play ?'></input>
//                             <i class="fas fa-search  searchIcon"></i>
//                         </div>
//                 </div>
//                 </div>
//             </div>

//             <div className="navRightPart">
//                 <div className="installDiv">
                    
//                     <p> <i class="fas fa-download"> </i> Install App</p>
//                 </div>
//                 <div className="signup">
//                     <p>Sign up</p>
//                 </div>
//                 <div className="login">
//                     <button>Log in</button>
//                 </div>
//             </div>
//         </nav>
//     )
// }
// export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <div className="navLeftPart">
        <div className="SpotifyLogo">
          <i className="fab fa-spotify"></i>
        </div>
        <div className="navdiv2">
          <button className="homeButton" type="submit">
            <i id="homeButton" className="fas fa-home"></i>
          </button>
          <div className="search">
            <div className="searchBar">
              <input
                type="text"
                className="searchBox"
                placeholder="What do you want to play ?"
              />
              <i className="fas fa-search searchIcon"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="navRightPart">
        <div className="installDiv">
          <p>
            <i className="fas fa-download"></i> Install App
          </p>
        </div>

        {/* Use Link for navigation */}
        <div className="signup">
          <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
            <p>Sign up</p>
          </Link>
        </div>

        <div className="login">
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <button>Log in</button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
