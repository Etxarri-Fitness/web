import React from "react";

import styles from "./pricing.module.css";

const Pricing = () => {
  return (
    <div className={styles.pricing}>
      <h3>Precios</h3>
      <ul className={styles.list}>
        <li>
          <span>
            <div className={styles.basic}>Plan básico</div>
            <div className={styles.triangle}></div>
          </span>
          <span>$20/mes</span>
        </li>
        <li>
          <span>
            <div className={styles.basic} style={{ backgroundColor: "green" }}>
              Plan plus
            </div>
            <div className={styles.triangle}></div>
          </span>

          <span>$50/mes</span>
        </li>
        <li>
          <span>
            <div
              className={styles.basic}
              style={{ backgroundColor: "#ddb24c" }}
            >
              Plan plus
            </div>
            <div className={styles.triangle}></div>
          </span>
          <span>$100/mes</span>
        </li>
      </ul>

      <h3>Referals</h3>
      <p>Traete un amigo y consigue un maravilloso descuento</p>
    </div>
  );
};

export default Pricing;
