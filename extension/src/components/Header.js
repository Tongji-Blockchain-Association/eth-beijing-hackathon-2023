import React from "react";
import "./Header.css";

let shape_cross = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="close_24px">
      <g id="&#226;&#134;&#179; Dark Color">
        <path
          id="Mask"
          d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          fill="#FFFFFF"
        />
      </g>
    </g>
  </svg>
);

const Header = () => {
  return (
    <div className="row header-container">
      <div className="row">
        <p className="header-text header-text-white">FACT</p>
        <p className="header-text">LENS</p>
      </div>

      {/* <img
        className="header-logo"
        src={"/content/logo.png"}
        alt={""}
      /> */}
      <div className="header-cross">{shape_cross}</div>
    </div>
  );
};

export default Header;
