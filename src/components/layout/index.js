import React from "react";
import Header from "../header";
import Footer from "../footer";
import styles from './layout.module.css'

function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
