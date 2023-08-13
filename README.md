# CapybaraNFT Smart Contract

CapybaraNFT is an Ethereum smart contract that allows the creation and management of non-fungible tokens (NFTs) representing adorable capybara creatures. This contract is built using the Ethereum blockchain and follows the ERC-721 standard, which is commonly used for NFTs.

## Contract Features

- **Creating NFTs:** The contract owner can create new capybara NFTs by specifying the recipient's address, token ID, and corresponding token URI.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your computer.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/kuzinkirill/CapybaraNFT.git
    ```

2. Navigate to the project directory:

    ```bash
    cd CapybaraNFT
    ```

3. Install dependencies:

    Dependencies are managed through [`package.json`](package.json). 

    ```bash
    npm install
    ```

## Configuration

1. The project configuration is defined in [`hardhat.config.js`](hardhat.config.js). It specifies the version of Solidity to use and provides network settings for Hardhat, including accounts and URLs.

2. Create a .env file in the project root directory. Fill in the necessary values:

    ```bash
    NETWORK=<network-name>
    INFURA_URL=<infura-url>
    PRIVATE_KEY=<private-key>
    ETHERSCAN_API=<etherscan-api-key>
    ```

## Usage

Deploy the contract:

    ```bash
    npx hardhat run scripts/deploy.js --network <network-name>
    ```

Replace <network-name> with the desired network name.

After deploying the smart contract, you will receive its address and the owner's address in the console.  

## Testing

The smart contract includes unit tests to ensure its functionality. Run the tests using the following command:

1. Run tests:

    ```bash
    npx hardhat test --network <network-name>
    ```