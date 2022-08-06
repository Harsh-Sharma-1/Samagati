import React, { EventHandler } from "react";
import styles from "./nuebutton.module.css";

type props = {
  name: string;
};

const NueButton: React.FC<props> = ({ name }: props) => {
  return <div className={styles.container}>{name}</div>;
};

export default NueButton;
