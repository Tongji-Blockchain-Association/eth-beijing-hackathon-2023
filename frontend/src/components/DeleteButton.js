import React from "react";
import styles from "./DeleteButton.module.css";

const DeleteButton = ({ label = "NO" }) => {
  return (
    <div className={styles.deleteButton}>
      <div className={styles.layout}>
        <p className={styles.label}>{label}</p>
      </div>
    </div>
  );
};

export default DeleteButton;