const UserCard = ({ user,flag,handleSendRequest }) => {
  
  return (
    <>
  <div className="flex justify-center my-8">
    <div className="card w-80 bg-base-200 shadow-xl">
      <figure className="px-6 pt-6">
        <img
          src={user?.photoURL}
          alt="User"
          className="rounded-full w-32 h-32 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-lg font-semibold">
          {user?.firstName} {user?.LastName}
        </h2>
        <p className="text-sm text-gray-500">
          {user?.age} • {user?.gender}
        </p>
        {user?.about && <p className="text-sm">{user?.about}</p>}
        {user?.skills?.length > 0 && (
          <p className="text-sm font-medium text-gray-600">
            Skills: {user.skills.join(", ")}
          </p>
        )}

        {flag && (
          <div className="card-actions mt-4 flex justify-center gap-4">
            <button
              className="btn btn-outline btn-error"
              onClick={() => handleSendRequest("ignored", user._id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleSendRequest("intersted", user._id)}
            >
              Interested
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
</>

  );
};

export default UserCard;
