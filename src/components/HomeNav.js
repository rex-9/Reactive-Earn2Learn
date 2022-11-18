import { Link } from 'react-router-dom';
import { GetCookie, RemoveCookie } from './services/Cookie';
import avatar from '../assets/avatar.jpg';

const HomeNav = () => {
  let user = GetCookie('user');
  user = JSON.parse(user);
  console.log(`user: ${user}`);
  const logout = () => {
    RemoveCookie('user');
    RemoveCookie('token');
  };

  return (
    <>
      <nav className="flex items-center justify-between px-24 py-3 bg-dark">
        <div className="text-white header">E2L</div>
        {
          user
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
    </>
  );
};

export default HomeNav;
