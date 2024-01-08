"use client";

import Head from 'next/head';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
    <Head>
      <title>Step 2: Compile the Circuit</title>
      <meta name="description" content="Compile the circuit" />
    </Head>
  
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-6">Step 2: Compile the Circuit</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="mb-4">
          A default input to the circuit exists in <code className="bg-gray-100 p-1 rounded">data/inputs/defaultInput.json</code>, 
          which will be used when the circuit is compiled. Before compiling the circuit, please export enter a JSON-RPC provider URI 
          (from an RPC provider such as QuickNode, Alchemy, Infura, etc. starts with https://):
        </p>
        <pre className="bg-gray-100 p-3 rounded"><code>export PROVIDER_URI_GOERLI=&lt;your provider URI&gt;</code></pre>
        <p className="mb-4">To compile the circuit, run the following command in this project’s root directory in the same 
        terminal window with which you exported the provider URI above:</p>
        <pre className="bg-gray-100 p-3 rounded"><code>npx axiom compile axiom/circuit.ts --function nonceIncrementor --inputs 
        data/inputs/defaultInput.json --provider $PROVIDER_URI_GOERLI</code></pre>
      </div>
    </main>
  </div>
  
  );
}