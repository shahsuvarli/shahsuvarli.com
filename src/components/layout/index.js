import React from "react";
import Header from "../header";
import Footer from "../footer";
import styles from "./layout.module.css";
import menu from "../../utils/menu.json";
import Link from "next/link";

function Layout({ children }) {
  const [showModal, setShowModal] = React.useState(false);

  const handleChildMenu = (value) => {
    setShowModal(value);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.layoutContainer}>
      <div
        className={`${styles.menuModal} ${
          showModal ? styles.showModal : undefined
        }`}
        onClick={closeModal}
      >
        <div className={styles.modalCard}>
          <ul className={styles.menuElements}>
            {menu.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Header handleMenu={handleChildMenu} menu={menu} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
