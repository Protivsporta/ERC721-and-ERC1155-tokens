//SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.13;

import "./ERC1155URIStorage.sol";

contract ERC1155Example is ERC1155URIStorage {
    uint256 public constant MIR = 0;
    
    string tokenURI0 = "ipfs://QmWmtKNRakj45cdfd6CvcuFRccyq5otpKKV7GZiPLrTPoU";

    constructor () ERC1155(tokenURI0) {
        createCollectible(MIR, 1);
    }

    function createCollectible(uint256 _tokenID, uint256 _amount) public {
        _mint(msg.sender, _tokenID, _amount, "");
    }
}