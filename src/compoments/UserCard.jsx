const UserCard = ({ user,flag,handleSendRequest }) => {
  
  return (
    <>
      <div className=" justify-items-center m-9">
        <div className="card bg-base-300 w-96 shadow-xl">
          <figure>
            <img
              src={user?.photoURL}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {user?.firstName} {user?.LastName}
            </h2>
            <p>
              {user?.age} , {user?.gender}
            </p>
            <p>{user?.about}</p>
            <p>{user?.skills?.join(", ")}</p>
            {flag && (<div className="card-actions flex justify-items-center ">
              <button className="btn btn-primary" onClick={()=> handleSendRequest("ignored", user._id)}>Ignore</button>
              <button className="btn btn-primary" onClick={()=> handleSendRequest("intersted", user._id)}>Intersted</button>
            </div>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
