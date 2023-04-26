import { ethers, run } from "hardhat";

async function main() {
  const PBTokenAddress = "0xE1d12a118B5321e79fCeCdFE9b966bb1C48A7904";
  const args = [PBTokenAddress];
  const Staking = await ethers.getContractFactory("Staking");
  const staking = await Staking.deploy(PBTokenAddress);
  await staking.deployed();

  console.log(`Staking contract address is ${staking.address}`);
  verify(staking.address, args);
}

async function verify(contractAddress: any, args: any) {
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
      contract: "contracts/Staking.sol:Staking",
    });
  } catch (error) {
    console.error(error);
  }
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// PBTOken is 0x77A1d4cA4Fb4ddF3C4AaC176c067C0Da9c2867eF
// Stating address is : 0x3Fe96bd6Ba01eB14ed878E6Bf2198bd767151A72
