/*global chrome*/

import React, { Component, useEffect } from "react";
import { WalletProvider, useWallet } from "./context/WalletProvider";

import ReaderPage from "./pages/ReaderPage";

import logo from "./logo.svg";
import "./App.css";

const App = ({ isExt }) => {
  const { isAuthenticated, connectWallet, disconnectWallet, account } =
    useWallet();

  console.log({ isAuthenticated, account });

  return (
    <ReaderPage />
    // <div className="App">
    //   <header className="App-header">
    //     <h1 className="App-title">FactLens DAO</h1>
    //     <h1 className="App-title">{isAuthenticated ? account : ""}</h1>
    //   </header>
    //   <p className="App-intro">
    //     To get started11, edit <code>src/App.js</code> and save to reload.
    //   </p>
    //   <div>
    //     <button
    //       onClick={isAuthenticated ? disconnectWallet : connectWallet}
    //       id="wallet-connect"
    //     >
    //       {isAuthenticated ? "Disconnect Wallet" : "Connect Wallet"}
    //     </button>
    //   </div>
    // </div>
  );
};

const MetaMaskApp = () => {
  return (
    <WalletProvider>
      <App />
    </WalletProvider>
  );
};

export default MetaMaskApp;
