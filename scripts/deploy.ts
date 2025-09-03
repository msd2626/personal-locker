import hardhat from "hardhat";
const { ethers } = hardhat;

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with account:", deployer.address);

  const Locker = await ethers.getContractFactory("PersonalLocker");

  const contract = await Locker.deploy("My Name is Manjunath", "supersecret");

  await contract.waitForDeployment();

  const address = await contract.getAddress();

  console.log("✅ Contract deployed to:", address);
}

main().catch((error) => {
  console.error("❌ Error deploying contract:", error);
  process.exitCode = 1;
});
