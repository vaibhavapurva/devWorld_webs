import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/url";

const ChatBox = () => {
  const { targetUserId, userName } = useParams();
  const user = useSelector((state) => state.user);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);
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
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [newMessage, message])
  return (
    <>
      <h1 className="p-5 border-b border-gray-600">Chat Box {targetUserId}</h1>
    <div className="w-1/2 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col rounded">
      {/* <h1 className="p-5 border-b border-gray-300">Chat</h1> */}
      <h1 className="p-5 border-b border-gray-300">{userName}</h1>
      <div className="flex-1 overflow-scroll p-5">
        {message.map((msg, index) => {
          return (
            <div
              key={index}
              className={
                "chat " +
                (user.firstName === msg.firstName ? "chat-end" : "chat-start")
              }
            >
              <div className="chat-header">
                {`${msg.firstName}  ${msg.LastName}`}
                {/* <time className="text-xs opacity-50"> 2 hours ago</time> */}
              </div>
              <div className="chat-bubble">{msg.text}</div>
              {/* <div className="chat-footer opacity-50">Seen</div> */}
              <div ref={messagesEndRef} />
            </div>
          );
        })}
      </div>
      <div className="p-5 border-t border-gray-300 flex items-center gap-2">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border border-gray-300 text-gray-600 rounded p-2"
        ></input>
        <button onClick={sendMessage} className="btn btn-secondary">
          Send
        </button>
      </div>
    </div>
    </>
  );
};

export default ChatBox;
