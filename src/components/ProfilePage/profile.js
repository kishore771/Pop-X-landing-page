import React, { useEffect, useState } from 'react';
import './profile.css';
import { FaCamera } from "react-icons/fa";

const ProfilePage = () => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const storedUser = localStorage.getItem('user'); // Retrieve user data from localStorage
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse and set user data
    }
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className='title-wrapper'>
        <h4 className="title">Account Settings</h4>
        </div>
        <div className="profile-wrapper">
          <div className="profile-section">
            <div className="avatar-wrapper">
              <img
                src="https://i.pravatar.cc/150?img=47"
                alt="Profile"
                className="avatar"
              />
              <div className="camera-icon-container"><FaCamera className='camera-icon'/></div>
            </div>
            <div className="user-info">
              <div className="name">{user.name || 'Unknown User'}</div> 
              <div className="email">{user.email || 'No Email Provided'}</div> 
            </div>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          </p>
          <hr className="hr-line" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
