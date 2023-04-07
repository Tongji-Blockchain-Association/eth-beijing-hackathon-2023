import React from "react";
import "./ToggleButton.css";
import Toggle from "react-toggle";
import "react-toggle/style.css";

const ToggleButton = ({ isValidator, setIsValidator }) => {
  return (
    <div className="toggle-container">
      <div className="toggle-text">Validator Mode</div>
      <Toggle
        defaultChecked={isValidator}
        onChange={() => {setIsValidator(!isValidator)}}
        icons={false}
        className="toggle-button"
      />
    </div>
  );
};

export default ToggleButton;
