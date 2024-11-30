import React, { useState } from 'react';
import imgeLogin from '../../assets/images/dl.beatsnoop 1.png';
import '../../assets/css/login.css';
import { useAuth } from './authContext'; // Importing authentication context
import { useNavigate} from 'react-router-dom';

function RegisterPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      register(formData);
      setMessage('User registered successfully!');
      setTimeout(() => {
        navigate('/login'); 
      }, 1000);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="login d-flex my-5">
      <div className="logn-img">
        <img src={imgeLogin} alt="Login Illustration" />
      </div>
      <div className="logn-form mx-auto">
        <h2 className="logn-form-title mb-2">Create an account</h2>
        <p className="logn-form-below mb-4">Enter your details below</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Name"
              required
            />
          </div>

          <div className="my-4">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="Password"
              required
            />
          </div>

          <div className="sign-btn my-4">
            <button type="submit" className="btn">Create Account</button>
          </div>
          <div className="login-form-g">
            <button type="button" className="btn">
              <i className="fab fa-google"></i> Sign up with Google
            </button>
          </div>
          <div className="d-flex gap-4 my-4 login-form-signUp">
            <span>Already have an account? <a href="/login">Log in</a></span>
          </div>

          {/* Display success or error message */}
          {message && <p className="text-center mt-3">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
