import React from "react";
import styles from "./emailInput.module.css";
type props = {
  placeholder: string;
  onChange: any;
};

const EmailInput: React.FC<props> = ({ placeholder, onChange }: props) => {
  return (
    <input
      type="email"
      className={styles.EmailInput}
      placeholder={placeholder}
      onChange={(a) => onChange(a.target.value)}
    ></input>
  );
};

export default EmailInput;
