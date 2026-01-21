# Payment Splitter 💸

A decentralized payment splitter built on Ethereum that automatically distributes funds to multiple recipients based on predefined percentages.

## 🚀 Live Demo

- **Frontend:** [https://payment-splitter-drab.vercel.app/](https://payment-splitter-drab.vercel.app/)
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

## 📸 Screenshots

### **Main Interface:**

<img width="1888" height="926" alt="image" src="https://github.com/user-attachments/assets/acf01ee4-33b4-4c41-8492-82f2b34a0100" />

<img width="1892" height="927" alt="image" src="https://github.com/user-attachments/assets/1558011d-4b94-432a-821b-eaa1b459c0c7" />


### **After Funding:**

<img width="1896" height="928" alt="image" src="https://github.com/user-attachments/assets/d37552ed-7cd2-4a21-b656-9a8a5c04023a" />


### **After Split:**

<img width="1898" height="928" alt="image" src="https://github.com/user-attachments/assets/3c23f712-218d-47ab-8cb9-5962075947aa" />

<img width="1860" height="923" alt="image" src="https://github.com/user-attachments/assets/825cfd9a-4477-4fad-a19b-c7e32e67a128" />

<img width="1872" height="923" alt="image" src="https://github.com/user-attachments/assets/7564832e-7231-4592-a89b-9ac36441a01a" />

## 🚀 Local Development
```bash
# Clone the repository
git clone https://github.com/priyanshusinghchouhan/payment-splitter-contract.git
cd payment-splitter-contract

# Install contract dependencies
forge install

# Run tests
forge test -vv

# Install frontend dependencies
cd frontend
npm install

# Run development server
npm run dev
```

## 🧪 Testing

The smart contract includes comprehensive tests covering:
- Multiple payees distribution
- Custom percentage splits
- Rounding edge cases
- Invalid input validation
- Balance checks

Run tests:
```bash
forge test -vv
```

## 📝 License

MIT

## 👨‍💻 Author

Built by [Priyanshu Singh](https://github.com/priyanshusinghchouhan)

---

## **Note:** This project is deployed on Sepolia testnet for demonstration purposes.

