import pkg from "hardhat";
const { ethers } = pkg;

async function main() {
  const [deployer] = await ethers.getSigners();

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Use your deployed contract address here

  const contract = await ethers.getContractAt("PersonalLocker", contractAddress);

  const tx = await contract.updateMessage("Assignment Completed", "supersecret"); // Use your actual password here
  await tx.wait();

  console.log("✅ Message updated to 'Assignment Completed'");
}

main().catch((error) => {
  console.error("❌ Error updating contract:", error);
  process.exitCode = 1;
});
