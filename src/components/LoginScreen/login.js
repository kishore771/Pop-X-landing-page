import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const LoginScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user')); // Retrieve user data from localStorage

    if (storedUser && storedUser.email === formData.email) { // Check if user is registered
      localStorage.setItem('user', JSON.stringify({ 
        ...storedUser,
        email: formData.email
      }));

      navigate('/profile'); // Navigate to profile page after successful login
    } else {
      alert('User not registered. Please sign up first.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Signin to your <br /> PopX account</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter email address"
              value={formData.email} // Bind email input to formData
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} // Update formData on input change 
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter password"
              value={formData.password} // Bind password input to formData
              onChange={(e) => setFormData({ ...formData, password: e.target.value })} // Update formData on input change
              required
            />
          </div>

          <button className="login-button" type="submit" disabled={!formData.email || !formData.password} > 
            Login 
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
