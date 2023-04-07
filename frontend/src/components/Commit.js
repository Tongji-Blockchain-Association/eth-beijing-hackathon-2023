import React from "react";
import styles from "./Commit.module.css";
import Delete from "./DeleteButton.js";

const Commit = ({
  text = "Details about event",
  textTwo = "Details about event",
  title = "Evidence"
}) => {
  return (
    <div className={styles.commit}>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <div className={styles.textField}>
          <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.textFieldTwo}>
          <p className={styles.text}>{textTwo}</p>
        </div>
      </div> 
      {/* <Delete/> */}
    </div>
    
  );
};

export default Commit;