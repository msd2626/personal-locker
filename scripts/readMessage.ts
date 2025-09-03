import pkg from "hardhat";
const { ethers } = pkg;

async function main() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";  // Your deployed contract address

  const contract = await ethers.getContractAt("PersonalLocker", contractAddress);

  const message = await contract.getMessage();
  console.log("Current message:", message);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
