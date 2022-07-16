import React from "react";
import Navbar from "../components/navbar/navbar";
import styles from "../css/home.module.css";
import Contact from "../components/contact/contact";
import Card from "../components/card/card";

export default function Home() {

  const title = 'Home';
  document.title = 'DumbLovers | ' + title;

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.listButton}>
            <button>Match</button>
            <button>Not Match</button>
          </div>
          <div className={styles.userContainer}>
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <Card />
        </div>
      </div>
    </div>
  );
}
