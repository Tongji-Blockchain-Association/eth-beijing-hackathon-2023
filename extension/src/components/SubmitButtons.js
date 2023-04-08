import React from "react";
import "./SubmitButtons.css";

const SubmitButtons = ({ label = "Cancel", labelTwo = "Submited" }) => {
  let shape_tick = (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="check_24px">
        <g id="&#226;&#134;&#179; Dark Color">
          <path
            id="Mask"
            d="M9.00016 16.67L4.83016 12.5L3.41016 13.91L9.00016 19.5L21.0002 7.50003L19.5902 6.09003L9.00016 16.67Z"
            fill="white"
          />
        </g>
      </g>
    </svg>
  );

  const SubmitButton = (
    <button className={"submit-button"} onClick={() => {}}>
      <div className="submit-icon">{shape_tick}</div>
      <div>
        <p className="submit-label">Submit</p>
      </div>
    </button>
  );

  const CancelButton = (
    <button className={"cancel-button"} onClick={() => {}}>
      <div>
        <p className="cancel-label">Cancel</p>
      </div>
    </button>
  );

  return (
    <div className="submit-button-group factlens-row">
      {CancelButton}
      {SubmitButton}
    </div>
  );
};

export default SubmitButtons;
