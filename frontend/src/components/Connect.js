import React from "react";
import styles from "./Connect.module.css";

const Connect = ({
  label = "Connected",
  shape = "https://static.overlay-tech.com/assets/4ae7445b-bb02-4454-916e-0ad28a4a6c19.svg"
}) => {
  return (
    <div className={styles.connect}>
      <div className={styles.leftIcon}>
        <img alt="" className={styles.shape} src={shape} />
      </div>
      <div className={styles.layout}>
        <p className={styles.label}>{label}</p>
      </div>
    </div>
  );
};

export default Connect;