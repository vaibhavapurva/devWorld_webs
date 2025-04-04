import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/url";
// import { addUser } from "../utils/userSlice";

const Profile = () => {
  const user = useSelector((state) => state.user);
  //   const dispatch = useDispatch()
  console.log("hehhehe", user?.firstName);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [LastName, setLastName] = useState(user?.LastName);
  const [age, setAge] = useState(user?.age);
  const [about, setAbout] = useState(user?.about);
  const [gender, setGender] = useState(user?.gender);
  const [emailID, setEmailID] = useState(user?.emailID);
  const [photoURL, setPhotoURL] = useState(user?.photoURL);
  const [error, setError] = useState(false);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    setFirstName(user?.firstName);
    setLastName(user?.LastName);
    setAbout(user?.about);
    setAge(user?.age);
    setEmailID(user?.emailID);
    setGender(user?.gender);
    setPhotoURL(user?.photoURL);
  }, [user]);
  const profileUpdate = async () => {
    try {
      const data = await axios.patch(
        `${BASE_URL}/profile/edit`,
        { firstName, LastName, age, about, gender, photoURL },
        { withCredentials: true }
      );
      setFlag(true);
      setTimeout(() => {
        setFlag(false);
      }, 3000);
      dispatch(addUser(data.data));
    } catch (err) {
      console.log(err.message);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  return (
    <>
      {flag && (
        <div role="alert" className="alert alert-info mx-3 my-4 justify-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 shrink-0 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Profile updated.</span>
        </div>
      )}
       {error && (
        <div role="alert" className="alert alert-info mx-3 my-4 justify-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 shrink-0 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Profile can not Updated.</span>
        </div>
      )}
      <div className="flex justify-items-center m-9">
        <div className="card bg-base-100 w-96 shadow-xl">
          {flag && <h1> Profile Update Done</h1>}
          <label className="form-control w-full max-w-xs mx-6">
            <div className="label">
              <span className="label-text">FirstName</span>
            </div>
            <input
              type="text"
              value={firstName}
              placeholder="First Name"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label className="form-control w-full max-w-xs mx-6 m-1">
            <div className="label">
              <span className="label-text">Last Name</span>
            </div>
            <input
              type="text"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs mx-6 m-1">
            <div className="label">
              <span className="label-text">photo Name</span>
            </div>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Last Name"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs mx-6 m-1">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmailID(e.target.value)}
              value={emailID}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs mx-6 m-1">
            <div className="label">
              <span className="label-text">Age</span>
            </div>
            <input
              type="text"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs mx-6 m-1">
            <div className="label">
              <span className="label-text">gender</span>
            </div>
            <input
              type="text"
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs mx-6 m-1">
            <div className="label">
              <span className="label-text">about</span>
            </div>
            <input
              type="text"
              placeholder="About"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <div className="card-actions flex justify-items-center m-7">
            <button onClick={profileUpdate} className="btn btn-primary">
              Update
            </button>
          </div>
        </div>
        <UserCard
          user={{ firstName, LastName, age, about, gender, photoURL }}
          flag={false}
        />
      </div>
    </>
  );
};

export default Profile;
