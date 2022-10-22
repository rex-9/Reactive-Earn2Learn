const Nav = () => (
  <>
    <nav className="flex items-center justify-between px-24 py-3 bg-nav">
      <div className="text-2xl font-extrabold text-white">E2L</div>

      {/* Guest */}
      <div className="flex justify-between w-40">
        <button type="button" className="px-2 py-1 font-bold bg-white rounded-lg">Login</button>
        <button type="button" className="px-2 py-1 font-bold bg-white rounded-lg">Sign Up</button>
      </div>

      {/* User */}
      <div className="flex items-center justify-between px-2 py-1 bg-gray-200 rounded-lg w-60">
        <div>Image</div>
        <div className="font-bold">Name</div>
      </div>
    </nav>
  </>
);

export default Nav;
