import React from "react";

import Button from "components/Button";

import styles from "./about-me.module.css";

const AboutMe = () => {
  return (
    <div className={styles["about-me"]}>
      <h3>Sobre mi</h3>
      <p>
        Mi nombre es Iñigo Montoya, tu mataste a mi padre, preparate a morir.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quos
        voluptate amet nemo, dolorum officiis id esse iure libero autem, ea
        rerum consequuntur mollitia eaque. Voluptatum eaque reprehenderit est
        aperiam.
      </p>
      <span className={styles["more-about-me"]}>
        <Button href="/MoreAboutMe">Mas Sobre Mi</Button>
      </span>
    </div>
  );
};

export default AboutMe;
