import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';

import Home from './pages/learner/Home';
import Profile from './pages/learner/Profile';
import { getCookie } from './components/services/cookie';
import Users from './pages/admin/Users';
import Studies from './pages/admin/Studies';
import Certificates from './pages/admin/Certificates';

const App = () => {
  const token = getCookie('token');

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={token ? (
            <Navigate to="/" replace />
          ) : <Login />}
        />
        <Route
          path="/register"
          element={token ? (
            <Navigate to="/" replace />
          ) : <Register />}
        />
        <Route
          path="/forgot-password"
          element={token ? (
            <Navigate to="/" replace />
          ) : <ForgotPassword />}
        />
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/profile/:id"
          element={<Profile />}
        />
        <Route
          path="/admin/users"
          element={token ? (
            <Navigate to="/" replace />
          ) : <Users />}
        />
        <Route
          path="/admin/studies"
          element={token ? (
            <Navigate to="/" replace />
          ) : <Studies />}
        />
        <Route
          path="/admin/certificates"
          element={token ? (
            <Navigate to="/" replace />
          ) : <Certificates />}
        />
      </Routes>
    </>
  );
};

export default App;
