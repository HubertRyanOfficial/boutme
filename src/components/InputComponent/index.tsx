import React from "react";

// * modules

// * components

// * utils

import { InputComponentProps } from "./types";

import styles from "./InputComponent.module.css";

//

function InputComponent({
  placeholder,
  type,
  typeStyle,
  handleFunction,
  value,
}: InputComponentProps) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleFunction}
      className={`${styles.inputComponentContainer}  ${
        typeStyle === "outline"
          ? styles.inputComponentOutline
          : styles.inputComponentBold
      }`}
    />
  );
}

export default InputComponent;
