import React from "react";
import styles from "./FakeButton.module.css";

const FakeButton = ({ label = "FAKE" }) => {
  return (
    <div className={styles.fakeButton}>
      <div className={styles.layout}>
        <p className={styles.label}>{label}</p>
      </div>
    </div>
  );
};

export default FakeButton;