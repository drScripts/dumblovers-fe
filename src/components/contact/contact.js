import React from "react";
import styles from "../../css/home.module.css";
import blankPfp from "../../assets/images/blank-profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <>
      <div className={styles.contactContainer}>
        <div className={styles.contactImage}>
          <img src={blankPfp} alt="" />
        </div>
        <div className={styles.contactDetail}>
          <p>
            <b>Username</b>
          </p>
          <p>some text</p>
        </div>
        <div className={styles.contactButton}>
          <FontAwesomeIcon
            className={styles.mailIcon}
            icon={faEnvelope}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className={styles.whatsappIcon}
            icon={faWhatsapp}
          ></FontAwesomeIcon>
        </div>
      </div>
    </>
  );
}
