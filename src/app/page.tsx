'use client'

import { useAccount, useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import PaymentSplitterABI from '@/abi/PaymentSplitter.json';
import { useState } from "react";
import { parseEther, formatEther } from "viem";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const CONTRACT_ADDRESS = '0xEb5C7507465A4b6b10fD331fE59c492652Bb4931';

export default function Home() {
  const {isConnected} = useAccount();
  const [sendAmount, setSendAmount] = useState('');

  const {data: balance} = useReadContract({
      address: CONTRACT_ADDRESS,
      abi: PaymentSplitterABI,
      functionName: 'getBalance'
  });

  const {data: payees} = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: PaymentSplitterABI,
    functionName: 'getPayees'
  });

  const {data: shares} = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: PaymentSplitterABI,
    functionName: 'getShares'
  });


  const {writeContract, data: hash} = useWriteContract();

  const {isLoading: isSplitting} = useWaitForTransactionReceipt({ hash });


  const handleSplit = async() => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: PaymentSplitterABI,
      functionName: 'split'
    });
  };


  const handleSendEth = async() => {
    if(!sendAmount) return;

    writeContract({
      address: CONTRACT_ADDRESS,
      abi: PaymentSplitterABI,
      functionName: 'split',
      value: parseEther(sendAmount)
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Payment Splitter</h1>
          <ConnectButton />
        </div>

        {!isConnected ? (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-gray-600">Connect your wallet to get started</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Contract Balance */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Contract Balance</h2>
              <p className="text-4xl font-bold text-blue-600">
                {balance ? formatEther(balance as bigint) : '0'} ETH
              </p>
            </div>

            
          </div>
        )}
      </div>
    </main>
  );
}
