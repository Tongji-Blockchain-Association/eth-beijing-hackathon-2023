/*global chrome*/
import React from "react";
import "./CommentBox.css";

const CommentRow = ({ name, avatar, badges, comment }) => {
  return (
    // <div>
    //   <img
    //     className="circular-square status-image"
    //     src={icon_path[status]}
    //     alt={""}
    //   />
    //   <div className="status-textbox">
    //     <div className={"status-title " + status_color_class[status]}>
    //       {status_text[status]}
    //     </div>
    //     <div>
    //       <strong className="status-text status-color-fact">{X}</strong>
    //       <strong className="status-text">{" voted for "}</strong>
    //       <strong className="status-text status-color-fact">FACT</strong>
    //       <br />
    //       <strong className="status-text status-color-fake">{Y}</strong>
    //       <strong className="status-text">{" voted for "}</strong>
    //       <strong className="status-text status-color-fake">FAKE</strong>
    //     </div>
    //   </div>
    // </div>
    <></>
  );
};

const CommentBox = () => {
  return <div className="comment-frame"></div>;
};

export default CommentBox;
