import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import '../../assets/css/login.css';
import imgeLogin from '../../assets/images/dl.beatsnoop 1.png';
import { useAuth } from './authContext'; // Importing authentication context

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate(); // For redirection

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login(email, password);
      setMessage('Login successful! Redirecting...');
      setTimeout(() => {
        navigate('/home'); // Redirect to dashboard or homepage
      }, 1000);
    } catch (error) {
      setMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login d-flex my-5">
      <div className="logn-img">
        <img src={imgeLogin} alt="Login Illustration" />
      </div>
      <div className="logn-form mx-auto">
        <h2 className="logn-form-title mb-2">Log in to Exclusive</h2>
        <p className="logn-form-below mb-4">Enter your details below</p>
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email or Phone Number"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div className="d-flex justify-content-between mt-5 login-form-btn">
            <button type="submit" className="btn">Log In</button>
            <span><a href="/forgot-password">Forgot Password?</a></span>
          </div>

          {/* Display success or error message */}
          {message && <p className="text-center mt-3">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
