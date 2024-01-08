"use client";

import { shortenAddress } from '../../lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsName,
} from 'wagmi'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import Button from './Button';

export default function ConnectWallet({ connected }: { connected: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { disconnect } = useDisconnect()
  const { error } = useConnect()
  const { open } = useWeb3Modal()

  const disconnectWallet = () => {
    disconnect();
    router.replace(pathname);
  }

  useEffect(() => {
    if (isConnected && address && connected !== address && !searchParams.get("connected")) {
      router.replace(`${pathname}/?connected=${address}&${searchParams}`);
    }
  }, [address, connected, isConnected, router, pathname, searchParams]);

  if (isConnected) {
    return (
      <div className="flex justify-center items-center mt-4">

        <Button className="bg-blue-500 hover:bg-blue-700 text-gray font-bold py-2 px-4 rounded"
          onClick={() => open({ view: 'Account' })}
        >
          {ensName ? ensName : shortenAddress(address as string)}
        </Button>
      </div>

    )
  }

  return (
    <div className="flex justify-center items-center mt-4">
      <Button className="bg-blue-500 hover:bg-blue-700 text-gray font-bold py-2 px-4 rounded" onClick={() => open()}>
        Connect Wallet
      </Button>
      {error && <div className="text-red-500 mt-2">{error.message}</div>}
    </div>
  )
}
