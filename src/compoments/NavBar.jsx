const Navbar = () => {
  return (
    <>
      {/* <div className="navbar bg-base-300">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Dev-Conncet</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end mx-7">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="navbar bg-base-300  mx-1">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">DevConnect</a>
  </div>
  <div className="flex-none gap-2">
  <ul className="menu menu-horizontal bg-base-300 m2">
  <li><a href="/about">About</a></li>
  <li><a href="/contact">Contact</a></li>
  <li><a href="/login">Login</a></li>
</ul>
    {/* <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div> */}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a  href="/profile"className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a href="/login">Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </>
  );
};

export default Navbar;
