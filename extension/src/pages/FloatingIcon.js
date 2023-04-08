/*global chrome*/
import React from "react";
import "./FloatingIcon.css";

import fact_image from "../images/fact.png";
import fake_image from "../images/fake.png";
import voting_image from "../images/vote.png";

const FloatingIcon = ({ status, setExpand, isExt }) => {
//   console.log(isExt);
//   console.log(chrome.runtime.getURL("static/media/fact.png"));
  let icon_path = {
    voting: isExt
      ? chrome.runtime.getURL("static/media/vote.png")
      : voting_image,
    fact: isExt ? chrome.runtime.getURL("static/media/fact.png") : fact_image,
    fake: isExt ? chrome.runtime.getURL("static/media/fake.png") : fake_image,
  };

  return (
    <div className="">
      <img
        className="circular-square floating-image"
        src={icon_path[status]}
        alt={""}
        onClick={() => setExpand(true)}
      />
    </div>
  );
};

export default FloatingIcon;
