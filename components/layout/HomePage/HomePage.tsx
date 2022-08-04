import React from "react";

import Header from "./../Header";

import styles from "./home-page.module.css";

const HomePage = () => {
  return (
    <div className={styles["home-page"]}>
      <Header />
      <div className={styles["body"]}>
        <div className={styles["title-container"]}>
          <h2 className={styles.subtitle}>La mejor academia para opositores</h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
