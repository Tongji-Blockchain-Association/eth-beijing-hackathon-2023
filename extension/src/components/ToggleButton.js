import React from "react";
import "./ToggleButton.css";
import Toggle from "react-toggle";
import "react-toggle/style.css";

const ToggleButton = ({ label = "Connected" }) => {
  return (
    <div className="toggle-container">
      <div className="toggle-text">Validator Mode</div>
      <Toggle
        defaultChecked={true}
        onChange={() => {}}
        icons={false}
        className="toggle-button"
      />
    </div>
  );
};

export default ToggleButton;
