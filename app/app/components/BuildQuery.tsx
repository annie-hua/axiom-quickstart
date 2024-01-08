"use client";

import { useAxiomCircuit } from "@axiom-crypto/react";
import { CircuitInputs } from "../lib/circuit/circuit";
import { useEffect } from "react";
import LoadingAnimation from "./ui/LoadingAnimation";
// import ClaimAirdropClient from "./ClaimAirdropClient";

export default function BuildQuery({
  inputs,
  callbackAddress,
  callbackExtraData,
}: {
  inputs: CircuitInputs;
  callbackAddress: string;
  callbackExtraData: string;
}) {
  const {
    build,
    builtQuery,
    setParams,
    areParamsSet
  } = useAxiomCircuit();

  useEffect(() => {
    setParams(inputs, callbackAddress, callbackExtraData);
  }, [setParams, inputs, callbackAddress, callbackExtraData]);

  const buildQuery = async () => {
    console.log("buildQuery called")
    if (!areParamsSet) {
      console.log("params not set")
      return;
    }
    console.log("building query")
    await build();
  };

  useEffect(() => {
    buildQuery();
  }, [build, areParamsSet]);

  if (!builtQuery) {
    return (
      <>
      <div className="flex flex-row items-center font-mono gap-2">
        {"Building Query"} <LoadingAnimation />
      </div>

      <div onClick={buildQuery} className="flex flex-row items-center font-mono gap-2">
        build
        </div>
        </>
    );
  }
}
