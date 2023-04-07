import React from "react";
import styles from "./Top.module.css";

const Top = () => {
  return (
    <div className={styles.top}>
      <p className={styles.title}>FACTLENS</p>
      <div className={styles.close}>
        <img
          alt=""
          className={styles.icon}
          src="https://static.overlay-tech.com/assets/b1030e59-51fa-485f-b03c-2de405534e40.svg"
        />
      </div>
    </div>
  );
};

export default Top;