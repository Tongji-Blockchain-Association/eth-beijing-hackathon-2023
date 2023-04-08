import React from "react";
import "./FactButton.css";

const FactButton = ({ active = true, selectFact }) => {
  return (
    <div className="factbutton-button factbutton-button-select">
      <div className="factbutton-layout">
        <p className="factbutton-label">FACT</p>
      </div>
    </div>
  );
};

export default FactButton;
