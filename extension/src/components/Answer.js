import React from "react";
import styles from "./Answer.module.css";

const Answer = ({
  avatar = "https://static.overlay-tech.com/assets/825c0a83-d24c-4fad-9b72-22403c6da806.png",
  paragraph = "Lorem ipsum dolor sit amet, consectetur",
  subtitle = "Tiger expert",
  titile = "Guy Hawkins"
}) => {
  return (
    <div className={styles.answer}>
      <div className={styles.top}>
        <img
          alt=""
          className={styles.avatar}
          src={avatar}
        />
        <div className={styles.answer}>
          <p className={styles.titile}>{titile}</p>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </div>
      <p className={styles.paragraph}>{paragraph}</p>
    </div>
  );
};

export default Answer;