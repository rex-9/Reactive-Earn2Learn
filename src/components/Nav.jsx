import { Link, Outlet } from "react-router-dom";
import assets from "../assets/assets";
import { checkCookie, getCookie, removeCookie } from "../services/cookie";
import { Fragment } from "react";
const Nav = () => {
  let user = {};
  if (checkCookie("user")) {
    user = JSON.parse(getCookie("user"));
  }
  const logout = () => {
    removeCookie("user");
    removeCookie("token");
    window.location.reload();
  };

  return (
    <Fragment className="mb-5 z-40">
      <nav className="sticky top-0 font-qs h-[12%] w-full flex items-center justify-between px-12 py-5 shadow-lg mb-2">
        <Link to="/dashboard">
          <img
            src={assets.rnb}
            className="h-10 w-32 object-cover"
            alt="Robust and Best Logo"
          />
          <p className="font-bold">Earn To Learn</p>
        </Link>
        {Object.keys(user).length !== 0 ? (
          <>
            <div className="flex w-96 justify-between">
              <Link to={`/profile/${user.id}`}>
                <div className="flex items-center justify-around px-2 py-1  w-52">
                  <img
                    className="object-cover w-12 h-12 rounded-full"
                    src={user.image ? user.image : assets.avatar}
                    alt=""
                  />
                  <div className="font-bold">{user.username}</div>
                </div>
              </Link>
              <button
                type="button"
                className="rounded-lg px-2 py-1 text-red-700 hover:bg-red-500 hover:font-bold hover:text-white"
                onClick={logout}
              >
                Log Out
              </button>
            </div>
          </>
        ) : (
          <div className="flex justify-between w-48">
            <Link to="/aboutus" className="px-2 py-2 text-black  rounded-lg ">
              About Us
            </Link>
            <Link
              to="/login"
              className="px-5 py-2  rounded-lg  text-white font-bold hover:text-gray-300"
              style={{ backgroundColor: "#4E46CE" }}
            >
              Login
            </Link>
            {/* <Link
              to="/Register"
              className="px-2 py-2 text-black rounded-lg  text-white font-bold"
              style={{ backgroundColor: "#4E46CE" }}
            >
              Register
            </Link> */}
          </div>
        )}
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
