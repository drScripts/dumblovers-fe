import React from "react";
import styles from "../../css/auth.module.css";
import blankPfp from "../../assets/images/blank-profile.png";
import { useState, useEffect } from "react";

export default function Register({ setLogin, setRegister }) {
  const [preview, setPreview] = useState(null);

  const [form, setForm] = useState({
    pfp: "",
    username: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  return (
    <>
      <div className={styles.registCard}>
        {preview ? (
          <div className={styles.pfpInput}>
            <img src={preview} alt="Profile Picture" />
          </div>
        ) : (
          <div className={styles.pfpInput}>
            <img src={blankPfp} alt="Profile Picture" />
          </div>
        )}
        <form>
          <label htmlFor="pfp">
            <input
              type="file"
              id="pfp"
              name="pfp"
              onChange={handleChange}
              hidden
            />
            Upload Image
          </label>
          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="password" placeholder="Password" />
          <select name="gender" id="gender" placeholder="gender">
            <option value="gender" selected hidden>
              Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input type="text" name="phone" placeholder="Phone number" />
          <button>Register</button>
        </form>
        <p>
          Already have an account? click{" "}
          <button
            onClick={() => {
              setLogin(true);
              setRegister(false);
            }}
          >
            here
          </button>
        </p>
      </div>
    </>
  );
}
