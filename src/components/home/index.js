import React from "react";
import styles from "./home.module.css";
import Image from "next/image";
import profile from '../../../public/images/profile.png'

function HomeContainer() {
  return (
    <div className={styles.homeContainer}>
      {/* <Image src={profile} width={'20%'} alt="profile image"/> */}
      {/* <h1>Frontend Developer</h1>
      <h5>
        Transforming dreams into digital reality with the power of code and
        creativity.
      </h5>
      <p className={styles.description}>
        Experienced Frontend Developer with skills in JavaScript, HTML, CSS,
        ReactJS, and Next.js. Creating user-friendly websites and applications
        is my passion.
      </p> */}
    </div>
  );
}

export default HomeContainer;
