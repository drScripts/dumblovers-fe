import React from "react";
import styles from "../../css/home.module.css";
import blankPfp from "../../assets/images/blank-profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Card() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div
        className={checked ? styles.cardContainerAfter : styles.cardContainer}
      >
        <div className={styles.cardImg}>
          <img src={blankPfp} alt="Profile Picture" />
        </div>
        <div className={styles.cardName}>
          <p>Ananda Rizky Alvie Nuryahya</p>
        </div>
        <div className={styles.cardButton}>
          <button className={styles.fax}>
            <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
          </button>
          <button onClick={() => setChecked(true)} className={styles.fac}>
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </>
  );
}
