import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";
import { BASE_URL } from "../utils/url";

const Request = () => {
  const dispatch = useDispatch();
  const request = useSelector((state) => state.request);
  console.log("request", request);
  const fetchRequest = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/user/request/received",
        { withCredentials: true }
      );
      console.log(res.data.connectionRequest);
      dispatch(addRequest(res.data.connectionRequest));
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const requestHandle = async(status, _id) =>{
    //accepted
    try{
        const res = await axios.post(`${BASE_URL}/request/review/${status}/${_id}`,{},{withCredentials:true})
        fetchRequest()
    }catch (err){
        console.log(err)
    }
  }

  useEffect(() => {
    fetchRequest();
  }, []);

  if (!request) return <></>;
  if (request.length === 0) return <> No Request found</>;
  return (
    <>
      <div className="text-center my-10">
        <h1> Connections List</h1>
        {request?.map((requests) => {
          const { firstName, LastName, photoURL, age, gender, about, skills,_id } =
            requests.fromUserId;
          return (
            <div className="flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-1/2 m-auto my-2">
              <div>
                <img
                  alt="photo"
                  className="w-20 h-20 rounded-full"
                  src={photoURL}
                ></img>
              </div>
              <div className="text-left mx-4">
                <h2 className="font-bold text-xl">
                  {firstName + " " + LastName}
                </h2>
                {age && gender && <p> {age + "   " + gender}</p>}
                <p> {skills.join(", ")}</p>
                <p> {about}</p>
              </div>
              <div className="mx-10">
              <button className="btn btn-active btn-primary mx-2" onClick={() => requestHandle("",requests._id)}>Reject</button>
              <button className="btn btn-active btn-secondary mx-2" onClick={()=> requestHandle("accepted",requests._id)}>Accept</button>
                </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Request;
