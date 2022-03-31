import { task } from 'hardhat/config';
import '@nomiclabs/hardhat-ethers';

task("create_amount", "Create amount of NFT tokens on the address")
    .addParam("tokenid", "Token id to create")
    .addParam("amount", "Amount of NFT tokens to stake")
    .setAction(async (taskArgs, hre) => {
    const erc1155example = await hre.ethers.getContractAt("ERC1155Example", process.env.ERC1155_CONTRACT_ADDR!);
    await erc1155example.createCollectible(taskArgs.tokenid, taskArgs.amount);
    console.log(`${taskArgs.amount} NFT was minted!`);
  });