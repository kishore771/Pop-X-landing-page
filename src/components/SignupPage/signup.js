import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: false
  });

  const handleChange = (e) => { // Handle input changes
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'radio' ? checked : value
    }));
  };

  const handleSubmit = (e) => { // Handle form submission
    e.preventDefault();
    console.log('Form submitted:', formData);
    

    setTimeout(() => {

      localStorage.setItem('user', JSON.stringify({
        name: formData.fullName,
        email: formData.email
      }));

      navigate('/profile');
    }, 1000);
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h2>Create your<br />PopX account</h2>
        
        <form onSubmit={handleSubmit}> 
          <div className="form-group">
            <label>
              Full Name<span className="required">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName} // Bind fullName input to formData
              onChange={handleChange} // Update formData on input change
              required
            />
          </div>

          <div className="form-group">
            <label>
              Phone number<span className="required">*</span>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber} // Bind phoneNumber input to formData
              onChange={handleChange} // Update formData on input change
              required
            />
          </div>

          <div className="form-group">
            <label>
              Email address<span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email} // Bind email input to formData
              onChange={handleChange} // Update formData on input change
              required
            />
          </div>

          <div className="form-group">
            <label>
              Password<span className="required">*</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password} // Bind password input to formData
              onChange={handleChange} // Update formData on input change
              required
            />
          </div>

          <div className="form-group">
            <label>
              Company name
            </label>
            <input
              type="text"
              name="companyName"
              placeholder="Enter your company name"
              value={formData.companyName} // Bind companyName input to formData
              onChange={handleChange} // Update formData on input change
            />
          </div>

          <div className="form-group">
            <label>Are you an Agency?<span className="required">*</span></label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="isAgency"
                  checked={formData.isAgency} // Bind isAgency input to formData
                  onChange={handleChange} // Update formData on input change
                />
                Yes
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="isAgency"
                  checked={!formData.isAgency} // Bind isAgency input to formData
                  onChange={handleChange} // Update formData on input change
                />
                No
              </label>
            </div>
          </div>

          <button type="submit" className="create-account-button">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;