import React from "react";
import "./FakeButton.css";

const FakeButton = ({ active = true, selectFact }) => {
  return (
    <div className="fakebutton-button fakebutton-button-select">
      <div className="fakebutton-layout">
        <p className="fakebutton-label">FAKE</p>
      </div>
    </div>
  );
};

export default FakeButton;
