# Payment Splitter 💸

A decentralized payment splitter built on Ethereum that automatically distributes funds to multiple recipients based on predefined percentages.

## 🚀 Live Demo

- **Frontend:** [https://your-vercel-url-here.vercel.app](https://payment-splitter-drab.vercel.app/)
- **Smart Contract (Sepolia):** [0xe5ec1Cb22489c032b6EA821461d12F6cE9a6434B](https://sepolia.etherscan.io/address/0xe5ec1Cb22489c032b6EA821461d12F6cE9a6434B)

## ✨ Features

- Split payments between multiple addresses with custom percentages
- Automatic distribution with a single transaction
- No dust left behind - rounding handled correctly
- Real-time balance updates
- Secure wallet integration via RainbowKit

## 🛠️ Tech Stack

**Smart Contract:**
- Solidity ^0.8.20
- Foundry for development and testing
- Deployed on Ethereum Sepolia testnet
- Comprehensive test suite (8+ test cases)

**Frontend:**
- Next.js 14 with TypeScript
- Wagmi v2 + Viem for blockchain interaction
- RainbowKit for wallet connection
- TailwindCSS for styling

## 📊 Contract Details

**Current Configuration:**
- Payee 1: 50% (0x5EfE9a92A38c93Ef29A4f08a7Fb7d1FEC60d8a30)
- Payee 2: 30% (0x664aad60bf20754413713C19D01c41BeF17FC9a9)
- Payee 3: 20% (0xA9703E70cc378cCefC27CdEF608483033aF45C16)

## 🎯 How It Works

1. Connect your wallet
2. Send ETH to the contract address
3. Click "Split Now" to distribute funds
4. Each payee automatically receives their percentage

