import React from "react";
import styles from "./header.module.css";
import Link from "next/link";

function Header({ handleMenu, menu }) {
  const handleShowModal = () => {
    handleMenu(true);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.burgerMenu} onClick={handleShowModal}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>

        <ul className={styles.navList}>
          {menu.map((item) => (
            <li key={item.id}>
              <Link href={item.link} className={styles.navLink}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
