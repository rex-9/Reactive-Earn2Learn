const HomeNav = () => (
  <>
    <nav className="flex items-center justify-between px-24 py-3 bg-nav">
      <div className="text-2xl font-extrabold text-white">E2L</div>

      {/* Guest */}
      <div className="flex justify-between w-40">
        <button type="button" className="px-2 py-1 font-bold bg-white rounded-lg">Login</button>
        <button type="button" className="px-2 py-1 font-bold bg-white rounded-lg">Sign Up</button>
      </div>

      {/* User */}
      <div className="flex items-center justify-between px-2 py-1 bg-gray-200 rounded-lg w-52">
        <img className="w-12 h-12 object-cover rounded-full" src="https://static.zerochan.net/Dante.full.2952055.jpg" alt="" />
        <div className="font-bold">Name</div>
      </div>
      <a href="/profile" className="text-white">My Study</a>
    </nav>
  </>
);

export default HomeNav;
