import React from 'react'

import './login.css'
import logoBlueReBg from '../../assets/removebg-blue-full-logo.png';

function Login() {

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [showPassword, setShowPassword] = React.useState(false)
  const [error, setError] = React.useState('')

  // let history = useHistory();

  const inputStyleUserName = {backgroundColor: '#cccccc', borderRadius: '5px', height: '30px', width: '300px', fontSize: '17px' }
  const inputStylePassword = {backgroundColor: '#cccccc', borderRadius: '5px', height: '30px', width: '222.5px', fontSize: '17px' }

  const handleSubmit = (event) => {
    event.preventDefault()

  }

  return (
    <div className="login-background">
    <div className="login-background-topper">
      <div className="card">
      <img src={logoBlueReBg} alt="Logo" className='logo'></img>
        <form onSubmit={handleSubmit}>
          <div className='align-start'>
          <div> 
            <label htmlFor="username" className="label">
              Username
            </label>
            </div>
            <input
              type="text"
              id="Username"
              placeholder="Username"
              style={inputStyleUserName}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
          <div>
            <label htmlFor="password" className="label">
              Password
            </label>
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              style={inputStyleUserName}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button className='login-btn' type="submit" >Log In</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login
