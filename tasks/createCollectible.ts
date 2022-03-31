import { task } from 'hardhat/config';
import '@nomiclabs/hardhat-ethers';

task("create", "Create NFT token on the address")
  .setAction(async (taskArgs, hre) => {
    const erc721example = await hre.ethers.getContractAt("ERC721Example", process.env.ERC721_CONTRACT_ADDR!);
    await erc721example.createCollectible();
    console.log(`NFT was minted!`);
  });