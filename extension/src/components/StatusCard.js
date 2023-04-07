import React from "react";
import styles from "./StatusCard.css";

const StatusCard = ({ status = "voting", X = 124, Y = 37 }) => {
  let icon_path = {
    voting: "/content/voting.png",
    fact: "/content/fact.png",
    fake: "/content/fake.png",
  };

  let status_text = {
    voting: "In Voting",
    fact: "FACT News",
    fake: "FAKE News",
  };

  let status_color_class = {
    voting: "status-color-voting",
    fact: "status-color-fact",
    fake: "status-color-fake",
  };

  return (
    <div className="status-frame row">
      <img
        className="circular-square status-image"
        src={icon_path[status]}
        alt={""}
      />
      <div className="status-textbox">
        <div className={"status-title " + status_color_class[status]}>
          {status_text[status]}
        </div>
        <div className={styles.paragraph}>
          <strong className="status-text status-color-fact">{X}</strong>
          <strong className="status-text">{" voted for "}</strong>
          <strong className="status-text status-color-fact">FACT</strong>
          <br />
          <strong className="status-text status-color-fake">{Y}</strong>
          <strong className="status-text">{" voted for "}</strong>
          <strong className="status-text status-color-fake">FAKE</strong>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
