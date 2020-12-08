import React, { useState, useEffect } from "react";
import Login from "./components/Login";

import { auth } from "./firebaseConfig";
import Chat from "./components/Chat";

const App = () => {
  const [message, setMessage] = useState("");

  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user)
        setLoggedUser({
          id: user.uid,
          avatar: user.photoUrl,
          name: user.displayName,
        });
    });
  }, []);

  if (!loggedUser) {
    return <Login />;
  }

  return (
    <>
      <Chat
        message={message}
        setMessage={setMessage}
        user={loggedUser}
        setLoggedUser={setLoggedUser}
      />
    </>
  );
};

export default App;
