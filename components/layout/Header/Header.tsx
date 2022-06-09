import React from "react";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.title}>
      <h1>Etxarri</h1>
      <h1 style={{ color: "#eeeeee" }}>Fitness</h1>
    </header>
  );
};

export default Header;
