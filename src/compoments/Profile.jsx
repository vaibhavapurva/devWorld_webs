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
    {/* Alerts */}
    {flag && (
      <div role="alert" className="alert alert-success mx-4 my-4">
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
          />
        </svg>
        <span>Profile updated successfully!</span>
      </div>
    )}
  
    {error && (
      <div role="alert" className="alert alert-error mx-4 my-4">
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
          />
        </svg>
        <span>Profile could not be updated.</span>
      </div>
    )}
  
    {/* Profile Update Form */}
    <div className="flex flex-col lg:flex-row gap-10 justify-center items-start m-4">
      <div className="card bg-base-100 w-full max-w-md shadow-xl p-6">
        <h2 className="text-lg font-bold mb-4 text-center">Update Profile</h2>
  
        {/* Input fields */}
        {[
          { label: 'First Name', value: firstName, setter: setFirstName },
          { label: 'Last Name', value: LastName, setter: setLastName },
          { label: 'Photo URL', value: photoURL, setter: setPhotoURL },
          { label: 'Email', value: emailID, setter: setEmailID },
          { label: 'Age', value: age, setter: setAge },
          { label: 'Gender', value: gender, setter: setGender },
          { label: 'About', value: about, setter: setAbout },
        ].map(({ label, value, setter }) => (
          <label key={label} className="form-control w-full max-w-xs mx-auto my-2">
            <div className="label">
              <span className="label-text">{label}</span>
            </div>
            <input
              type="text"
              placeholder={label}
              value={value}
              onChange={(e) => setter(e.target.value)}
              className="input input-bordered w-full"
            />
          </label>
        ))}
  
        {/* Submit Button */}
        <div className="card-actions mt-6 flex justify-center">
          <button onClick={profileUpdate} className="btn btn-primary w-full max-w-xs">
            Update
          </button>
        </div>
      </div>
  
      {/* User Preview Card */}
      <div className="w-full max-w-md">
        <UserCard
          user={{ firstName, LastName, age, about, gender, photoURL }}
          flag={false}
        />
      </div>
    </div>
  </>
  
  );
};

export default Profile;
