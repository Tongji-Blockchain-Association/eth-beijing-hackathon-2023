import React from "react";
import "./ConnectButton.css";
import { useWallet } from "../context/WalletProvider";

const ConnectButton = () => {
  const { isAuthenticated, connectWallet, disconnectWallet, account } =
    useWallet();

  let shape =
    "https://static.overlay-tech.com/assets/4ae7445b-bb02-4454-916e-0ad28a4a6c19.svg";

  return (
    <button
      className="connect-button"
      onClick={isAuthenticated ? disconnectWallet : connectWallet}
    >
      <div className="connect-icon">
        <img alt="" src={shape} />
      </div>
      <div>
        <p className="connect-label">
          {isAuthenticated ? "Connected" : "Connect Wallet"}
        </p>
      </div>
    </button>
  );
};

export default ConnectButton;
