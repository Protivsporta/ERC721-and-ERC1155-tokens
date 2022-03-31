# Simple example of ERC-721 and ERC-1155 token standards implementation 

All the offchain data stored on IPFS, supported by OpenSea and LooksRare (etc)

ERC-721 verified contract address: 0xD91A474562ec9C2C126A3c5d7F93D3df2Fa58BCe

ERC-1155 verified contract address: 0x6bF597d6039F27619238574011F95052D1aa96BA

Available tasks to interact with contract:
```shell
  accounts      Prints the list of accounts
  check         Check whatever you need
  clean         Clears the cache and deletes all artifacts
  compile       Compiles the entire project, building all artifacts
  console       Opens a hardhat console
  coverage      Generates a code coverage report for tests
  create        Create NFT token on the address
  create_amount Create amount of NFT tokens on the address
  flatten       Flattens and prints contracts and their dependencies
  help          Prints this message
  node          Starts a JSON-RPC server on top of Hardhat Network
  run           Runs a user-defined script after compiling the project
  test          Runs mocha tests
  typechain     Generate Typechain typings for compiled contracts
  verify        Verifies contract on Etherscan
```

Deploy commandto rinkeby test network:
```shell
npx hardhat run scripts/deploy.ts --network rinkeby
```
