import React from "react";
import "./FakeButton.css";

const FakeButton = ({
  active = true,
  selectFact,
  selectFake,
  setSelectFact,
  setSelectFake,
}) => {
  return (
    <div
      className={
        "fakebutton-button " +
        (selectFake ? "fakebutton-button-select" : "fakebutton-button-deselect")
      }
      onClick={() => {
        console.log(selectFake, selectFact)
        if (active) {
          setSelectFact(false);
          setSelectFake(true);
        }
      }}
    >
      <div className="fakebutton-layout">
        <p className="fakebutton-label">FAKE</p>
      </div>
    </div>
  );
};

export default FakeButton;
