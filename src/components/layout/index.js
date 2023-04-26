import React from "react";
import Header from "../header";
import Footer from "../footer";
import styles from "./layout.module.css";
import menu from "../../utils/menu.json";

function Layout({ children }) {
  const [showModal, setShowModal] = React.useState(false);

  const handleChildMenu = (value) => {
    setShowModal(value);
  };

  return (
    <div className={styles.layoutContainer}>
      <div
        className={`${styles.menuModal} ${
          showModal ? styles.showModal : undefined
        }`}
      >
        <div className={styles.modalCard}>
          <ul>
            {menu.map((item) => {
              <li key={item.id}>{item.name}</li>;
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
