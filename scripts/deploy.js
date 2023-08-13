const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  
  const CapybaraNFT = await hre.ethers.getContractFactory("CapybaraNFT");
  const capybaraNFT = await CapybaraNFT.deploy();

  await capybaraNFT.deployed();

  console.log("CapybaraNFT:", capybaraNFT.address);
  console.log("Owner:", deployer.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
