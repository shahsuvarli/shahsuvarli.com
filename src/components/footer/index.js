import React from "react";
import styles from "./footer.module.css";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <p>© 2023 My Portfolio. All rights reserved.</p>
      </div>
      <div className={styles.right}>
        <a href="https://github.com/myusername">
          <FaGithub />
        </a>
        <a href="https://twitter.com/myusername">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com/in/myusername">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
