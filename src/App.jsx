import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';

import Home from './pages/learner/Home';
import Profile from './pages/learner/Profile';
import { getCookie, isAdmin } from './services/cookie';
import Users from './pages/admin/Users';
import Studies from './pages/admin/Studies';
import Certificates from './pages/admin/Certificates';
import Technologies from './pages/admin/Technologies';

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
          element={!isAdmin() ? (
            <Navigate to="/" replace />
          ) : <Users />}
        />
        <Route
          path="/admin/studies"
          element={!isAdmin() ? (
            <Navigate to="/" replace />
          ) : <Studies />}
        />
        <Route
          path="/admin/certificates"
          element={!isAdmin() ? (
            <Navigate to="/" replace />
          ) : <Certificates />}
        />
        <Route
          path="/admin/technologies"
          element={!isAdmin() ? (
            <Navigate to="/" replace />
          ) : <Technologies />}
        />
      </Routes>
    </>
  );
};

export default App;
