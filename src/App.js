import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/landing';
import LoginScreen from './components/LoginScreen/login';
import SignupPage from './components/SignupPage/signup';
import ProfilePage from './components/ProfilePage/profile';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path='/profile' element = {<ProfilePage/>} />

      </Routes>
    </Router>
  );
}

export default App;
