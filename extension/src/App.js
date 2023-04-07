/*global chrome*/

import React, { Component } from 'react';
import { useMetaMask } from 'metamask-react';
import { MetaMaskProvider } from 'metamask-react';

import logo from './logo.svg';
import './App.css';

const App = ({ isExt }) => {
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">FactLens DAO</h1>
        <h1 className="App-title">{status}</h1>
      </header>
      <p className="App-intro">
        To get started11, edit <code>src/App.js</code> and save to reload.
      </p>
      <div>
        <button onClick={connect}>
          <div>Connect</div>
        </button>
      </div>
    </div>
  );
};

const MetaMaskApp = () => {
  return (
    <MetaMaskProvider>
      <App />
    </MetaMaskProvider>
  );
};

export default MetaMaskApp;
