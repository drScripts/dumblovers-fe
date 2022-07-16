import React from "react";
import blankPfp from "../../assets/images/blank-profile.png";
import styles from "../../css/nav.module.css";
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.navLeft}>
          <p>DumbLovers</p>
        </div>
        <div className={styles.navRight}>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="#">Logout</Link>
          <img src={blankPfp} alt="Profile Picture" />
        </div>
      </div>
    </>
  );
}
