import React from "react";
import "./MediaCard.css";

let capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const MediaCard = ({ score = "4.9" }) => {
  let url = window.location.hostname;

  console.log(url);
  let media_icon_path = "/favicon.ico";

  let pattern = /(?:[^.]+\.)?([^.\n]+)\.(com|cn|net|org)/;

  let media_name;
  if (url.match(pattern)?.[1])
    media_name = capitalizeFirstLetter(url.match(pattern)[1]);
  else media_name = "Media";

  media_name = media_name.substr(0, 4);

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
