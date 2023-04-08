import React from "react";
import "./EvidenceBox.css";

const EvidenceBox = ({}) => {
  return (
    <textarea
      className="evidence-frame evidence-text"
      defaultValue="Type in your EVIDENCE (optional)"
      warp="hard"
    ></textarea>
  );
};

export default EvidenceBox;
