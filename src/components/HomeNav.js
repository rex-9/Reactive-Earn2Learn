import { Link } from 'react-router-dom';

const HomeNav = () => (
  <>
    <nav className="flex items-center justify-between px-24 py-3 bg-dark">
      <div className="text-white header">E2L</div>

      {/* Guest */}
      <div className="flex justify-between w-40">
        <Link to="/login" className="px-2 py-1 text-black bg-white rounded-lg">Login</Link>
        <Link to="/Register" className="px-2 py-1 text-black bg-white rounded-lg">Register</Link>
      </div>

      {/* User */}
      <div className="flex items-center justify-between px-2 py-1 bg-gray-200 rounded-lg w-52">
        <img className="object-cover w-12 h-12 rounded-full" src="https://static.zerochan.net/Dante.full.2952055.jpg" alt="" />
        <div className="font-bold font-qs">Name</div>
      </div>
      <Link to="/profile/1" className="link">My Study</Link>
    </nav>
  </>
);

export default HomeNav;
