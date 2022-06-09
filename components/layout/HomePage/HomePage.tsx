import React from "react";

import Header from "/components/layout/Header";

import styles from "./home-page.module.css";

const HomePage = () => {
  return (
    <div className={styles["home-page"]}>
      <Header />
      <div className={styles["body"]}>
        <h2 className={styles.subtitle}>La mejor academia para opositores</h2>
      </div>
    </div>
  );
};

export default HomePage;
