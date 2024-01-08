"use client";

import React from 'react';
import Sidebar from './components/ui/Sidebar';
import InteractiveCodeDisplay from './components/InteractiveCodeDisplay';
import ConnectWallet from "./components/ui/ConnectWallet";
import BuildQuery from "./components/BuildQuery";
import { bytes32 } from "./lib/utils";
import { Link } from 'react-router-dom';

interface PageProps {
  params: Params;
  searchParams: SearchParams;
}

interface Params {
  slug: string;
}

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

const Home: React.FC<PageProps> = ({ searchParams }) => {
  const connected = searchParams?.connected as string ?? "";
  const blockNumber = searchParams?.blockNumber as string ?? "";

  // const circuit = useAxiomCircuit();

  const renderWalletButton = () => {
    return <ConnectWallet connected={connected} />;
  }

  const solutionCode1 =
    `
  // Since the blockNumber is a variable input, let's add it to the results that will be sent to my callback function:
  addToCallback(blockNumber);
  addToCallback(address);

  const account = getAccount(blockNumber, address);
  // We add a subquery for the account nonce. Note you need to 'await'!
  const bigNonce = await account.nonce();
  // The default return value is 'CircuitValue256', but the nonce should always fit in 'uint128' so we can cast it:
  const nonce = bigNonce.toCircuitValue();

  // As an example of additional compute, we increment the nonce by 1
  const incNonce = add(nonce, constant(1));
  // We add the result to the callback
  addToCallback(incNonce);
  `;


  const solutionCode2 = `
    uint256 blockNumber = uint256(axiomResults[0]);
    address addr = address(uint160(uint256(axiomResults[1])));
    uint256 nonceInc = uint256(axiomResults[2]);

    blockToAddrToNonceInc[blockNumber][addr] = nonceInc;

    emit NonceIncrementStored(blockNumber, addr, nonceInc);
  `;
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-6">Axiom dApp Interactive Tutorial</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          In this interactive tutorial, we will build a dApp that <span>[change description]</span>.
          The average value that we end up with can be used in a number of ways. For example:
          <ol className="list-decimal ml-4">
            <li>Gating access to a protocol</li>
            <li >Allowing a user to mint an NFT</li>
            <li >Giving a user an airdrop</li>
            <li >Updating smart contract parameters</li>
            <li >Autonomous governance</li>
            <li >Your imagination is the limit!</li>
          </ol>
          <p>To get started, follow the steps.</p>
        </div>
      </div>
    </div>
  )
}
export default Home;
