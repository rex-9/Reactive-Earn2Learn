import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';

import Home from './pages/Home';
import Profile from './pages/Profile';

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  </>
);

export default App;
