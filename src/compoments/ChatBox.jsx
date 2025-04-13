import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/url";

const ChatBox = () => {
  const { targetUserId, userName } = useParams();
  const user = useSelector((state) => state.user);
  const [newMessage, setNewMessage] = useState("");
  const [message, setMessage] = useState([]);
  const userId = user?._id;
  const firstName = user?.firstName;
  const LastName = user?.LastName;

  const fetchChatMessages = async () => {
    const chat = await axios.get(`${BASE_URL}/chat/${targetUserId}`, {
      withCredentials: true,
    });
    const chatMessage = chat?.data?.messages.map((msg) =>{
        return {firstName: msg?.senderId.firstName, LastName: msg.senderId.LastName, text: msg.text }
    })

    setMessage(chatMessage)
  };
  useEffect(() => {
    fetchChatMessages();
  }, []);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const socket = createSocketConnection();
    socket.emit("joinChat", user?._id, targetUserId);
    socket.on("messageReceived", ({ firstName,LastName, text }) => {
      console.log(firstName + " " + text);
      setMessage((message) => [...message, { firstName,LastName, text }]);
    });
    return () => {
      socket.disconnect();
    };
  }, [userId, targetUserId]);

  const sendMessage = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName,
      LastName,
      userId,
      targetUserId,
      text: newMessage,
    });
    setNewMessage("");
  };
  return (
    <>
      <h1 className="p-5 border-b border-gray-600">Chat Box {targetUserId}</h1>
      <div className="w-1/2 mx-auto border border-gray-600  m-5 rounded">
        <div className="card w-100 bg-base-100 card-xl shadow-sm ">
          <div className="card-body flex-1">
            <div className="flex">
              <img
                className="w-10 h-15 rounded-xl"
                src={
                  "https://superstarsbio.com/wp-content/uploads/2018/08/salman-khan.jpg"
                }
                alt="user photo"
              />
              <h2 className="card-title border-b border-gray-300">
                {userName}
              </h2>
            </div>

            <div className="overflow-scroll h-100 p-5">
              {message.map((msg, index) => {
                return (
                  <>
                    <div key={index} className={
                        "chat " + 
                        (firstName == msg.firstName ?  "chat-end" : "chat-start")
                        }>
                      <div className="chat-header">
                        {`${msg.firstName} ${msg.LastName}`}
                        {/* <time className="text-xs opacity-50">2 hours ago</time> */}
                      </div>
                      <div className="chat-bubble">{msg.text}</div>
                      {/* <div className="chat-footer opacity-50">Seen</div> */}
                    </div>
                  </>
                );
              })}
            </div>
            <div className="">
              <div className="p-2 flex border-t border-gray-300 gap-2 items-center">
                <input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  type="text"
                  className="input"
                  placeholder="Type here"
                />
                <button onClick={sendMessage} className="btn btn-primary">
                  {" "}
                  Send{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
