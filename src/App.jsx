import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";

import Home from "./pages/learner/Home";
import Profile from "./pages/learner/Profile";
import { getCookie } from "./services/cookie";
import GuestHome from "./pages/guest/GuestHome";
import Nav from "./components/Nav";
import AboutUs from "./components/AboutUs/AboutUs.component";

const App = () => {
  const token = getCookie("token");

  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<GuestHome />} />

          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/all" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Route>
        <Route
          path="/login"
          element={token ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="/register"
          element={token ? <Navigate to="/" replace /> : <Register />}
        />
        <Route
          path="/forgot-password"
          element={token ? <Navigate to="/" replace /> : <ForgotPassword />}
        />
      </Routes>
    </>
  );
};

export default App;
