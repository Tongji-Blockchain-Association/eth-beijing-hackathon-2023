import React from "react";
import styles from "./SubmitButtons.module.css";

const SubmitButtons = ({
  label = "Cancel",
  labelTwo = "Submited",
  shape = "https://static.overlay-tech.com/assets/54c09b66-2604-42f6-8ebb-12cd1d28eba3.svg"
}) => {
  return (
    <div className={styles.submitButtons}>
      <div className={styles.cancel}>
        <p className={styles.label}>{label}</p>
      </div>
      <div className={styles.cta}>
        <div className={styles.leftIcon}>
          <img
            alt=""
            className={styles.shape}
            src={shape}
          />
        </div>
        <div className={styles.layout}>
          <p className={styles.labelTwo}>{labelTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default SubmitButtons;