## Personal Locker – Hardhat 3 Beta Assignment

This project is part of an assignment to explore the new features of **Hardhat 3 Beta**, using Solidity, TypeScript, and Ethers.js to deploy and interact with a smart contract on the Sepolia testnet.

### Project Overview

* A simple smart contract called `PersonalLocker.sol` is written and deployed.
* Hardhat 3 Beta was used for scripting, testing, and deploying.
* Includes both deployment and interaction scripts (read, write, update message).


###  How to Run Tests

To run the tests in this project:

```bash
npx hardhat test
```

You can also run specific test types:

```bash
npx hardhat test solidity
npx hardhat test mocha
```

---

### Deployment on Sepolia

To deploy the contract to the Sepolia testnet:

```bash
npx hardhat ignition deploy --network sepolia ignition/modules/Counter.ts
```

> Make sure your `.env` file includes a funded Sepolia private key as `SEPOLIA_PRIVATE_KEY`.

---

##  Assignment Submission

* **Name:** Manjushree D
* **Registration Number:** `<Your Reg. No>`
* **Status:**  Completed
* **Console Output:**

  ```txt
  Contract deployed to: 0x123...abc
  Message updated to: "Assignment Completed"
  Current message: Assignment Completed
  ```
* **Deployed Contract Address (Sepolia):** `0x123...abc`
* **Transaction Hash (Update):** `0xabc...def`

