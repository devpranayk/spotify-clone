// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { useAuth } from '../../context/AuthContext'
// import { toast, ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// function Signup() {
//   const [username, setUsername] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [loading, setLoading] = useState(false)
//   const navigate = useNavigate()
//   const { login } = useAuth()

//   const handleSignup = async (e) => {
//     e.preventDefault()
//     setLoading(true)
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/signup', {
//         username,
//         email,
//         password,
//       })

//       // Save user and token to context
//       login(res.data.user, res.data.token)

//       toast.success('Signup successful! Redirecting...')
//       navigate('/')
//     } catch (error) {
//       console.error(error)
//       const msg =
//         error.response?.data?.message || 'Signup failed. Try again.'
//       toast.error(msg)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Signup</h2>
//       <form onSubmit={handleSignup}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//           style={{ display: 'block', marginBottom: 10 }}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           style={{ display: 'block', marginBottom: 10 }}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           style={{ display: 'block', marginBottom: 10 }}
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? 'Signing up...' : 'Signup'}
//         </button>
//       </form>

//       {/* Toast container for notifications */}
//       <ToastContainer position="top-right" autoClose={2000} />
//     </div>
//   )
// }

// export default Signup
//                            decorative signup page
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../context/AuthContext'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../login/Login.css' // ✅ Apply same styling

// ✅ Decorative images
import spotifyLogo from '../../assets/images/spotifyLogo.png'
import headsetIcon from '../../assets/images/headset.png'
import musicIcon from '../../assets/images/music.png'

function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSignup = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', {
        username,
        email,
        password,
      })

      login(res.data.user, res.data.token)
      toast.success('Signup successful! Redirecting...')
      navigate('/')
    } catch (error) {
      console.error(error)
      const msg = error.response?.data?.message || 'Signup failed. Try again.'
      toast.error(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="LoginPage"> {/* ✅ Apply background + layout */}
      {/* ✅ Decorative images */}
      <img src={spotifyLogo} alt="Spotify" className="decor-logo-left" />
      <img src={headsetIcon} alt="Headset" className="decor-headset" />
      <img src={musicIcon} alt="Music" className="decor-music" />

      <div className="auth-container">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Signing up...' : 'Signup'}
          </button>
          <p className="dha">Already have an account? <a href="/Login"> login_to_Spotify</a></p>
        </form>
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </div>
  )
}

export default Signup
