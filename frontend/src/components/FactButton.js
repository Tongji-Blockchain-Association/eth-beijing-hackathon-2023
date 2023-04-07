import React from "react";
import styles from "./FactButton.module.css";

const FactButton = ({ label = "FACT" }) => {
  return (
    <div className={styles.factButton}>
      <div className={styles.layout}>
        <p className={styles.label}>{label}</p>
      </div>
    </div>
  );
};

export default FactButton;