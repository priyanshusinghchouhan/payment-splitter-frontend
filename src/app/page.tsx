'use client'

import { useAccount, useReadContract, useSendTransaction, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import PaymentSplitterABI from '@/abi/PaymentSplitter.json';
import { useEffect, useState } from "react";
import { parseEther, formatEther } from "viem";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const CONTRACT_ADDRESS = '0xe5ec1Cb22489c032b6EA821461d12F6cE9a6434B';

export default function Home() {
  const {isConnected} = useAccount();
  const [sendAmount, setSendAmount] = useState('');
  const { sendTransaction } = useSendTransaction();

  const {data: balance} = useReadContract({
      address: CONTRACT_ADDRESS,
      abi: PaymentSplitterABI,
      functionName: 'getBalance'
  });

  console.log("balance", balance);

  const {data: payees} = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: PaymentSplitterABI,
    functionName: 'getPayees'
  })as { data: readonly string[] | undefined };
  console.log("Payees: ", payees);

  const {data: shares} = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: PaymentSplitterABI,
    functionName: 'getShares'
  })as { data: readonly bigint[] | undefined };
  console.log("Payees: ", shares);


  const {writeContract, data: hash} = useWriteContract();

  const {isLoading: isSplitting} = useWaitForTransactionReceipt({ hash });


  const handleSplit = async() => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: PaymentSplitterABI,
      functionName: 'split'
    });
  };


const handleSendEth = async () => {
  if (!sendAmount) return;

  sendTransaction({
    to: CONTRACT_ADDRESS,
    value: parseEther(sendAmount),
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
              <h2 className="text-2xl text-black font-semibold mb-4">Contract Balance</h2>
              <p className="text-4xl font-bold text-blue-600">
                {balance ? formatEther(balance as bigint) : '0'} ETH
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6" >
              <h2 className="text-2xl text-black font-semibold mb-4">Payment Distribution</h2>
              <div className="space-y-3">
                {payees && shares && (payees as string[]).map((payee, i) => (
                  <div key={i} className="flex justify-between text-black items-center p-3 bg-gray-50 rounded">
                    <span className="font-mono text-sm">{payee}</span>
                    <span className="font-semibold">{(shares as bigint[])[i].toString()}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Send ETH */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl text-black font-semibold mb-4">Send ETH to Contract</h2>
                <input
                  type="number"
                  step="0.001"
                  placeholder="Amount in ETH"
                  value={sendAmount}
                  onChange={(e) => setSendAmount(e.target.value)}
                  className="w-full text-black p-3 border border-gray-300 rounded mb-4"
                />
                <button
                  onClick={handleSendEth}
                  className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
                >
                  Send ETH
                </button>
              </div>

              {/* Split Payment */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl text-black font-semibold mb-4">Split Payment</h2>
                <p className="text-gray-600 mb-4">
                  Distribute {balance ? formatEther(balance as bigint) : '0'} ETH to all payees
                </p>
                <button
                  onClick={handleSplit}
                  disabled={isSplitting || !balance}
                  className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700 transition disabled:bg-gray-400"
                >
                  {isSplitting ? 'Splitting...' : 'Split Now'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
