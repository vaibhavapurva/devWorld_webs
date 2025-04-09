import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/url";
// import { useNavigation } from "react-router";

const Login = () => {
    const navigate = useNavigate(); 
    const [emailID, setEmailId] = useState("vibhu@gmail.com");
    const [password, setPassword] = useState("Admin@12");
    const dispatch= useDispatch()
    const loginhandle = async(e) =>{
        e.preventDefault()
        try{
            const res = await axios.post(`${BASE_URL}/login`,{
                emailID,password
            },{withCredentials: true})
            dispatch(addUser(res.data.data))
            navigate("/")
        }catch(err){
            console.error(err)
        }
    }
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              In today's fast-paced tech world, developers often seek meaningful
              connections, collaborations, and networking opportunities.
              DevConnect is a dedicated platform designed for developers to
              connect, collaborate, and grow together.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={emailID}
                  placeholder="email"
                  className="input input-bordered"
                  required
                  onChange={(e)=> setEmailId(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  value={password}
                  placeholder="password"
                  className="input input-bordered"
                  required
                  onChange={(e)=> setPassword(e.target.value)}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={(e) => loginhandle(e)}>Login</button>
              </div>
              <label className="label">
                <Link to="/signup" className="label-text-alt link link-hover">
                  SignUp
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
