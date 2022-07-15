import React from "react";
import styles from "../css/profile.module.css";
import Navbar from "../components/navbar/navbar";
import blankPfp from "../assets/images/blank-profile.png";

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className={styles.profileContainer}>
        <div className={styles.profile}>
          <div className={styles.profileImage}>
            <img src={blankPfp} alt="" />
          </div>
          <div className={styles.profileUsername}>
            <p>
              <b>Username</b>
            </p>
            <p>RizkyAlvie</p>
          </div>
          <div className={styles.profileEmail}>
            <p>
              <b>Email</b>
            </p>
            <p>alvienuryahya@gmail.com</p>
          </div>
          <div className={styles.profilePhone}>
            <p>
              <b>Phone Number</b>
            </p>
            <p>089244236674</p>
          </div>
          <div className={styles.profileFollowers}>
            <p>
              20 <b>Followers</b>
            </p>
          </div>
          <div className={styles.profileFollowing}>
            <p>
              10 <b>Following</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
