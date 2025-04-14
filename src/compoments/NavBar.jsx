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
    <div className="navbar bg-base-300 mx-1">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          DevConnect
        </Link>
      </div>
  
      <div className="flex-none gap-2">
        {/* Menu - hidden on small screens, shown on md and up */}
        <ul className="menu menu-horizontal hidden md:flex bg-base-300 rounded-box px-2">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            {user ? (
              <button onClick={Logout}>Logout</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
  
        {/* Mobile Menu Button */}
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              {user ? (
                <button onClick={Logout}>Logout</button>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
  
        {/* Avatar Dropdown */}
        {user && (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="User Avatar" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><Link to="/connections">Connections</Link></li>
              <li><Link to="/request">Request</Link></li>
              <li><Link to="/payment">Payment</Link></li>
              <li><Link to="/settings">Settings</Link></li>
              <li><button onClick={Logout}>Logout</button></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  </>  
  );
};

export default Navbar;
