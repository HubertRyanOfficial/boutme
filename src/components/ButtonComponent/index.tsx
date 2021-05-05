import React from "react";

// * modules

// * components

// * utils

import { ButtonComponentProps } from "./types";
import styles from "./ButtonComponent.module.css";

//

function ButtonComponent({ handleFunction, children }: ButtonComponentProps) {
  return (
    <button
      className={styles.buttonComponentContainer}
      onClick={() => handleFunction()}
    >
      {children}
    </button>
  );
}

export default ButtonComponent;
// + Desenvolvido por Hubert Ryan
