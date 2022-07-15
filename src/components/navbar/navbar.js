import React from "react";
import blankPfp from "../../assets/images/blank-profile.png";
import styles from "../../css/nav.module.css";

export default function Navbar() {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.navLeft}>
          <p>DumbLovers</p>
        </div>
        <div className={styles.navRight}>
          <a href="#">Home</a>
          <a href="#">Profile</a>
          <img src={blankPfp} alt="Profile Picture" />
        </div>
      </div>
    </>
  );
}
