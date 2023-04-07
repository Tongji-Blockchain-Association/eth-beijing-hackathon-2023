import React from "react";
import styles from "./MediaCard.css";

let capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const MediaCard = ({ url = "https://news.sina.com.cn/", score = "4.9" }) => {
  let media_icon_path = url + "/favicon.ico";

  let pattern = /(?:[^.]+\.)?([^.\n]+)\.com/;
  let media_name = capitalizeFirstLetter(url.match(pattern)[1]);

  return (
    <div className="media-frame factlens-row">
      <img
        className="circular-square media-image"
        src={media_icon_path}
        alt={""}
      />
      <div className="media-textbox">
        <div className={"media-title "}>{media_name}</div>
        <div>
          <strong className="media-text">{score + " / 5"}</strong>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
