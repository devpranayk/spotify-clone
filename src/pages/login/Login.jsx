// import React, { useState } from 'react';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await res.json();

//       if (res.ok) {
//         setMessage('Login successful!');
//         // Save token to localStorage or context here if you want
//         localStorage.setItem('token', data.token);
//       } else {
//         setMessage(data.message || 'Login failed');
//       }
//     } catch (error) {
//       setMessage('Error connecting to server');
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
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
//         <button type="submit">Login</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// }

// export default Login;
//                                2nd , for redirect to home after login,toast for success or failure 
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { useAuth } from '../../context/AuthContext'
// import { toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import './Login.css'
// import spotifyLogo from'../../assets/images/spotifyLogo.png'

// function Login() {
//   const navigate = useNavigate()
//   const { login } = useAuth() // ✅ use login from AuthContext
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState(null)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', {
//         email,
//         password,
//       })

//       const token = res.data.token
//       const user = res.data.user

//       // ✅ Save token and update AuthContext
//       localStorage.setItem('token', token)
//       login(user) // use login() to update context and localStorage properly

//       toast.success('Login successful')
//       navigate('/') // redirect to home
//     } catch (err) {
//       setError('Invalid email or password')
//       toast.error('Login failed')
//     }
//   }

//   return (
//     <div className="LoginPage">
//       <div className="auth-container">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit">Login</button>
//         </form>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//       </div>
//     </div>
//   )
// }

// export default Login
//                                    3rd for adding dec items 
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../context/AuthContext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Login.css'

// ✅ Imports for decorative items
import spotifyLogo from '../../assets/images/spotifyLogo.png'
import headsetIcon from '../../assets/images/headset.png'
import musicIcon from '../../assets/images/music.png'

function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      })

      const token = res.data.token
      const user = res.data.user

      localStorage.setItem('token', token)
      login(user)

      toast.success('Login successful')
      navigate('/')
    } catch (err) {
      setError('Invalid email or password')
      toast.error('Login failed')
    }
  }

  return (
    <div className="LoginPage">
      {/* ✅ Decorative images */}
      <img src={spotifyLogo} alt="Spotify" className="decor-logo-left" />
      <img src={headsetIcon} alt="Headset" className="decor-headset" />
      <img src={musicIcon} alt="Music" className="decor-music" />

      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <p className="dha">Don't have an account ? <a href="/signup"> sign_up_for_Spotify</a></p>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  )
}

export default Login
