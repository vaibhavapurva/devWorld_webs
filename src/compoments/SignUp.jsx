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
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">FirstName</span>
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="FirstName"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">LastName</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={emailID}
                  onChange={(e) => setEmailID(e.target.value)}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input
                  type="number"
                  placeholder="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">About</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  placeholder="About"
                ></textarea>
              </div>
              <label className="label">
                <span className="label-text">Gender</span>
              </label>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Mail</span>
                  <input
                    type="radio"
                    onChange={(e) => setGender("male")}
                    name="radio-10"
                    className="radio checked:bg-blue-500"
                    defaultChecked
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">femail</span>
                  <input
                    type="radio"
                    name="radio-10"
                    onChange={(e) => setGender("female")}
                    className="radio checked:bg-secondary"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Other</span>
                  <input
                    type="radio"
                    name="radio-10"
                    onChange={(e) => setGender("other")}
                    className="radio checked:bg-accent"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                  onClick={(e) => signUphandel(e)}
                >
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
