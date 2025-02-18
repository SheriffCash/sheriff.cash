Sheriff.cash - The Ultimate Multi-Chain Mixer 🤠

Introduction

Sheriff.cash is a privacy-focused multi-chain mixer designed to provide untraceable and secure transactions.
With built-in randomized obfuscation and clean wallet exit points, it ensures full anonymity in the crypto space.

Features:

Untraceable Mixing: Funds are split, randomized, and obfuscated through multiple layers before reaching the final recipient.

Multi-Chain Support: Compatible with Ethereum, Binance Smart Chain (BSC), and Solana.

Fair Fees: 0.7% mixing fee, used for $SHERIFF buybacks.

Free Mixing for $1000+ $SHERIFF Holders.

Repository Structure 📂

SheriffCash/
│── contracts/                     # Smart contracts (EVM & Solana)
│   ├── evm/                        # Ethereum & BSC contracts
│   │   ├── SheriffMixer.sol        # Mixing contract (EVM-based)
│   │   ├── SheriffToken.sol        # $SHERIFF token contract
│   │   ├── Interfaces.sol          # Interface definitions
│   │   ├── Utils.sol               # Helper functions (randomness, delays)
│   ├── solana/                     # Solana on-chain programs
│   │   ├── SheriffMixer.rs         # Rust-based Solana mixing program
│   │   ├── SheriffToken.rs         # Solana SPL token contract
│   │   ├── Cargo.toml               # Rust dependencies
│── frontend/                        # User interface (Web)
│── backend/                         # API & Server-side logic
│── test/                            # Unit tests for contracts
│── docs/                            # Technical documentation
│── README.md                        # Project overview

How It Works 🔒

1️⃣ Users deposit funds into the mixer contract.
2️⃣ Funds are split into random percentage chunks and moved through multiple wallets.
3️⃣ Final transfer exits from pre-funded clean wallets, ensuring complete anonymity.
4️⃣ $SHERIFF holders with 1000+ tokens receive fee-free mixing.

Getting Started 🛠️

Clone the repository:

git clone https://github.com/SheriffCash/SheriffCash.git
cd SheriffCash

Install dependencies:

npm install  # for frontend
yarn install  # for backend

Deploy contracts:

npx hardhat deploy  # for EVM contracts
anchor build  # for Solana contracts

Contribute 💡

Fork the repo

Submit a pull request

Join the discussion on Telegram or Twitter

License 📜

MIT License © 2025 Sheriff.cash

