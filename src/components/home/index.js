import React from "react";
import styles from "./home.module.css";
import Stack from "./stack";
import Link from "next/link";

function HomeContainer() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.subContainer}>
        <div className={styles.leftContent}>
          <h5 className={styles.contentSubheader}>hi there 👋, i am</h5>
          <h1 className={styles.contentHeader}>Elvin</h1>
          <p className={styles.position}>frontend developer 👨‍💻</p>
          <Link href={"/projects"} className={styles.buttonLink}>
            <button className={styles.button}>my works &#8594;</button>
          </Link>
        </div>
        {/* <div> */}
        <Stack />
        {/* </div> */}
      </div>
    </div>
  );
}

export default HomeContainer;
