"use client";

import { useAxiomCircuit } from "@axiom-crypto/react";
import { CircuitInputs } from "../lib/circuit/circuit";
import { useEffect } from "react";
import Button from '../components/ui/Button';

export default function BuildQuery({
  inputs,
  callbackAddress,
  callbackExtraData,
  refundee,
}: {
  inputs: CircuitInputs;
  callbackAddress: string;
  callbackExtraData: string;
  refundee: string;
}) {
  const {
    build,
    builtQuery,
    setParams,
    areParamsSet
  } = useAxiomCircuit();

  useEffect(() => {
    setParams(inputs, callbackAddress, callbackExtraData, refundee);
  }, [setParams, inputs, callbackAddress, callbackExtraData, refundee]);

  const buildQuery = async () => {
    if (!areParamsSet) {
      return;
    }
    await build();
  };
  return (
    <div className="flex justify-center items-center mt-4">
      <Button className="bg-blue-500 hover:bg-blue-700 text-gray font-bold py-2 px-4 rounded" onClick={() => buildQuery()}>
        Generate and Send Proof on Goerli
      </Button>
    </div>
  );
}
