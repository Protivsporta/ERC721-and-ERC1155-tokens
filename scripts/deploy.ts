import { ethers } from "hardhat";

async function main() {
  const [signer] = await ethers.getSigners();
  const ERC721Example = await ethers.getContractFactory("ERC721Example", signer);
  const erc721example = await ERC721Example.deploy();

  await erc721example.deployed();

  console.log("ERC721Example contract deployed to:", erc721example.address);

  const ERC1155Example = await ethers.getContractFactory("ERC1155Example", signer);
  const erc1155example = await ERC1155Example.deploy();

  await erc1155example.deployed();

  console.log(`ERC1155Example contract deployed to: ${erc1155example.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});