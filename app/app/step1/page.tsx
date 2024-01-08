"use client";

import Head from 'next/head';
import InteractiveCodeDisplay from '../components/InteractiveCodeDisplay';

export default function Page() {
  const solutionCode1 =
`// Since the blockNumber is a variable input, let's add it to the results that will be sent to my callback function:
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Step 1: Description of Circuit</title>
        <meta name="description" content="Description of Circuit" />
        {/* Add link to your CSS framework or custom stylesheet here */}
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-6">Step 1: Description of Circuit</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-lg mb-4">
            This is the first step in our process where we describe the circuit to be built.
          </p>
          <p className="mb-4">
            The circuit will generate a proof of the user’s nonce and a specific block number.
            You can find the template in <code className="bg-gray-100 p-1 rounded">axiom/circuit.ts</code>.
          </p>
          <InteractiveCodeDisplay solutionCode={solutionCode1} />
        </div>
      </main>
    </div>
  );
}