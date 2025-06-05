import {React} from 'react';
import {useNavigate} from 'react-router-dom';
import './landing.css';

const LandingPage = () => {
    const navigate = useNavigate();
  return (
    <div className="landing-page-container">
    <div className='landing-page-content'>
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet,<br/>
      consectetur adipiscing elit.</p>
      <button className="signup-button" onClick={()=> navigate('/signup')}>Create Account</button> 
      <button className="logi-button" onClick={()=> navigate('/login')}>Already Registered? Login</button>
    </div>
    </div>
  );
};

export default LandingPage;
