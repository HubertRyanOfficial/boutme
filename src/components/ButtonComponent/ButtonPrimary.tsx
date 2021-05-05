import React from "react";

// * modules

// * components

// * utils

import { ButtonComponentProps } from "./types";
import styles from "./ButtonComponent.module.css";

//

function ButtonPrimary({
  handleFunction,
  children,
  outline = false,
}: ButtonComponentProps) {
  return (
    <button
      className={`${styles.buttonComponentContainer}  ${
        !outline
          ? styles.buttonComponentPrimary
          : styles.buttonComponentPrimaryOutline
      }`}
      onClick={() => handleFunction()}
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
// + Desenvolvido por Hubert Ryan
