import React from "react";
import { providers, auth } from "../firebaseConfig";

const Login = () => {
  return (
    <div className="container-login">
      <h1>Iniciar Sesión</h1>

      <div className="container-logo">
        <img
          onClick={() => auth.signInWithPopup(providers.google)}
          src="./assets/google.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
