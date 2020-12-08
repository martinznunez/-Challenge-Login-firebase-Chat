import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import Login from "../components/Login";

export const UseChat = () => {
  const [loading, setLoading] = useState(true);
  const [messages, setMesages] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("messages").onSnapshot(
      (snapshot) => {
        setLoading(false);
        const messages = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
        const orderedMessages = messages
          .slice()
          .sort((a, b) => a.timestamp - b.timestamp);
        setMesages(orderedMessages);
      },

      (err) => {
        console.log(err);
        return <Login />;
      }
    );

    return () => unsubscribe();
  }, [setMesages]);

  return { loading, messages };
};
