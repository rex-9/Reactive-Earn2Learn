import { Link } from 'react-router-dom';
import assets from '../assets/assets';
import { checkCookie, getCookie, removeCookie } from '../services/cookie';

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
    <nav className="sticky top-0 font-qs h-[12%] w-full flex items-center justify-between px-24 py-3 shadow-lg mb-2">
      <div>
        <img src={assets.rnb} className="h-10 w-32 object-cover" alt="Robust and Best Logo" />
        <p className="font-bold">Earn To Learn Program</p>
      </div>
      {
        Object.keys(user).length !== 0
          ? (
            <>
              <div className="flex w-96 justify-between items-center">
                <Link to={`/profile/${user.id}`}>
                  <div className="flex items-center justify-around px-2 py-1 border-2 border-gray-200 rounded-lg w-52">
                    <img className="object-cover w-12 h-12 rounded-full" src={user.image ? user.image : assets.avatar} alt="" />
                    <div className="font-bold">{user.username}</div>
                  </div>
                </Link>
                <button type="button" className="rounded-lg px-2 py-1 text-red-700 hover:bg-red-500 hover:font-bold hover:text-white" onClick={logout}>Log Out</button>
              </div>
            </>
          )
          : (
            <div className="flex justify-between w-40">
              <Link to="/login" className="px-2 py-1 text-black bg-white rounded-lg hover:bg-blue-500 hover:text-white hover:font-bold">Login</Link>
              <Link to="/Register" className="px-2 py-1 text-black bg-white rounded-lg hover:bg-blue-500 hover:text-white hover:font-bold">Register</Link>
            </div>
          )
      }
    </nav>
  );
};

export default Nav;
