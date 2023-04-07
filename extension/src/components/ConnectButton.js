import React from "react";
import "./ConnectButton.css";
import { useWallet } from "../context/WalletProvider";

const ConnectButton = () => {
  const { isAuthenticated, connectWallet, disconnectWallet, account } =
    useWallet();

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

  let shape_cross = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
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

  return (
    <button
      className="connect-button"
      onClick={isAuthenticated ? disconnectWallet : connectWallet}
    >
      <div className="connect-icon">{shape_tick}</div>
      <div>
        <p className="connect-label">
          {isAuthenticated ? "Connected" : "Connect Wallet"}
        </p>
      </div>
    </button>
  );
};

export default ConnectButton;
