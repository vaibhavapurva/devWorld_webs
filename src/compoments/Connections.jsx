import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionsSlice";
import { BASE_URL } from "../utils/url";
import { Link } from "react-router";

const Connections = () => {
  const dispatch = useDispatch();
  const connectionsList = useSelector((state) => state.connection);
  const connectionsGet = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/connections`, {
        withCredentials: true,
      });
      console.log("addConnections", res);
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  console.log("connectionsList", connectionsList);

  useEffect(() => {
    connectionsGet();
  }, []);
  if (!connectionsList) return;
  if (connectionsList.length === 0) return <h1> No connections found</h1>;
  return (
    <>
    <div className="text-center my-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Connections List</h1>
  
      {connectionsList.map((connection) => {
        const { _id, firstName, LastName, photoURL, age, gender, about, skills } = connection;
  
        return (
          <div
            key={_id}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8 m-auto my-4 p-4 rounded-lg bg-base-300 max-w-3xl shadow-md"
          >
            {/* Avatar */}
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full object-cover"
                src={photoURL}
              />
            </div>
  
            {/* User Info */}
            <div className="flex-1 text-left">
              <h2 className="font-bold text-xl">{firstName + " " + LastName}</h2>
              {age && gender && <p className="text-sm text-gray-600">{`${age} • ${gender}`}</p>}
              <p className="text-sm text-gray-700 mt-1">
                <strong>Skills:</strong> {skills.join(", ")}
              </p>
              <p className="text-sm text-gray-700 mt-1">{about}</p>
            </div>
  
            {/* Chat Button */}
            <div className="sm:self-center">
              <Link to={`/chat/${_id}/${firstName + " " + LastName}`}>
                <button className="btn btn-neutral btn-outline w-full sm:w-auto">
                  Chat
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  </>
  
  );
};

export default Connections;
