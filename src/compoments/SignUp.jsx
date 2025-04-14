import axios from "axios";
import { use, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/url";

const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [emailID, setEmailID] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [about, setAbout] = useState("");
  const signUphandel = async (e) => {
  
    e.preventDefault();
    console.log("gender",gender)
    try {
      const res = await axios.post(
        `${BASE_URL}/signup`,
        {
          firstName,
          LastName,
          emailID,
          age,
          password,
          about,
          gender,
          skills: ["a", "b"],
        },
        { withCredentials: true }
      );
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
  <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse gap-12">
      
      {/* Left Side: Text */}
      <div className="text-center lg:text-left max-w-xl">
        <h1 className="text-5xl font-bold">Sign Up Now!</h1>
        <p className="py-6 text-base leading-relaxed">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae
          et a id nisi.
        </p>
      </div>

      {/* Right Side: Sign Up Form */}
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <form className="card-body" onSubmit={signUphandel}>
          {/* First Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="input input-bordered"
              required
            />
          </div>

          {/* Last Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="input input-bordered"
              required
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              value={emailID}
              onChange={(e) => setEmailID(e.target.value)}
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>

          {/* Age */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Age</span>
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
              className="input input-bordered"
              required
            />
          </div>

          {/* About */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">About</span>
            </label>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="textarea textarea-bordered"
              placeholder="Tell us something about yourself..."
            />
          </div>

          {/* Gender */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            <div className="flex gap-4">
              <label className="label cursor-pointer">
                <span className="label-text mr-2">Male</span>
                <input
                  type="radio"
                  name="gender"
                  onChange={() => setGender("male")}
                  className="radio checked:bg-blue-500"
                  defaultChecked
                />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text mr-2">Female</span>
                <input
                  type="radio"
                  name="gender"
                  onChange={() => setGender("female")}
                  className="radio checked:bg-pink-500"
                />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text mr-2">Other</span>
                <input
                  type="radio"
                  name="gender"
                  onChange={() => setGender("other")}
                  className="radio checked:bg-green-500"
                />
              </label>
            </div>
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>

    </div>
  </div>
</>

  );
};

export default SignUp;
