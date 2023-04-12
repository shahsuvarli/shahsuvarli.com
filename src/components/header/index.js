import React from "react";
import styles from './header.module.css'
import Logo from "../../../public/images/logo.jpg"
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src={Logo} alt="Dummy Logo" className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/projects" className={styles.navLink}>
              Projects
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/articles" className={styles.navLink}>
              Articles
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
