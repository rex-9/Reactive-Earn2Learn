import {
  Routes, Route, useNavigate,
} from 'react-router-dom';
import { useEffect } from 'react';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';

import Home from './pages/Home';
import Profile from './pages/Profile';
import { GetCookie } from './components/services/Cookie';

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = GetCookie('token');
    if (token) navigate('/');
    else navigate('/login');
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
