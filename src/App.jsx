import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';

import Home from './pages/Home';
import Profile from './pages/Profile';
import { getCookie } from './services/cookie';

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
      </Routes>
    </>
  );
};

export default App;
