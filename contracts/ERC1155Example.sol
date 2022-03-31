//SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.13;

import "./ERC1155URIStorage.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract ERC1155Example is ERC1155URIStorage, AccessControl {
    uint256 public constant MIR = 0;
    uint256 public constant NOWAR = 1;

    string tokenURI0 = "ipfs://QmWmtKNRakj45cdfd6CvcuFRccyq5otpKKV7GZiPLrTPoU";
    string tokenURI1 = "ipfs://QmPw9YvizrWTtNvsrop26ohGsat73zEjKkvXNTmvQDnBas";

    bytes32 public constant ADMIN = keccak256(abi.encodePacked("ADMIN"));

    constructor () ERC1155(tokenURI0) {
        _grantRole(ADMIN, msg.sender);
        _setURI(MIR, tokenURI0);
        _setURI(NOWAR, tokenURI1);
    }

    function createCollectible(uint256 _tokenID, uint256 _amount) public {
        _mint(msg.sender, _tokenID, _amount, "");
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC1155, AccessControl) returns (bool) {
        return
        interfaceId == type(IERC1155).interfaceId ||
        interfaceId == type(IERC1155MetadataURI).interfaceId ||
        super.supportsInterface(interfaceId);
    }
}