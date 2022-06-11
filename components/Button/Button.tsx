import React from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href: string;
}

const Button: React.FC<Props> = ({ children, href }) => {
  return (
    <div>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </div>
  );
};

export default Button;
