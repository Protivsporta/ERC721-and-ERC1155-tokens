//SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.13;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract ERC721Example is ERC721URIStorage, AccessControl {

    uint256 public tokenId;
    string baseTokenURI = "ipfs://QmUtXDnnuyopcC66jeCJgbvXZEsakqXXYsfyLbwdUNbHqw";
    bytes32 public constant ADMIN = keccak256(abi.encodePacked("ADMIN"));

    constructor () ERC721 ("Valera", "VGCG"){
        tokenId = 0;
        _grantRole(ADMIN, msg.sender);
    }

    function createCollectible() public {
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, baseTokenURI);
        tokenId += 1;
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        return super.tokenURI(_tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, AccessControl) returns (bool) {
        return
        interfaceId == type(IERC721).interfaceId ||
        interfaceId == type(IERC721Metadata).interfaceId ||
        super.supportsInterface(interfaceId);
    }
}
