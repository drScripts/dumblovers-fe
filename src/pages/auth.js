import React from "react";
import styles from "../css/auth.module.css";
import Login from "../components/auth/login";
import Register from "../components/auth/register";
import { useState } from "react";

export default function Auth() {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);

  const title = 'Welcome';
  document.title = 'DumbLovers | ' + title;

  return (
    <>
      <div className={styles.authContainer}>
        {login ? (
          <h1 className={login ? styles.loginTitle : styles.registTitle}>
            Login
          </h1>
        ) : (
          <h1 className={login ? styles.loginTitle : styles.registTitle}>
            Register
          </h1>
        )}
        {login ? (
          <Login setLogin={setLogin} setRegister={setRegister} />
        ) : (
          <Register setLogin={setLogin} setRegister={setRegister} />
        )}
      </div>
    </>
  );
}
