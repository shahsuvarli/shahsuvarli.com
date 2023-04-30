import React from "react";
import styles from "./footer.module.css";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/shahsuvarli">
        <FaGithub />
      </a>
      <a href="https://twitter.com/shahsuvarli">
        <FaTwitter />
      </a>
      <a href="https://linkedin.com/in/shahsuvarli">
        <FaLinkedin />
      </a>
    </footer>
  );
}

export default Footer;
