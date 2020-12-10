import React from "react";
import { providers, auth } from "../firebaseConfig";

const Login = () => {
  return (
    <div className="container-login">
      <h1>Iniciar Sesión</h1>
      <div className="container-logos">
        <div className="container-logo">
          <img
            onClick={() => auth.signInWithPopup(providers.google)}
            src="./assets/google.png"
            alt=""
          />
        </div>
        <div className="container-logo">
          <img
            onClick={() => auth.signInWithPopup(providers.facebook)}
            src="./assets/logo-face1.png"
            alt=""
          />
        </div>
        <div className="container-logo">
          <img
            onClick={() => auth.signInWithPopup(providers.github)}
            src="./assets/icon-github.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
