import React from "react";
import styles from "./home.module.css";
import Image from "next/image";
import profile from "../../../public/images/profile.png";
import Stack from "./stack";

function HomeContainer() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.subContainer}>
        <div className={styles.leftContent}>
          <h5 className={styles.contentSubheader}>hi there 👋, i am</h5>
          <h1 className={styles.contentHeader}>Elvin</h1>
          <p className={styles.position}>frontend developer 👨‍💻</p>
        </div>
        <div>
          <Stack />
        </div>
      </div>
    </div>
  );
}

export default HomeContainer;
