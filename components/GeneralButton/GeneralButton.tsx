import React from "react";

import styles from "./general-button.module.css";

interface Props {
  children: React.ReactNode;
}

const GeneralButton: React.FC<Props> = ({ children }) => {
  return <button className={styles["general-button"]}>{children}</button>;
};

export default GeneralButton;
