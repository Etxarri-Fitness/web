import React, { Fragment } from "react";

import styles from "./home-page.module.css";

const HomePage = () => {
  return (
    <div className={styles["home-page"]}>
      <div className={styles.title}>
        <h1>Etxarri</h1>
        <h1 style={{ color: "#eeeeee" }}>Fitness</h1>
      </div>
      <div className={styles["body"]}>
        <h2 className={styles.subtitle}>La mejor academia para opositores</h2>
      </div>
    </div>
  );
};

export default HomePage;
