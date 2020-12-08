import React, { useEffect, useRef } from "react";
import Mensaje from "./Mensaje";
import { auth, db } from "../firebaseConfig";
import { UseChat } from "../HooksChat/UseChat";

const Chat = ({ user, setLoggedUser, message, setMessage }) => {
  const { messages } = UseChat();

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const HashClickSesion = () => {
    setLoggedUser(null);
    auth.signOut();
  };

  const HashChange = (e) => {
    setMessage(e.target.value);
  };

  const HashClick = (e) => {
    e.preventDefault();

    if (!message) {
      return;
    }

    db.collection("messages").add({
      timestamp: Date.now(),
      message,
      userId: user.id,
      userName: user.name,
    });

    setMessage("");
  };

  return (
    <>
      <div>
        <button className="container-btn" onClick={HashClickSesion}>
          Cerrar Sesión
        </button>
      </div>
      <div className="container-general">
        <h2 className="usuario-titulo">{user.name}</h2>

        <div className="container-chat">
          {messages.map((m) => (
            <Mensaje mensaje={m} key={m.id} userId={user.id} />
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form className="container-input">
          <input
            placeholder="Mensaje"
            onChange={HashChange}
            type="text"
            value={message}
          />
          <input id="submit" type="submit" onClick={HashClick} />
        </form>
      </div>
    </>
  );
};

export default Chat;
