/*global chrome*/

import React, { Component, useEffect } from "react";
import { WalletProvider } from "./context/WalletProvider";

import ExtensionPage from "./pages/ExtensionPage";

import "./App.css";

const MetaMaskApp = ({ isExt }) => {
  return (
    <WalletProvider>
      <ExtensionPage isExt={isExt} />
    </WalletProvider>
  );
};

export default MetaMaskApp;
