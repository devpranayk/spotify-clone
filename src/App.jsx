// import { useState } from 'react'
// import './App.css'
// import Navbar from './components/navbar/Navbar'
// import Sidebar from './components/sidebar/Sidebar'
// import MainSection from './components/mainSection/MainSection'
// import Footer from'./components/footer/Footer'

// function App() {

//   return (
//     <>
//       <div className="MainContainer">
//           <Navbar/>
//           <div className="MainSectionContentContainer">
//             <Sidebar/>
//             <MainSection/>
//           </div>
//           <Footer/>
//       </div>
      
//     </>
//   )
// }

// export default App


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import MainSection from './components/mainSection/MainSection'
import Footer from'./components/footer/Footer'
import Login from './pages/login/Login'       // import login page
import Signup from './pages/signup/Signup'    // import signup page

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for login page */}
        <Route 
          path="/login" 
          element={<Login />} 
        />

        {/* Route for signup page */}
        <Route 
          path="/signup" 
          element={<Signup />} 
        />

        {/* Default route for your main app layout */}
        <Route 
          path="/*" 
          element={
            <div className="MainContainer">
              <Navbar />
              <div className="MainSectionContentContainer">
                <Sidebar />
                <MainSection />
              </div>
              <Footer />
            </div>
          } 
        />
      </Routes>
    </Router>
  )
}

export default App
