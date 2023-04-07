import React from "react";
import styles from "./NewsScore.module.css";

const NewsScore = ({
  ellipse13 = "https://static.overlay-tech.com/assets/bab58bb8-cd83-44a4-88aa-74df3c51ce78.png",
  paragraph = "4.5/5",
  subtitle = "Sina"
}) => {
  return (
    <div className={styles.newsScore}>
      <div className={styles.top}>
        <img
          alt=""
          className={styles.ellipse13}
          src={ellipse13}
        />
        <div className={styles.heading}>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.paragraph}>
            {/* {paragraph} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsScore;