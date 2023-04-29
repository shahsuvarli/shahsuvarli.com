import React from "react";
import styles from "./footer.module.css";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
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
