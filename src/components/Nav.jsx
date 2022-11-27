import { Link } from 'react-router-dom';
import { checkCookie, getCookie, removeCookie } from './services/cookie';
import avatar from '../assets/avatar.jpg';

const Nav = () => {
  let user = {}
  if (checkCookie('user')) {
    user = JSON.parse(getCookie('user'));
  }
  const logout = () => {
    removeCookie('user');
    removeCookie('token');
    window.location.reload();
  };

  return (
    <nav className="sticky top-0 w-full flex items-center justify-between px-24 py-3 bg-dark">
      <div className="text-white header">E2L</div>
      {
        Object.keys(user).length !== 0
          ? (
            <>
              <div className="flex w-96 justify-between items-center">
                <Link to={`/profile/${user.id}`}>
                  <div className="flex items-center justify-around px-2 py-1 bg-gray-200 rounded-lg w-52">
                    <img className="object-cover w-12 h-12 rounded-full" src={user.image ? user.image : avatar} alt="" />
                    <div className="font-bold font-qs">{user.username}</div>
                  </div>
                </Link>
                <button type="button" className="h-10 text-gray-800 btn bg-red-300 hover:bg-red-500 hover:text-white" onClick={logout}>Log Out</button>
              </div>
            </>
          )
          : (
            <div className="flex justify-between w-40">
              <Link to="/login" className="px-2 py-1 text-black bg-white rounded-lg">Login</Link>
              <Link to="/Register" className="px-2 py-1 text-black bg-white rounded-lg">Register</Link>
            </div>
          )
      }
    </nav>
  );
};

export default Nav;
