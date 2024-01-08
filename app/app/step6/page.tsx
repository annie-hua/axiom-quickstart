"use client";

import Head from 'next/head';
import ConnectWallet from "../components/ui/ConnectWallet";
import BuildQuery from "../components/BuildQuery";
import { bytes32 } from "../lib/utils";
interface SearchParams {
  [key: string]: string | string[] | undefined;
}
export default function Page({ searchParams }: { searchParams: SearchParams }) {

  const connected = searchParams?.connected as string ?? "";
  const blockNumber = searchParams?.blockNumber as string ?? "";

  const renderWalletButton = () => {
    return <ConnectWallet connected={connected} />;
  }
  const solutionCode2 = `
    uint256 blockNumber = uint256(axiomResults[0]);
    address addr = address(uint160(uint256(axiomResults[1])));
    uint256 nonceInc = uint256(axiomResults[2]);

    blockToAddrToNonceInc[blockNumber][addr] = nonceInc;

    emit NonceIncrementStored(blockNumber, addr, nonceInc);
  `;
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Step 6: What’s next</title>
        <meta name="description" content="What’s next" />
      </Head>
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-6">Step 6: What’s next</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="mb-4">Now that this is complete, we will want to deploy a contract on-chain that handles the callback. Please see the examples-v2 repository for additional examples.</p>
        </div>
      </main>
    </div>
  );
}