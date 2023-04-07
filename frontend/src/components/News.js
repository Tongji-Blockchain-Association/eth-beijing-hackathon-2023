import React from "react";
import styles from "./News.module.css";

const News = ({
  avatar = "https://static.overlay-tech.com/assets/efd5a7d2-a8ee-446b-9c2c-3c2a945d32b2.png",
  subtitle = "FACT News",
  X = 1024,
  Y = 37,
}) => {
  return (
    <div className={styles.answer}>
      <div className={styles.top}>
        <img
          alt=""
          className={styles.avatar}
          src={avatar}
        />
        <div className={styles.heading}>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.paragraph}>
            <strong className={styles.paragraphEmphasis0}>
              {X}
            </strong>
            <strong className={styles.paragraphEmphasis1}>
              {" "}
            </strong>
            voted for
            <strong className={styles.paragraphEmphasis1}>
              {" "}
            </strong>
            <strong className={styles.paragraphEmphasis0}>
              FACT
            </strong>
            <br/>
            <strong className={styles.paragraphEmphasis5}>
              {Y}
            </strong>
            <strong className={styles.paragraphEmphasis1}>
              {" "}
            </strong>
            <strong className={styles.paragraphEmphasis7}>
              voted for
            </strong>
            <strong className={styles.paragraphEmphasis1}>
              {" "}
            </strong>
            <strong className={styles.paragraphEmphasis5}>
              FAKE
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
