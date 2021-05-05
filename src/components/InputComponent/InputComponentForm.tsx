import React from "react";

// * modules

// * components

// * utils

import { InputComponentProps } from "./types";

import styles from "./InputComponent.module.css";

//

function InputComponentForm({
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
      style={{ marginTop: "5px", marginBottom: "5px" }}
    />
  );
}

export default InputComponentForm;
