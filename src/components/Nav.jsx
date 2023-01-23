import { Link, Outlet } from "react-router-dom";
import assets from "../assets/assets";
import { checkCookie, getCookie, removeCookie } from "../services/cookie";
import { Fragment } from "react";
import { isAdmin } from "../services/cookie";
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
    <Fragment>
      <nav className="sticky top-0 font-qs h-[14%] w-full flex items-center justify-between  py-5 border-b-[1px] bg-white z-50 ">
        <Link to="/dashboard">
          <div className="ml-12">
            <img
              src={assets.rnb}
              className="h-10 w-32 object-cover"
              alt="Robust and Best Logo"
            />
            <p className="font-bold">Earn To Learn</p>
          </div>
        </Link>

        <div className="self-end flex gap-24">
          <Link to="/">
            <div className="font-medium text-gray-500">Home</div>
          </Link>{" "}
          <Link to="/aboutus" className=" font-medium text-gray-500">
            <p>About Us</p>
          </Link>
          {isAdmin() && (
            <Link to="/dashboard" className=" font-medium text-gray-500">
              <p>Dashboard</p>
            </Link>
          )}
        </div>

        {Object.keys(user).length !== 0 ? (
          <div className="flex  justify-between items-center mr-2">
            <Link to={`/profile/${user.id}`}>
              <div
                className="flex items-center justify-around gap-4 border p-2 px-3 border border-black
                            border-opacity-0 hover:border-opacity-5 hover:bg-gray-100 rounded-lg"
              >
                <img
                  className="object-cover w-12 h-12 rounded-full"
                  src={user.image ? user.image : assets.avatar}
                  alt=""
                />
                <p className="font-bold">{user.fullname}</p>
              </div>
            </Link>

            <button
              type="button"
              className="text-red-600 hover:bg-red-600 text-sm hover:text-white font-bold  px-4 rounded-lg py-1"
              onClick={logout}
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex justify-between gap-6 items-center mr-4">
            <Link to="/">
              <div className="mx-6">
                <i className="fa-solid fa-house-chimney text-lg hover:text-indigo-700" />
              </div>
            </Link>
            <Link to="/aboutus" className="px-2 py-2 font-semibold rounded-lg ">
              <p>About Us</p>
            </Link>
            <Link to="/login">
              <button class="bg-indigo-700 hover:bg-indigo-900 text-white font-medium py-2 px-6 rounded-lg">
                Login
              </button>
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
