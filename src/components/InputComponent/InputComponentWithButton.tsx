import React from "react";

// * modules

// * components

// * utils

import { InputComponentProps } from "./types";

import styles from "./InputComponent.module.css";

//

interface Props extends InputComponentProps {
  buttonName: string;
  buttonFunction: () => void;
}

function InputComponent({
  placeholder,
  type,
  buttonName,
  handleFunction,
  value,
  buttonFunction,
}: Props) {
  return (
    <div className={styles.inputComponentOutLineSelf}>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleFunction}
        id={styles.inputComponentOutLineSelfItem}
      />
      <button onClick={() => buttonFunction()}>{buttonName}</button>
    </div>
  );
}

export default InputComponent;
