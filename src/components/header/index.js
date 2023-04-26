import React from "react";
import styles from "./header.module.css";
import Logo from "../../../public/images/logo.jpg";
import Image from "next/image";
import Link from "next/link";

function Header({ handleMenu, menu }) {
  const handleShowModal = () => {
    handleMenu(true);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src={Logo} alt="Dummy Logo" className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        <div className={styles.burgerMenu} onClick={handleShowModal}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>

        <ul className={styles.navList}>
          {menu.map((item) => {
            <li className={styles.navItem} key={item.id}>
              <Link href={item.link} className={styles.navLink}>
                {item.name}
              </Link>
            </li>;
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
