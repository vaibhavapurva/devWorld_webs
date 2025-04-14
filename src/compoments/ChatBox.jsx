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
  <div className="w-full md:w-3/4 max-w-[90%] mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col rounded shadow-md">
    <h1 className="p-4 text-lg font-semibold border-b border-gray-300 break-words">{userName}</h1>

    <div className="flex-1 overflow-auto p-4 space-y-4">
      {message.map((msg, index) => (
        <div
          key={index}
          className={
            "chat " +
            (user.firstName === msg.firstName ? "chat-end" : "chat-start")
          }
        >
          <div className="chat-header text-sm font-medium text-gray-700">
            {`${msg.firstName} ${msg.LastName}`}
          </div>
          <div className="chat-bubble break-words max-w-[80%]">{msg.text}</div>
          <div ref={messagesEndRef} />
        </div>
      ))}
    </div>

    <div className="p-4 border-t border-gray-300 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
      <input
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        className="flex-1 border border-gray-300 text-gray-600 rounded p-2"
        placeholder="Type your message..."
      />
      <button onClick={sendMessage} className="btn btn-secondary w-full sm:w-auto">
        Send
      </button>
    </div>
  </div>
</>

  );
};

export default ChatBox;
