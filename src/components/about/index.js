import React from "react";
import styles from "./index.module.css";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

function AboutContainer() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <BsGithub size={100} />
          <div className={styles.content}>
            {/* <pre>I want to see your code</pre> */}
          </div>
        </div>
        <div className={styles.card}>
          <BsLinkedin size={100} />
          <div className={styles.content}>
            {/* <pre>I am interested i your career</pre> */}
          </div>
        </div>
        <div className={styles.card}>
          <BsInstagram size={100} />
          <div className={styles.content}>
            {/* <pre>I am interested in you</pre> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContainer;
