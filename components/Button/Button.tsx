import React from "react";
import Link from "next/link";

import styles from "./button.module.css";

interface Props {
  children: React.ReactNode;
  href: string;
}

const Button: React.FC<Props> = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className={styles.button}>{children}</a>
    </Link>
  );
};

export default Button;
