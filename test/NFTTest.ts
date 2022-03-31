import { ethers } from 'hardhat';
import { expect } from 'chai';
import { ERC721Example, ERC1155Example } from '../typechain';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';

const tokenURI = "ipfs://QmUtXDnnuyopcC66jeCJgbvXZEsakqXXYsfyLbwdUNbHqw";

describe("ERC721Example", function() {
    let erc721: ERC721Example;
    let owner: SignerWithAddress;
    let minter: SignerWithAddress;

    beforeEach(async function() {
        [owner, minter] = await ethers.getSigners();

        const ERC721 = await ethers.getContractFactory("ERC721Example");
        erc721 = await ERC721.deploy();
        await erc721.deployed();
    })

    it("Should be deployed", async function() {
        expect(erc721.address).to.be.properAddress;
    })

    it("Should mint one NFT token", async function() {
        await erc721.connect(minter).createCollectible();

        const nftOwner = await erc721.ownerOf(0);

        expect(nftOwner).to.equal(minter.address);
    })

    it("Should return token URI", async function() {
        await erc721.connect(minter).createCollectible();

        const token0URI = await erc721.tokenURI(0);

        expect(token0URI).to.equal(tokenURI);
    })

    it("Should return true value about ERC-165 interface support", async function() {
        expect(await erc721.supportsInterface("0x01ffc9a7"))
        .to.equal(true);
    })
})
describe("ERC1155Example", function() {
    let erc1155: ERC1155Example;
    let owner: SignerWithAddress;
    let minter: SignerWithAddress;

    beforeEach(async function() {
        [owner, minter] = await ethers.getSigners();

        const ERC1155 = await ethers.getContractFactory("ERC1155Example");
        erc1155 = await ERC1155.deploy();
        await erc1155.deployed();
    })

    it("Should be deployed", async function() {
        expect(erc1155.address).to.be.properAddress;
    })

    it("Should mint 2 NFT tokens of 0 ID", async function() {
        await erc1155.connect(minter).createCollectible(0, 2);
        const balanceOf = await erc1155.balanceOf(minter.address, 0);

        expect(balanceOf).to.equal(2);
    })

    it("Should return true value about ERC-165 interface support", async function() {
        expect(await erc1155.supportsInterface("0x01ffc9a7"))
        .to.equal(true);
    })

    /*it("Should set default URI for all tokens ID", async function() {
        await erc1155._setBaseURI("default");

        const tokenID0URI = await erc1155.uri(0);

        expect(tokenID0URI).to.equal("default");
    })*/
})
