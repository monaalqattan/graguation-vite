import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { username, password, rememberMe });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Please enter your credentials</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div className="input-group">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="remember-forgot">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Remember me</span>
            </label>
            <button 
              type="button" 
              className="forgot-password"
              onClick={() => console.log('Forgot password clicked')}
            >
              Forgot password?
            </button>
          </div>
          
          <button type="submit" className="login-button">
            Sign In
          </button>
          
          <div className="register-link">
  <p>
    Don't have an account?{" "}
    <button type="button" onClick={() => navigate('/signup')}>
      Register
    </button>
  </p>
</div>

          {/* <div className="register-link">
            <p> Don't have an account?{" "} <button type="button" onClick={() => console.log('Register clicked')} > Register </button>
             </p>
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default Login;

