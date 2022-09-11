import React from "react";
import { user } from "../join/Join";
import socketIo from "socket.io-client";
import { useEffect } from "react";
import "./Chat.css";
import { useState } from "react";
import { Message } from "../message/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
import { useContext } from "react";
import { NotificationContext } from "../../context/NotificationContext";
const ENDPOINT = "https://tic-toc-games.herokuapp.com/";

let socket;
export const Chat = () => {
  const { handleNoti } = useContext(NotificationContext);

  const [id, setId] = useState("");
  const [messages, setMessages] = useState([]);
  const send = () => {
    const message = document.getElementById("chatInput").value;
    socket.emit("message", { message, id });
    document.getElementById("chatInput").value = "";
  };

  useEffect(() => {
    socket = socketIo(ENDPOINT, { transports: ["websocket"] });
    socket.on("connect", () => {
      console.log("connected");
      setId(socket.id);
    });

    socket.emit("joined", { user });

    socket.on("welcome", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });

    socket.on("userJoined", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });

    socket.on("left", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });

    return () => {
      socket.emit("disconnected");
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      handleNoti(data.message)
      setMessages([...messages, data]);
      console.log(data.users, data.message, data.id);
    });

    return () => {
      socket.off();
    };
  }, [messages]);

  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header">
          <p>Chatting</p>
        </div>
        <ReactScrollToBottom className="chatbox">
          {messages.map((item, i) => {
            console.log(item)
            return (
              <Message
                message={item.message}
                user={item.id === id ? "" : item.users}
                classes={item.id === id ? "left" : "right"}
              />
            );
          })}
        </ReactScrollToBottom>

        <div className="inputbox">
          <input
            onKeyPress={(event) => (event.key === "Enter" ? send() : "")}
            type="text"
            id="chatInput"
          />
          <button onClick={send} className="sendBtn">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
