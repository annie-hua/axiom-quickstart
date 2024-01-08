"use client";

import Head from 'next/head';
interface SearchParams {
  [key: string]: string | string[] | undefined;
}
export default function Page({ searchParams }: { searchParams: SearchParams }) {

  const connected = searchParams?.connected as string ?? "";
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Step 5: See status of a Query</title>
        <meta name="description" content="See status of a Query" />
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-6">Step 5: See status of a Query</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="mb-4">
            The status of any Query can be seen in <a href="https://explorer.axiom.xyz/v2/goerli" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Axiom Explorer</a>.
          </p>
        </div>
      </main>
    </div>
  );
}