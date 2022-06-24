import React from "react";

import Button from "components/Button";
import GeneralButton from "components/GeneralButton";

import styles from "styles/MoreAboutMe.module.css";

import type { NextPage } from "next";

const MoreAboutMe: NextPage = () => {
  return (
    <div className={styles["more-about-me"]}>
      <h1>Mas Sobre Mi</h1>
      <div className={styles["text-container"]}>
        <p className={styles["text-light"]}>
          Etxarri puto vago, aqui deberia ir el texto que te pedi hace meses.
          Pero, como eres un olgazan ahora yo tengo que meter este texto de
          mierda para ver como quedaria el texto. Que no se repita XD
        </p>
        <p className={styles["text-light"]}>PD Zorionak pelau</p>
        <p className={styles["text-light"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          obcaecati dolores deserunt vel ducimus est iste, quibusdam inventore
          incidunt consequuntur officia, eius earum culpa temporibus,
          necessitatibus voluptate expedita in. Perferendis!
        </p>
      </div>
      <Button href="/">
        <GeneralButton>Volver</GeneralButton>
      </Button>
    </div>
  );
};

export default MoreAboutMe;
