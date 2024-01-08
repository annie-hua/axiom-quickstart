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
        <title>Step 4: Sending a Query</title>
        <meta name="description" content="Sending a Query" />
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-6">Step 4: Sending a Query</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          {renderWalletButton()}
          Sending a Query<br />
          Now that this Next.js dApp includes the Axiom circuit file, we can go ahead
          and have the user connect their wallet, which will then pass their address as an input to the circuit. The user’s browser generates a local client-side proof, which we send as an on-chain Query to the Axiom ZK prover to aggregate into a ZK proof that can be verified on-chain. We ask the user to submit 0.0205 ETH with their Query, which covers the cost of the proving and the callback.<br />
          <BuildQuery
            inputs={{
              address: connected,
              blockNumber: 1,
            }}
            callbackAddress={connected}
            callbackExtraData={bytes32(connected)}
            refundee={connected}
          />
        </div>
      </main>
    </div>
  );
}