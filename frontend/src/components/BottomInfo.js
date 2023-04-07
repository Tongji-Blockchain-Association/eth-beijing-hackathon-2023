import React from "react";
import styles from "./BottomInfo.module.css";

const BottomInfo = ({
  label = "Find more contents con Factlens.com"
}) => {
  return (
    <div className={styles.iconOffSize40}>
      <p className={styles.label}>{label}</p>
    </div>
  );
};

export default BottomInfo;