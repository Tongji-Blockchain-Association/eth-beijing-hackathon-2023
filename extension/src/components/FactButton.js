import React from "react";
import "./FactButton.css";

const FactButton = ({
  active = true,
  selectFact,
  selectFake,
  setSelectFact,
  setSelectFake,
}) => {
  return (
    <div
      className={
        "factbutton-button " +
        (selectFact ? "factbutton-button-select" : "factbutton-button-deselect")
      }
      onClick={() => {
        console.log(active, selectFake, selectFact);
        if (active) {
          setSelectFact(true);
          setSelectFake(false);
        }
      }}
    >
      <div className="factbutton-layout">
        <p className="factbutton-label">FACT</p>
      </div>
    </div>
  );
};

export default FactButton;
