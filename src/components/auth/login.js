import React from "react";
import styles from "../../css/auth.module.css";

export default function Login({ setRegister, setLogin }) {

  const title = 'Login';
  document.title = 'DumbLovers | ' + title;

  return (
    <>
      <div className={styles.loginCard}>
        <form>
          <input type="text" placeholder="Your Email Address" />
          <input type="text" placeholder="Password" />
          <button>Login</button>
        </form>
        <p>
          Don't have an account? click{" "}
          <button
            onClick={() => {
              setRegister(true);
              setLogin(false);
            }}
          >
            here
          </button>
        </p>
      </div>
    </>
  );
}
