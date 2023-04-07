import React from "react";
import styles from "./TableRow.module.css";

const TableRow = ({ subtitle = "Reader Mode" }) => {
  return (
    <div className={styles.tableRow}>
      <div className={styles.content}>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.rightContent}>
          <div className={styles.switch}>
            <div className={styles.knob} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableRow;