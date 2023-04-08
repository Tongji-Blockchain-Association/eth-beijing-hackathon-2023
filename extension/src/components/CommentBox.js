/*global chrome*/
import React from "react";
import "./CommentBox.css";

import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";

const CommentRow = ({ name, avatar_path, title, comment }) => {
  return (
    <div className="comment-row">
      <div className="factlens-row">
        <img
          className="circular-square comment-image"
          src={avatar_path}
          alt={""}
        />
        <div className="factlens-col comment-infobox">
          <strong className="comment-name">{name}</strong>
          <strong className="comment-title">{title}</strong>
        </div>
      </div>
      <div className="comment-content-box comment-content-text">{comment}</div>
    </div>
  );
};

const CommentBox = ({ isExt }) => {
  let avatar_path = {
    1: isExt ? chrome.runtime.getURL("static/media/avatar1.png") : avatar1,
    2: isExt ? chrome.runtime.getURL("static/media/avatar2.png") : avatar2,
  };

  return (
    <div className="comment-frame">
      <CommentRow
        name="Guy Hawkins"
        title="Tiger expert"
        comment="Lorem ipsum dolor sit amet,consectetur,Lorem ipsum dolor sit amet,consectetur..."
        avatar_path={avatar_path[1]}
      />
      <CommentRow
        name="Esther Howard"
        title="Tiger expert"
        comment="Lorem ipsum dolor sit amet,consectetur,Lorem ipsum dolor sit amet,consectetur..."
        avatar_path={avatar_path[2]}
      />
    </div>
  );
};

export default CommentBox;
