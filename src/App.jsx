import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';

import Home from './pages/learner/Home';
import Profile from './pages/learner/Profile';
import { GetCookie } from './components/services/Cookie';

const App = () => {
  const token = GetCookie('token');

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
      </Routes>
    </>
  );
};

export default App;
