
import Web3 from 'web3';
const infuraId = '2dd9e224bd6e480297e9fe43a9b606dd';
const web3 = new Web3(`https://mainnet.infura.io/v3/${infuraId}`);

// ... the rest of your test

const contractAddress = '0xBD960F0A5Be3487A56258678695D77c3518A4d07';
// const YourContractABI = require('./FDToken.json');

import { FDAddress, ULTokenAddress, VoteAddress, FDAbi, ULAbi, VoteAbi } from './index.mjs';
const YourContractABI=FDAddress;

const yourContract = new web3.eth.Contract(YourContractABI, contractAddress);
// console.log("yourContract:")
console.log( yourContract.methods)


async function getBalance(address) {
  const balance = await yourContract.methods.balanceOf(address).call();

}

getBalance('0xBD960F0A5Be3487A56258678695D77c3518A4d07');
console.log ("success");