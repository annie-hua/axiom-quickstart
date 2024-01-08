"use client";

import Head from 'next/head';
import InteractiveCodeDisplay from '../components/InteractiveCodeDisplay';

export default function Page() {
  const solutionCode2 = `
    uint256 blockNumber = uint256(axiomResults[0]);
    address addr = address(uint160(uint256(axiomResults[1])));
    uint256 nonceInc = uint256(axiomResults[2]);

    blockToAddrToNonceInc[blockNumber][addr] = nonceInc;

    emit NonceIncrementStored(blockNumber, addr, nonceInc);
  `;
  return (<div className="min-h-screen bg-gray-50">
    <Head>
      <title>Step 3: Fill Out the Callback Function</title>
      <meta name="description" content="Fill out the callback function" />
    </Head>

    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-6">Step 3: Fill Out the Callback Function</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="mb-4">The smart contract template located in src/CounterIncrementor.sol contains a callback function...</p>
        <InteractiveCodeDisplay solutionCode={solutionCode2} />
      </div>
    </main>
  </div>

  );
}