import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/url";

const Navbar = () => {
  const user = useSelector(state => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  console.log("---->",user)
  const Logout = async() =>{
    try{ 
      const res = await axios.post(`${BASE_URL}/logout`,{},{withCredentials:true})
      dispatch(removeUser())
      navigate("/login")
    }catch (err){
      console.log(err)
    }
  }
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
    <Link to="/" className="btn btn-ghost text-xl">DevConnect</Link>
  </div>
  <div className="flex-none gap-2">
  <ul className="menu menu-horizontal bg-base-300 m2">
  <li><Link to="/about">About</Link></li>
  <li><Link to="/contact">Contact</Link></li>
  <li>  {user ?  <button onClick={Logout}>logout</button> : <Link to="/login">Login</Link>}</li>
</ul>
    {/* <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div> */}
   { user && (<div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user?.photoURL} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link  to="/profile"className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to="/connections">Connections</Link></li>
        <li><Link to="/request">Request</Link></li>
        <li><Link to="/payment">Payment</Link></li>
        <li><a>Settings</a></li>
        <li><Link href="/login">Logout</Link></li>
      </ul>
    </div>)}
  </div>
</div>
    </>
  );
};

export default Navbar;
