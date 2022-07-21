const CONTACT_ADDRESS = "0xE76036fc5ab4d1948B68C101D277380EEf164D6b";

const CONTACT_ABI = [
    {
        "contractName": "Interlynk",
        "abi": [
          {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "Approval",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
              }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "Transfer",
            "type": "event"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              }
            ],
            "name": "allowance",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "approve",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              }
            ],
            "name": "balanceOf",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "burn",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "burnFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "decimals",
            "outputs": [
              {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
              }
            ],
            "name": "decreaseAllowance",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
              }
            ],
            "name": "increaseAllowance",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "name",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [],
            "name": "owner",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "symbol",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "transfer",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "transferFrom",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
              }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ],
        "metadata": "{\"compiler\":{\"version\":\"0.8.15+commit.e14f2714\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burnFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"burn(uint256)\":{\"details\":\"Destroys `amount` tokens from the caller. See {ERC20-_burn}.\"},\"burnFrom(address,uint256)\":{\"details\":\"Destroys `amount` tokens from `account`, deducting from the caller's allowance. See {ERC20-_burn} and {ERC20-allowance}. Requirements: - the caller must have allowance for ``accounts``'s tokens of at least `amount`.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/interlynk.sol\":\"Interlynk\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x24b04b8aacaaf1a4a0719117b29c9c3647b1f479c5ac2a60f5ff1bb6d839c238\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://43e46da9d9f49741ecd876a269e71bc7494058d7a8e9478429998adb5bc3eaa0\",\"dweb:/ipfs/QmUtp4cqzf22C5rJ76AabKADquGWcjsc33yjYXxXC4sDvy\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34\",\"dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr\"]},\"@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol\":{\"keccak256\":\"0x0d19410453cda55960a818e02bd7c18952a5c8fe7a3036e81f0d599f34487a7b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4c0f62d3d5bef22b5ca00cc3903e7de6152cb68d2d22401a463f373cda54c00f\",\"dweb:/ipfs/QmSfzjZux7LC7NW2f7rjCXTHeFMUCWERqDkhpCTBy7kxTe\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"project:/contracts/interlynk.sol\":{\"keccak256\":\"0xc84b1a4ccf9025ba68b16ddfd907b47b911c01d83a9e5404a1c72ef7b8428550\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://787d2aa198579102f24c7b91a28bdd782454d7cb209842b04913a7364df5e92d\",\"dweb:/ipfs/QmYHeAckd7EX41mEoZF21j5gqedEgCg9wGVcFWuREBR5hQ\"]}},\"version\":1}",
        "bytecode": "0x60806040523480156200001157600080fd5b506040518060400160405280600981526020017f496e7465726c796e6b00000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f494c4b000000000000000000000000000000000000000000000000000000000081525081600390816200008f9190620005a9565b508060049081620000a19190620005a9565b505050620000c4620000b8620000df60201b60201c565b620000e760201b60201c565b620000d933620f4240620001ad60201b60201c565b620007cd565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036200021f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200021690620006f1565b60405180910390fd5b62000233600083836200032560201b60201c565b806002600082825462000247919062000742565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546200029e919062000742565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620003059190620007b0565b60405180910390a362000321600083836200032a60201b60201c565b5050565b505050565b505050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003b157607f821691505b602082108103620003c757620003c662000369565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004317fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620003f2565b6200043d8683620003f2565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200048a620004846200047e8462000455565b6200045f565b62000455565b9050919050565b6000819050919050565b620004a68362000469565b620004be620004b58262000491565b848454620003ff565b825550505050565b600090565b620004d5620004c6565b620004e28184846200049b565b505050565b5b818110156200050a57620004fe600082620004cb565b600181019050620004e8565b5050565b601f82111562000559576200052381620003cd565b6200052e84620003e2565b810160208510156200053e578190505b620005566200054d85620003e2565b830182620004e7565b50505b505050565b600082821c905092915050565b60006200057e600019846008026200055e565b1980831691505092915050565b60006200059983836200056b565b9150826002028217905092915050565b620005b4826200032f565b67ffffffffffffffff811115620005d057620005cf6200033a565b5b620005dc825462000398565b620005e98282856200050e565b600060209050601f8311600181146200062157600084156200060c578287015190505b6200061885826200058b565b86555062000688565b601f1984166200063186620003cd565b60005b828110156200065b5784890151825560018201915060208501945060208101905062000634565b868310156200067b578489015162000677601f8916826200056b565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000620006d9601f8362000690565b9150620006e682620006a1565b602082019050919050565b600060208201905081810360008301526200070c81620006ca565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200074f8262000455565b91506200075c8362000455565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000794576200079362000713565b5b828201905092915050565b620007aa8162000455565b82525050565b6000602082019050620007c760008301846200079f565b92915050565b611bfa80620007dd6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a257806395d89b411161007157806395d89b41146102a6578063a457c2d7146102c4578063a9059cbb146102f4578063dd62ed3e14610324578063f2fde38b146103545761010b565b806370a0823114610232578063715018a61461026257806379cc67901461026c5780638da5cb5b146102885761010b565b8063313ce567116100de578063313ce567146101ac57806339509351146101ca57806340c10f19146101fa57806342966c68146102165761010b565b806306fdde0314610110578063095ea7b31461012e57806318160ddd1461015e57806323b872dd1461017c575b600080fd5b610118610370565b604051610125919061119c565b60405180910390f35b61014860048036038101906101439190611257565b610402565b60405161015591906112b2565b60405180910390f35b610166610425565b60405161017391906112dc565b60405180910390f35b610196600480360381019061019191906112f7565b61042f565b6040516101a391906112b2565b60405180910390f35b6101b461045e565b6040516101c19190611366565b60405180910390f35b6101e460048036038101906101df9190611257565b610467565b6040516101f191906112b2565b60405180910390f35b610214600480360381019061020f9190611257565b61049e565b005b610230600480360381019061022b9190611381565b6104b4565b005b61024c600480360381019061024791906113ae565b6104c8565b60405161025991906112dc565b60405180910390f35b61026a610510565b005b61028660048036038101906102819190611257565b610524565b005b610290610544565b60405161029d91906113ea565b60405180910390f35b6102ae61056e565b6040516102bb919061119c565b60405180910390f35b6102de60048036038101906102d99190611257565b610600565b6040516102eb91906112b2565b60405180910390f35b61030e60048036038101906103099190611257565b610677565b60405161031b91906112b2565b60405180910390f35b61033e60048036038101906103399190611405565b61069a565b60405161034b91906112dc565b60405180910390f35b61036e600480360381019061036991906113ae565b610721565b005b60606003805461037f90611474565b80601f01602080910402602001604051908101604052809291908181526020018280546103ab90611474565b80156103f85780601f106103cd576101008083540402835291602001916103f8565b820191906000526020600020905b8154815290600101906020018083116103db57829003601f168201915b5050505050905090565b60008061040d6107a4565b905061041a8185856107ac565b600191505092915050565b6000600254905090565b60008061043a6107a4565b9050610447858285610975565b610452858585610a01565b60019150509392505050565b60006012905090565b6000806104726107a4565b9050610493818585610484858961069a565b61048e91906114d4565b6107ac565b600191505092915050565b6104a6610c80565b6104b08282610cfe565b5050565b6104c56104bf6107a4565b82610e5d565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610518610c80565b6105226000611033565b565b610536826105306107a4565b83610975565b6105408282610e5d565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461057d90611474565b80601f01602080910402602001604051908101604052809291908181526020018280546105a990611474565b80156105f65780601f106105cb576101008083540402835291602001916105f6565b820191906000526020600020905b8154815290600101906020018083116105d957829003601f168201915b5050505050905090565b60008061060b6107a4565b90506000610619828661069a565b90508381101561065e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106559061159c565b60405180910390fd5b61066b82868684036107ac565b60019250505092915050565b6000806106826107a4565b905061068f818585610a01565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610729610c80565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610798576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078f9061162e565b60405180910390fd5b6107a181611033565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361081b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610812906116c0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361088a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088190611752565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161096891906112dc565b60405180910390a3505050565b6000610981848461069a565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146109fb57818110156109ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e4906117be565b60405180910390fd5b6109fa84848484036107ac565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a70576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6790611850565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610adf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad6906118e2565b60405180910390fd5b610aea8383836110f9565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610b70576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6790611974565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c0391906114d4565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c6791906112dc565b60405180910390a3610c7a8484846110fe565b50505050565b610c886107a4565b73ffffffffffffffffffffffffffffffffffffffff16610ca6610544565b73ffffffffffffffffffffffffffffffffffffffff1614610cfc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf3906119e0565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6490611a4c565b60405180910390fd5b610d79600083836110f9565b8060026000828254610d8b91906114d4565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610de091906114d4565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e4591906112dc565b60405180910390a3610e59600083836110fe565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ecc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ec390611ade565b60405180910390fd5b610ed8826000836110f9565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610f5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5590611b70565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160026000828254610fb59190611b90565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161101a91906112dc565b60405180910390a361102e836000846110fe565b505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561113d578082015181840152602081019050611122565b8381111561114c576000848401525b50505050565b6000601f19601f8301169050919050565b600061116e82611103565b611178818561110e565b935061118881856020860161111f565b61119181611152565b840191505092915050565b600060208201905081810360008301526111b68184611163565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006111ee826111c3565b9050919050565b6111fe816111e3565b811461120957600080fd5b50565b60008135905061121b816111f5565b92915050565b6000819050919050565b61123481611221565b811461123f57600080fd5b50565b6000813590506112518161122b565b92915050565b6000806040838503121561126e5761126d6111be565b5b600061127c8582860161120c565b925050602061128d85828601611242565b9150509250929050565b60008115159050919050565b6112ac81611297565b82525050565b60006020820190506112c760008301846112a3565b92915050565b6112d681611221565b82525050565b60006020820190506112f160008301846112cd565b92915050565b6000806000606084860312156113105761130f6111be565b5b600061131e8682870161120c565b935050602061132f8682870161120c565b925050604061134086828701611242565b9150509250925092565b600060ff82169050919050565b6113608161134a565b82525050565b600060208201905061137b6000830184611357565b92915050565b600060208284031215611397576113966111be565b5b60006113a584828501611242565b91505092915050565b6000602082840312156113c4576113c36111be565b5b60006113d28482850161120c565b91505092915050565b6113e4816111e3565b82525050565b60006020820190506113ff60008301846113db565b92915050565b6000806040838503121561141c5761141b6111be565b5b600061142a8582860161120c565b925050602061143b8582860161120c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061148c57607f821691505b60208210810361149f5761149e611445565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006114df82611221565b91506114ea83611221565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561151f5761151e6114a5565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061158660258361110e565b91506115918261152a565b604082019050919050565b600060208201905081810360008301526115b581611579565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061161860268361110e565b9150611623826115bc565b604082019050919050565b600060208201905081810360008301526116478161160b565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006116aa60248361110e565b91506116b58261164e565b604082019050919050565b600060208201905081810360008301526116d98161169d565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b600061173c60228361110e565b9150611747826116e0565b604082019050919050565b6000602082019050818103600083015261176b8161172f565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006117a8601d8361110e565b91506117b382611772565b602082019050919050565b600060208201905081810360008301526117d78161179b565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061183a60258361110e565b9150611845826117de565b604082019050919050565b600060208201905081810360008301526118698161182d565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006118cc60238361110e565b91506118d782611870565b604082019050919050565b600060208201905081810360008301526118fb816118bf565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b600061195e60268361110e565b915061196982611902565b604082019050919050565b6000602082019050818103600083015261198d81611951565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006119ca60208361110e565b91506119d582611994565b602082019050919050565b600060208201905081810360008301526119f9816119bd565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611a36601f8361110e565b9150611a4182611a00565b602082019050919050565b60006020820190508181036000830152611a6581611a29565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ac860218361110e565b9150611ad382611a6c565b604082019050919050565b60006020820190508181036000830152611af781611abb565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000611b5a60228361110e565b9150611b6582611afe565b604082019050919050565b60006020820190508181036000830152611b8981611b4d565b9050919050565b6000611b9b82611221565b9150611ba683611221565b925082821015611bb957611bb86114a5565b5b82820390509291505056fea2646970667358221220f64a775569c0af773b446cd4ad91a0f8458a6cd8404190b02f4d22495cf3b45e64736f6c634300080f0033",
        "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a257806395d89b411161007157806395d89b41146102a6578063a457c2d7146102c4578063a9059cbb146102f4578063dd62ed3e14610324578063f2fde38b146103545761010b565b806370a0823114610232578063715018a61461026257806379cc67901461026c5780638da5cb5b146102885761010b565b8063313ce567116100de578063313ce567146101ac57806339509351146101ca57806340c10f19146101fa57806342966c68146102165761010b565b806306fdde0314610110578063095ea7b31461012e57806318160ddd1461015e57806323b872dd1461017c575b600080fd5b610118610370565b604051610125919061119c565b60405180910390f35b61014860048036038101906101439190611257565b610402565b60405161015591906112b2565b60405180910390f35b610166610425565b60405161017391906112dc565b60405180910390f35b610196600480360381019061019191906112f7565b61042f565b6040516101a391906112b2565b60405180910390f35b6101b461045e565b6040516101c19190611366565b60405180910390f35b6101e460048036038101906101df9190611257565b610467565b6040516101f191906112b2565b60405180910390f35b610214600480360381019061020f9190611257565b61049e565b005b610230600480360381019061022b9190611381565b6104b4565b005b61024c600480360381019061024791906113ae565b6104c8565b60405161025991906112dc565b60405180910390f35b61026a610510565b005b61028660048036038101906102819190611257565b610524565b005b610290610544565b60405161029d91906113ea565b60405180910390f35b6102ae61056e565b6040516102bb919061119c565b60405180910390f35b6102de60048036038101906102d99190611257565b610600565b6040516102eb91906112b2565b60405180910390f35b61030e60048036038101906103099190611257565b610677565b60405161031b91906112b2565b60405180910390f35b61033e60048036038101906103399190611405565b61069a565b60405161034b91906112dc565b60405180910390f35b61036e600480360381019061036991906113ae565b610721565b005b60606003805461037f90611474565b80601f01602080910402602001604051908101604052809291908181526020018280546103ab90611474565b80156103f85780601f106103cd576101008083540402835291602001916103f8565b820191906000526020600020905b8154815290600101906020018083116103db57829003601f168201915b5050505050905090565b60008061040d6107a4565b905061041a8185856107ac565b600191505092915050565b6000600254905090565b60008061043a6107a4565b9050610447858285610975565b610452858585610a01565b60019150509392505050565b60006012905090565b6000806104726107a4565b9050610493818585610484858961069a565b61048e91906114d4565b6107ac565b600191505092915050565b6104a6610c80565b6104b08282610cfe565b5050565b6104c56104bf6107a4565b82610e5d565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610518610c80565b6105226000611033565b565b610536826105306107a4565b83610975565b6105408282610e5d565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461057d90611474565b80601f01602080910402602001604051908101604052809291908181526020018280546105a990611474565b80156105f65780601f106105cb576101008083540402835291602001916105f6565b820191906000526020600020905b8154815290600101906020018083116105d957829003601f168201915b5050505050905090565b60008061060b6107a4565b90506000610619828661069a565b90508381101561065e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106559061159c565b60405180910390fd5b61066b82868684036107ac565b60019250505092915050565b6000806106826107a4565b905061068f818585610a01565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610729610c80565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610798576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078f9061162e565b60405180910390fd5b6107a181611033565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361081b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610812906116c0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361088a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088190611752565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161096891906112dc565b60405180910390a3505050565b6000610981848461069a565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146109fb57818110156109ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e4906117be565b60405180910390fd5b6109fa84848484036107ac565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a70576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6790611850565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610adf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad6906118e2565b60405180910390fd5b610aea8383836110f9565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610b70576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6790611974565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c0391906114d4565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c6791906112dc565b60405180910390a3610c7a8484846110fe565b50505050565b610c886107a4565b73ffffffffffffffffffffffffffffffffffffffff16610ca6610544565b73ffffffffffffffffffffffffffffffffffffffff1614610cfc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf3906119e0565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6490611a4c565b60405180910390fd5b610d79600083836110f9565b8060026000828254610d8b91906114d4565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610de091906114d4565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e4591906112dc565b60405180910390a3610e59600083836110fe565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ecc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ec390611ade565b60405180910390fd5b610ed8826000836110f9565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610f5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5590611b70565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160026000828254610fb59190611b90565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161101a91906112dc565b60405180910390a361102e836000846110fe565b505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561113d578082015181840152602081019050611122565b8381111561114c576000848401525b50505050565b6000601f19601f8301169050919050565b600061116e82611103565b611178818561110e565b935061118881856020860161111f565b61119181611152565b840191505092915050565b600060208201905081810360008301526111b68184611163565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006111ee826111c3565b9050919050565b6111fe816111e3565b811461120957600080fd5b50565b60008135905061121b816111f5565b92915050565b6000819050919050565b61123481611221565b811461123f57600080fd5b50565b6000813590506112518161122b565b92915050565b6000806040838503121561126e5761126d6111be565b5b600061127c8582860161120c565b925050602061128d85828601611242565b9150509250929050565b60008115159050919050565b6112ac81611297565b82525050565b60006020820190506112c760008301846112a3565b92915050565b6112d681611221565b82525050565b60006020820190506112f160008301846112cd565b92915050565b6000806000606084860312156113105761130f6111be565b5b600061131e8682870161120c565b935050602061132f8682870161120c565b925050604061134086828701611242565b9150509250925092565b600060ff82169050919050565b6113608161134a565b82525050565b600060208201905061137b6000830184611357565b92915050565b600060208284031215611397576113966111be565b5b60006113a584828501611242565b91505092915050565b6000602082840312156113c4576113c36111be565b5b60006113d28482850161120c565b91505092915050565b6113e4816111e3565b82525050565b60006020820190506113ff60008301846113db565b92915050565b6000806040838503121561141c5761141b6111be565b5b600061142a8582860161120c565b925050602061143b8582860161120c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061148c57607f821691505b60208210810361149f5761149e611445565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006114df82611221565b91506114ea83611221565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561151f5761151e6114a5565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061158660258361110e565b91506115918261152a565b604082019050919050565b600060208201905081810360008301526115b581611579565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061161860268361110e565b9150611623826115bc565b604082019050919050565b600060208201905081810360008301526116478161160b565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006116aa60248361110e565b91506116b58261164e565b604082019050919050565b600060208201905081810360008301526116d98161169d565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b600061173c60228361110e565b9150611747826116e0565b604082019050919050565b6000602082019050818103600083015261176b8161172f565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006117a8601d8361110e565b91506117b382611772565b602082019050919050565b600060208201905081810360008301526117d78161179b565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061183a60258361110e565b9150611845826117de565b604082019050919050565b600060208201905081810360008301526118698161182d565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006118cc60238361110e565b91506118d782611870565b604082019050919050565b600060208201905081810360008301526118fb816118bf565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b600061195e60268361110e565b915061196982611902565b604082019050919050565b6000602082019050818103600083015261198d81611951565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006119ca60208361110e565b91506119d582611994565b602082019050919050565b600060208201905081810360008301526119f9816119bd565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611a36601f8361110e565b9150611a4182611a00565b602082019050919050565b60006020820190508181036000830152611a6581611a29565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ac860218361110e565b9150611ad382611a6c565b604082019050919050565b60006020820190508181036000830152611af781611abb565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000611b5a60228361110e565b9150611b6582611afe565b604082019050919050565b60006020820190508181036000830152611b8981611b4d565b9050919050565b6000611b9b82611221565b9150611ba683611221565b925082821015611bb957611bb86114a5565b5b82820390509291505056fea2646970667358221220f64a775569c0af773b446cd4ad91a0f8458a6cd8404190b02f4d22495cf3b45e64736f6c634300080f0033",
        "immutableReferences": {},
        "generatedSources": [
          {
            "ast": {
              "nodeType": "YulBlock",
              "src": "0:7239:8",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "66:40:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "77:22:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "93:5:8"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "87:5:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "87:12:8"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "77:6:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "array_length_t_string_memory_ptr",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "49:5:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "59:6:8",
                      "type": ""
                    }
                  ],
                  "src": "7:99:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "140:152:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "157:1:8",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "160:77:8",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "150:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "150:88:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "150:88:8"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "254:1:8",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "257:4:8",
                              "type": "",
                              "value": "0x41"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "247:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "247:15:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "247:15:8"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "278:1:8",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "281:4:8",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "271:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "271:15:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "271:15:8"
                      }
                    ]
                  },
                  "name": "panic_error_0x41",
                  "nodeType": "YulFunctionDefinition",
                  "src": "112:180:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "326:152:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "343:1:8",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "346:77:8",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "336:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "336:88:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "336:88:8"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "440:1:8",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "443:4:8",
                              "type": "",
                              "value": "0x22"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "433:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "433:15:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "433:15:8"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "464:1:8",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "467:4:8",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "457:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "457:15:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "457:15:8"
                      }
                    ]
                  },
                  "name": "panic_error_0x22",
                  "nodeType": "YulFunctionDefinition",
                  "src": "298:180:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "535:269:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "545:22:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "559:4:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "565:1:8",
                              "type": "",
                              "value": "2"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "555:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "555:12:8"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "545:6:8"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "576:38:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "606:4:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "612:1:8",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "602:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "602:12:8"
                        },
                        "variables": [
                          {
                            "name": "outOfPlaceEncoding",
                            "nodeType": "YulTypedName",
                            "src": "580:18:8",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "653:51:8",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "667:27:8",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "length",
                                    "nodeType": "YulIdentifier",
                                    "src": "681:6:8"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "689:4:8",
                                    "type": "",
                                    "value": "0x7f"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "677:3:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "677:17:8"
                              },
                              "variableNames": [
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "667:6:8"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "outOfPlaceEncoding",
                              "nodeType": "YulIdentifier",
                              "src": "633:18:8"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "626:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "626:26:8"
                        },
                        "nodeType": "YulIf",
                        "src": "623:81:8"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "756:42:8",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x22",
                                  "nodeType": "YulIdentifier",
                                  "src": "770:16:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "770:18:8"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "770:18:8"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "outOfPlaceEncoding",
                              "nodeType": "YulIdentifier",
                              "src": "720:18:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "743:6:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "751:2:8",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "740:2:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "740:14:8"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "717:2:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "717:38:8"
                        },
                        "nodeType": "YulIf",
                        "src": "714:84:8"
                      }
                    ]
                  },
                  "name": "extract_byte_array_length",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "data",
                      "nodeType": "YulTypedName",
                      "src": "519:4:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "528:6:8",
                      "type": ""
                    }
                  ],
                  "src": "484:320:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "864:87:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "874:11:8",
                        "value": {
                          "name": "ptr",
                          "nodeType": "YulIdentifier",
                          "src": "882:3:8"
                        },
                        "variableNames": [
                          {
                            "name": "data",
                            "nodeType": "YulIdentifier",
                            "src": "874:4:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "902:1:8",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "name": "ptr",
                              "nodeType": "YulIdentifier",
                              "src": "905:3:8"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "895:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "895:14:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "895:14:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "918:26:8",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "936:1:8",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "939:4:8",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nodeType": "YulIdentifier",
                            "src": "926:9:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "926:18:8"
                        },
                        "variableNames": [
                          {
                            "name": "data",
                            "nodeType": "YulIdentifier",
                            "src": "918:4:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "array_dataslot_t_string_storage",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "ptr",
                      "nodeType": "YulTypedName",
                      "src": "851:3:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "data",
                      "nodeType": "YulTypedName",
                      "src": "859:4:8",
                      "type": ""
                    }
                  ],
                  "src": "810:141:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1001:49:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1011:33:8",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "1029:5:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1036:2:8",
                                  "type": "",
                                  "value": "31"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1025:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1025:14:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1041:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "1021:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1021:23:8"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nodeType": "YulIdentifier",
                            "src": "1011:6:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "divide_by_32_ceil",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "984:5:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "result",
                      "nodeType": "YulTypedName",
                      "src": "994:6:8",
                      "type": ""
                    }
                  ],
                  "src": "957:93:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1109:54:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1119:37:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "bits",
                              "nodeType": "YulIdentifier",
                              "src": "1144:4:8"
                            },
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1150:5:8"
                            }
                          ],
                          "functionName": {
                            "name": "shl",
                            "nodeType": "YulIdentifier",
                            "src": "1140:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1140:16:8"
                        },
                        "variableNames": [
                          {
                            "name": "newValue",
                            "nodeType": "YulIdentifier",
                            "src": "1119:8:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "shift_left_dynamic",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "bits",
                      "nodeType": "YulTypedName",
                      "src": "1084:4:8",
                      "type": ""
                    },
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1090:5:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "newValue",
                      "nodeType": "YulTypedName",
                      "src": "1100:8:8",
                      "type": ""
                    }
                  ],
                  "src": "1056:107:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1245:317:8",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1255:35:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "shiftBytes",
                              "nodeType": "YulIdentifier",
                              "src": "1276:10:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1288:1:8",
                              "type": "",
                              "value": "8"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nodeType": "YulIdentifier",
                            "src": "1272:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1272:18:8"
                        },
                        "variables": [
                          {
                            "name": "shiftBits",
                            "nodeType": "YulTypedName",
                            "src": "1259:9:8",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1299:109:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "shiftBits",
                              "nodeType": "YulIdentifier",
                              "src": "1330:9:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1341:66:8",
                              "type": "",
                              "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "shift_left_dynamic",
                            "nodeType": "YulIdentifier",
                            "src": "1311:18:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1311:97:8"
                        },
                        "variables": [
                          {
                            "name": "mask",
                            "nodeType": "YulTypedName",
                            "src": "1303:4:8",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1417:51:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "shiftBits",
                              "nodeType": "YulIdentifier",
                              "src": "1448:9:8"
                            },
                            {
                              "name": "toInsert",
                              "nodeType": "YulIdentifier",
                              "src": "1459:8:8"
                            }
                          ],
                          "functionName": {
                            "name": "shift_left_dynamic",
                            "nodeType": "YulIdentifier",
                            "src": "1429:18:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1429:39:8"
                        },
                        "variableNames": [
                          {
                            "name": "toInsert",
                            "nodeType": "YulIdentifier",
                            "src": "1417:8:8"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1477:30:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1490:5:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "mask",
                                  "nodeType": "YulIdentifier",
                                  "src": "1501:4:8"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nodeType": "YulIdentifier",
                                "src": "1497:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1497:9:8"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "1486:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1486:21:8"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1477:5:8"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1516:40:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1529:5:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "toInsert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1540:8:8"
                                },
                                {
                                  "name": "mask",
                                  "nodeType": "YulIdentifier",
                                  "src": "1550:4:8"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "1536:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1536:19:8"
                            }
                          ],
                          "functionName": {
                            "name": "or",
                            "nodeType": "YulIdentifier",
                            "src": "1526:2:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1526:30:8"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nodeType": "YulIdentifier",
                            "src": "1516:6:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "update_byte_slice_dynamic32",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1206:5:8",
                      "type": ""
                    },
                    {
                      "name": "shiftBytes",
                      "nodeType": "YulTypedName",
                      "src": "1213:10:8",
                      "type": ""
                    },
                    {
                      "name": "toInsert",
                      "nodeType": "YulTypedName",
                      "src": "1225:8:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "result",
                      "nodeType": "YulTypedName",
                      "src": "1238:6:8",
                      "type": ""
                    }
                  ],
                  "src": "1169:393:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1613:32:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1623:16:8",
                        "value": {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "1634:5:8"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nodeType": "YulIdentifier",
                            "src": "1623:7:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "cleanup_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1595:5:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulTypedName",
                      "src": "1605:7:8",
                      "type": ""
                    }
                  ],
                  "src": "1568:77:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1683:28:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1693:12:8",
                        "value": {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "1700:5:8"
                        },
                        "variableNames": [
                          {
                            "name": "ret",
                            "nodeType": "YulIdentifier",
                            "src": "1693:3:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "identity",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1669:5:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "ret",
                      "nodeType": "YulTypedName",
                      "src": "1679:3:8",
                      "type": ""
                    }
                  ],
                  "src": "1651:60:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1777:82:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1787:66:8",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "1845:5:8"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "cleanup_t_uint256",
                                    "nodeType": "YulIdentifier",
                                    "src": "1827:17:8"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1827:24:8"
                                }
                              ],
                              "functionName": {
                                "name": "identity",
                                "nodeType": "YulIdentifier",
                                "src": "1818:8:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1818:34:8"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "1800:17:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1800:53:8"
                        },
                        "variableNames": [
                          {
                            "name": "converted",
                            "nodeType": "YulIdentifier",
                            "src": "1787:9:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "convert_t_uint256_to_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1757:5:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "converted",
                      "nodeType": "YulTypedName",
                      "src": "1767:9:8",
                      "type": ""
                    }
                  ],
                  "src": "1717:142:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1912:28:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1922:12:8",
                        "value": {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "1929:5:8"
                        },
                        "variableNames": [
                          {
                            "name": "ret",
                            "nodeType": "YulIdentifier",
                            "src": "1922:3:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "prepare_store_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1898:5:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "ret",
                      "nodeType": "YulTypedName",
                      "src": "1908:3:8",
                      "type": ""
                    }
                  ],
                  "src": "1865:75:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2022:193:8",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2032:63:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "value_0",
                              "nodeType": "YulIdentifier",
                              "src": "2087:7:8"
                            }
                          ],
                          "functionName": {
                            "name": "convert_t_uint256_to_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "2056:30:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2056:39:8"
                        },
                        "variables": [
                          {
                            "name": "convertedValue_0",
                            "nodeType": "YulTypedName",
                            "src": "2036:16:8",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "slot",
                              "nodeType": "YulIdentifier",
                              "src": "2111:4:8"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "slot",
                                      "nodeType": "YulIdentifier",
                                      "src": "2151:4:8"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sload",
                                    "nodeType": "YulIdentifier",
                                    "src": "2145:5:8"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2145:11:8"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "2158:6:8"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "convertedValue_0",
                                      "nodeType": "YulIdentifier",
                                      "src": "2190:16:8"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "prepare_store_t_uint256",
                                    "nodeType": "YulIdentifier",
                                    "src": "2166:23:8"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2166:41:8"
                                }
                              ],
                              "functionName": {
                                "name": "update_byte_slice_dynamic32",
                                "nodeType": "YulIdentifier",
                                "src": "2117:27:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2117:91:8"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nodeType": "YulIdentifier",
                            "src": "2104:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2104:105:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2104:105:8"
                      }
                    ]
                  },
                  "name": "update_storage_value_t_uint256_to_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "slot",
                      "nodeType": "YulTypedName",
                      "src": "1999:4:8",
                      "type": ""
                    },
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "2005:6:8",
                      "type": ""
                    },
                    {
                      "name": "value_0",
                      "nodeType": "YulTypedName",
                      "src": "2013:7:8",
                      "type": ""
                    }
                  ],
                  "src": "1946:269:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2270:24:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2280:8:8",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2287:1:8",
                          "type": "",
                          "value": "0"
                        },
                        "variableNames": [
                          {
                            "name": "ret",
                            "nodeType": "YulIdentifier",
                            "src": "2280:3:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "zero_value_for_split_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "returnVariables": [
                    {
                      "name": "ret",
                      "nodeType": "YulTypedName",
                      "src": "2266:3:8",
                      "type": ""
                    }
                  ],
                  "src": "2221:73:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2353:136:8",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2363:46:8",
                        "value": {
                          "arguments": [],
                          "functionName": {
                            "name": "zero_value_for_split_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "2377:30:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2377:32:8"
                        },
                        "variables": [
                          {
                            "name": "zero_0",
                            "nodeType": "YulTypedName",
                            "src": "2367:6:8",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "slot",
                              "nodeType": "YulIdentifier",
                              "src": "2462:4:8"
                            },
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "2468:6:8"
                            },
                            {
                              "name": "zero_0",
                              "nodeType": "YulIdentifier",
                              "src": "2476:6:8"
                            }
                          ],
                          "functionName": {
                            "name": "update_storage_value_t_uint256_to_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "2418:43:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2418:65:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2418:65:8"
                      }
                    ]
                  },
                  "name": "storage_set_to_zero_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "slot",
                      "nodeType": "YulTypedName",
                      "src": "2339:4:8",
                      "type": ""
                    },
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "2345:6:8",
                      "type": ""
                    }
                  ],
                  "src": "2300:189:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2545:136:8",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2612:63:8",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "start",
                                    "nodeType": "YulIdentifier",
                                    "src": "2656:5:8"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2663:1:8",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "storage_set_to_zero_t_uint256",
                                  "nodeType": "YulIdentifier",
                                  "src": "2626:29:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2626:39:8"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2626:39:8"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "2565:5:8"
                            },
                            {
                              "name": "end",
                              "nodeType": "YulIdentifier",
                              "src": "2572:3:8"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "2562:2:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2562:14:8"
                        },
                        "nodeType": "YulForLoop",
                        "post": {
                          "nodeType": "YulBlock",
                          "src": "2577:26:8",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "2579:22:8",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "start",
                                    "nodeType": "YulIdentifier",
                                    "src": "2592:5:8"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2599:1:8",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "2588:3:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2588:13:8"
                              },
                              "variableNames": [
                                {
                                  "name": "start",
                                  "nodeType": "YulIdentifier",
                                  "src": "2579:5:8"
                                }
                              ]
                            }
                          ]
                        },
                        "pre": {
                          "nodeType": "YulBlock",
                          "src": "2559:2:8",
                          "statements": []
                        },
                        "src": "2555:120:8"
                      }
                    ]
                  },
                  "name": "clear_storage_range_t_bytes1",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "start",
                      "nodeType": "YulTypedName",
                      "src": "2533:5:8",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "2540:3:8",
                      "type": ""
                    }
                  ],
                  "src": "2495:186:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2766:464:8",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2792:431:8",
                          "statements": [
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "2806:54:8",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "array",
                                    "nodeType": "YulIdentifier",
                                    "src": "2854:5:8"
                                  }
                                ],
                                "functionName": {
                                  "name": "array_dataslot_t_string_storage",
                                  "nodeType": "YulIdentifier",
                                  "src": "2822:31:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2822:38:8"
                              },
                              "variables": [
                                {
                                  "name": "dataArea",
                                  "nodeType": "YulTypedName",
                                  "src": "2810:8:8",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "2873:63:8",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "dataArea",
                                    "nodeType": "YulIdentifier",
                                    "src": "2896:8:8"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "startIndex",
                                        "nodeType": "YulIdentifier",
                                        "src": "2924:10:8"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "divide_by_32_ceil",
                                      "nodeType": "YulIdentifier",
                                      "src": "2906:17:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2906:29:8"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "2892:3:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2892:44:8"
                              },
                              "variables": [
                                {
                                  "name": "deleteStart",
                                  "nodeType": "YulTypedName",
                                  "src": "2877:11:8",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "3093:27:8",
                                "statements": [
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "3095:23:8",
                                    "value": {
                                      "name": "dataArea",
                                      "nodeType": "YulIdentifier",
                                      "src": "3110:8:8"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "deleteStart",
                                        "nodeType": "YulIdentifier",
                                        "src": "3095:11:8"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "startIndex",
                                    "nodeType": "YulIdentifier",
                                    "src": "3077:10:8"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "3089:2:8",
                                    "type": "",
                                    "value": "32"
                                  }
                                ],
                                "functionName": {
                                  "name": "lt",
                                  "nodeType": "YulIdentifier",
                                  "src": "3074:2:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3074:18:8"
                              },
                              "nodeType": "YulIf",
                              "src": "3071:49:8"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "deleteStart",
                                    "nodeType": "YulIdentifier",
                                    "src": "3162:11:8"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "dataArea",
                                        "nodeType": "YulIdentifier",
                                        "src": "3179:8:8"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "name": "len",
                                            "nodeType": "YulIdentifier",
                                            "src": "3207:3:8"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "divide_by_32_ceil",
                                          "nodeType": "YulIdentifier",
                                          "src": "3189:17:8"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "3189:22:8"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "3175:3:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3175:37:8"
                                  }
                                ],
                                "functionName": {
                                  "name": "clear_storage_range_t_bytes1",
                                  "nodeType": "YulIdentifier",
                                  "src": "3133:28:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3133:80:8"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "3133:80:8"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "len",
                              "nodeType": "YulIdentifier",
                              "src": "2783:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2788:2:8",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "2780:2:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2780:11:8"
                        },
                        "nodeType": "YulIf",
                        "src": "2777:446:8"
                      }
                    ]
                  },
                  "name": "clean_up_bytearray_end_slots_t_string_storage",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "array",
                      "nodeType": "YulTypedName",
                      "src": "2742:5:8",
                      "type": ""
                    },
                    {
                      "name": "len",
                      "nodeType": "YulTypedName",
                      "src": "2749:3:8",
                      "type": ""
                    },
                    {
                      "name": "startIndex",
                      "nodeType": "YulTypedName",
                      "src": "2754:10:8",
                      "type": ""
                    }
                  ],
                  "src": "2687:543:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3299:54:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3309:37:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "bits",
                              "nodeType": "YulIdentifier",
                              "src": "3334:4:8"
                            },
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "3340:5:8"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "3330:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3330:16:8"
                        },
                        "variableNames": [
                          {
                            "name": "newValue",
                            "nodeType": "YulIdentifier",
                            "src": "3309:8:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "shift_right_unsigned_dynamic",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "bits",
                      "nodeType": "YulTypedName",
                      "src": "3274:4:8",
                      "type": ""
                    },
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "3280:5:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "newValue",
                      "nodeType": "YulTypedName",
                      "src": "3290:8:8",
                      "type": ""
                    }
                  ],
                  "src": "3236:117:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3410:118:8",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "3420:68:8",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "3469:1:8",
                                      "type": "",
                                      "value": "8"
                                    },
                                    {
                                      "name": "bytes",
                                      "nodeType": "YulIdentifier",
                                      "src": "3472:5:8"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mul",
                                    "nodeType": "YulIdentifier",
                                    "src": "3465:3:8"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3465:13:8"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "3484:1:8",
                                      "type": "",
                                      "value": "0"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nodeType": "YulIdentifier",
                                    "src": "3480:3:8"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3480:6:8"
                                }
                              ],
                              "functionName": {
                                "name": "shift_right_unsigned_dynamic",
                                "nodeType": "YulIdentifier",
                                "src": "3436:28:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3436:51:8"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "3432:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3432:56:8"
                        },
                        "variables": [
                          {
                            "name": "mask",
                            "nodeType": "YulTypedName",
                            "src": "3424:4:8",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3497:25:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "3511:4:8"
                            },
                            {
                              "name": "mask",
                              "nodeType": "YulIdentifier",
                              "src": "3517:4:8"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "3507:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3507:15:8"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nodeType": "YulIdentifier",
                            "src": "3497:6:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "mask_bytes_dynamic",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "data",
                      "nodeType": "YulTypedName",
                      "src": "3387:4:8",
                      "type": ""
                    },
                    {
                      "name": "bytes",
                      "nodeType": "YulTypedName",
                      "src": "3393:5:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "result",
                      "nodeType": "YulTypedName",
                      "src": "3403:6:8",
                      "type": ""
                    }
                  ],
                  "src": "3359:169:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3614:214:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3747:37:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "3774:4:8"
                            },
                            {
                              "name": "len",
                              "nodeType": "YulIdentifier",
                              "src": "3780:3:8"
                            }
                          ],
                          "functionName": {
                            "name": "mask_bytes_dynamic",
                            "nodeType": "YulIdentifier",
                            "src": "3755:18:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3755:29:8"
                        },
                        "variableNames": [
                          {
                            "name": "data",
                            "nodeType": "YulIdentifier",
                            "src": "3747:4:8"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3793:29:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "3804:4:8"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3814:1:8",
                                  "type": "",
                                  "value": "2"
                                },
                                {
                                  "name": "len",
                                  "nodeType": "YulIdentifier",
                                  "src": "3817:3:8"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "3810:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3810:11:8"
                            }
                          ],
                          "functionName": {
                            "name": "or",
                            "nodeType": "YulIdentifier",
                            "src": "3801:2:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3801:21:8"
                        },
                        "variableNames": [
                          {
                            "name": "used",
                            "nodeType": "YulIdentifier",
                            "src": "3793:4:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "extract_used_part_and_set_length_of_short_byte_array",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "data",
                      "nodeType": "YulTypedName",
                      "src": "3595:4:8",
                      "type": ""
                    },
                    {
                      "name": "len",
                      "nodeType": "YulTypedName",
                      "src": "3601:3:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "used",
                      "nodeType": "YulTypedName",
                      "src": "3609:4:8",
                      "type": ""
                    }
                  ],
                  "src": "3533:295:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3925:1303:8",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "3936:51:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "src",
                              "nodeType": "YulIdentifier",
                              "src": "3983:3:8"
                            }
                          ],
                          "functionName": {
                            "name": "array_length_t_string_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "3950:32:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3950:37:8"
                        },
                        "variables": [
                          {
                            "name": "newLen",
                            "nodeType": "YulTypedName",
                            "src": "3940:6:8",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "4072:22:8",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x41",
                                  "nodeType": "YulIdentifier",
                                  "src": "4074:16:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4074:18:8"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "4074:18:8"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "newLen",
                              "nodeType": "YulIdentifier",
                              "src": "4044:6:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4052:18:8",
                              "type": "",
                              "value": "0xffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "4041:2:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4041:30:8"
                        },
                        "nodeType": "YulIf",
                        "src": "4038:56:8"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "4104:52:8",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "4150:4:8"
                                }
                              ],
                              "functionName": {
                                "name": "sload",
                                "nodeType": "YulIdentifier",
                                "src": "4144:5:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4144:11:8"
                            }
                          ],
                          "functionName": {
                            "name": "extract_byte_array_length",
                            "nodeType": "YulIdentifier",
                            "src": "4118:25:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4118:38:8"
                        },
                        "variables": [
                          {
                            "name": "oldLen",
                            "nodeType": "YulTypedName",
                            "src": "4108:6:8",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "slot",
                              "nodeType": "YulIdentifier",
                              "src": "4249:4:8"
                            },
                            {
                              "name": "oldLen",
                              "nodeType": "YulIdentifier",
                              "src": "4255:6:8"
                            },
                            {
                              "name": "newLen",
                              "nodeType": "YulIdentifier",
                              "src": "4263:6:8"
                            }
                          ],
                          "functionName": {
                            "name": "clean_up_bytearray_end_slots_t_string_storage",
                            "nodeType": "YulIdentifier",
                            "src": "4203:45:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4203:67:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4203:67:8"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "4280:18:8",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4297:1:8",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "srcOffset",
                            "nodeType": "YulTypedName",
                            "src": "4284:9:8",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "4308:17:8",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4321:4:8",
                          "type": "",
                          "value": "0x20"
                        },
                        "variableNames": [
                          {
                            "name": "srcOffset",
                            "nodeType": "YulIdentifier",
                            "src": "4308:9:8"
                          }
                        ]
                      },
                      {
                        "cases": [
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "4372:611:8",
                              "statements": [
                                {
                                  "nodeType": "YulVariableDeclaration",
                                  "src": "4386:37:8",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "newLen",
                                        "nodeType": "YulIdentifier",
                                        "src": "4405:6:8"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "4417:4:8",
                                            "type": "",
                                            "value": "0x1f"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "not",
                                          "nodeType": "YulIdentifier",
                                          "src": "4413:3:8"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4413:9:8"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "and",
                                      "nodeType": "YulIdentifier",
                                      "src": "4401:3:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4401:22:8"
                                  },
                                  "variables": [
                                    {
                                      "name": "loopEnd",
                                      "nodeType": "YulTypedName",
                                      "src": "4390:7:8",
                                      "type": ""
                                    }
                                  ]
                                },
                                {
                                  "nodeType": "YulVariableDeclaration",
                                  "src": "4437:51:8",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "slot",
                                        "nodeType": "YulIdentifier",
                                        "src": "4483:4:8"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "array_dataslot_t_string_storage",
                                      "nodeType": "YulIdentifier",
                                      "src": "4451:31:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4451:37:8"
                                  },
                                  "variables": [
                                    {
                                      "name": "dstPtr",
                                      "nodeType": "YulTypedName",
                                      "src": "4441:6:8",
                                      "type": ""
                                    }
                                  ]
                                },
                                {
                                  "nodeType": "YulVariableDeclaration",
                                  "src": "4501:10:8",
                                  "value": {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "4510:1:8",
                                    "type": "",
                                    "value": "0"
                                  },
                                  "variables": [
                                    {
                                      "name": "i",
                                      "nodeType": "YulTypedName",
                                      "src": "4505:1:8",
                                      "type": ""
                                    }
                                  ]
                                },
                                {
                                  "body": {
                                    "nodeType": "YulBlock",
                                    "src": "4569:163:8",
                                    "statements": [
                                      {
                                        "expression": {
                                          "arguments": [
                                            {
                                              "name": "dstPtr",
                                              "nodeType": "YulIdentifier",
                                              "src": "4594:6:8"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "arguments": [
                                                    {
                                                      "name": "src",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "4612:3:8"
                                                    },
                                                    {
                                                      "name": "srcOffset",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "4617:9:8"
                                                    }
                                                  ],
                                                  "functionName": {
                                                    "name": "add",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4608:3:8"
                                                  },
                                                  "nodeType": "YulFunctionCall",
                                                  "src": "4608:19:8"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "mload",
                                                "nodeType": "YulIdentifier",
                                                "src": "4602:5:8"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "4602:26:8"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "sstore",
                                            "nodeType": "YulIdentifier",
                                            "src": "4587:6:8"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4587:42:8"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "4587:42:8"
                                      },
                                      {
                                        "nodeType": "YulAssignment",
                                        "src": "4646:24:8",
                                        "value": {
                                          "arguments": [
                                            {
                                              "name": "dstPtr",
                                              "nodeType": "YulIdentifier",
                                              "src": "4660:6:8"
                                            },
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "4668:1:8",
                                              "type": "",
                                              "value": "1"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "4656:3:8"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4656:14:8"
                                        },
                                        "variableNames": [
                                          {
                                            "name": "dstPtr",
                                            "nodeType": "YulIdentifier",
                                            "src": "4646:6:8"
                                          }
                                        ]
                                      },
                                      {
                                        "nodeType": "YulAssignment",
                                        "src": "4687:31:8",
                                        "value": {
                                          "arguments": [
                                            {
                                              "name": "srcOffset",
                                              "nodeType": "YulIdentifier",
                                              "src": "4704:9:8"
                                            },
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "4715:2:8",
                                              "type": "",
                                              "value": "32"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "4700:3:8"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4700:18:8"
                                        },
                                        "variableNames": [
                                          {
                                            "name": "srcOffset",
                                            "nodeType": "YulIdentifier",
                                            "src": "4687:9:8"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "condition": {
                                    "arguments": [
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "4535:1:8"
                                      },
                                      {
                                        "name": "loopEnd",
                                        "nodeType": "YulIdentifier",
                                        "src": "4538:7:8"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "lt",
                                      "nodeType": "YulIdentifier",
                                      "src": "4532:2:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4532:14:8"
                                  },
                                  "nodeType": "YulForLoop",
                                  "post": {
                                    "nodeType": "YulBlock",
                                    "src": "4547:21:8",
                                    "statements": [
                                      {
                                        "nodeType": "YulAssignment",
                                        "src": "4549:17:8",
                                        "value": {
                                          "arguments": [
                                            {
                                              "name": "i",
                                              "nodeType": "YulIdentifier",
                                              "src": "4558:1:8"
                                            },
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "4561:4:8",
                                              "type": "",
                                              "value": "0x20"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "4554:3:8"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4554:12:8"
                                        },
                                        "variableNames": [
                                          {
                                            "name": "i",
                                            "nodeType": "YulIdentifier",
                                            "src": "4549:1:8"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "pre": {
                                    "nodeType": "YulBlock",
                                    "src": "4528:3:8",
                                    "statements": []
                                  },
                                  "src": "4524:208:8"
                                },
                                {
                                  "body": {
                                    "nodeType": "YulBlock",
                                    "src": "4768:156:8",
                                    "statements": [
                                      {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "4786:43:8",
                                        "value": {
                                          "arguments": [
                                            {
                                              "arguments": [
                                                {
                                                  "name": "src",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4813:3:8"
                                                },
                                                {
                                                  "name": "srcOffset",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4818:9:8"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "4809:3:8"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "4809:19:8"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mload",
                                            "nodeType": "YulIdentifier",
                                            "src": "4803:5:8"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4803:26:8"
                                        },
                                        "variables": [
                                          {
                                            "name": "lastValue",
                                            "nodeType": "YulTypedName",
                                            "src": "4790:9:8",
                                            "type": ""
                                          }
                                        ]
                                      },
                                      {
                                        "expression": {
                                          "arguments": [
                                            {
                                              "name": "dstPtr",
                                              "nodeType": "YulIdentifier",
                                              "src": "4853:6:8"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "lastValue",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4880:9:8"
                                                },
                                                {
                                                  "arguments": [
                                                    {
                                                      "name": "newLen",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "4895:6:8"
                                                    },
                                                    {
                                                      "kind": "number",
                                                      "nodeType": "YulLiteral",
                                                      "src": "4903:4:8",
                                                      "type": "",
                                                      "value": "0x1f"
                                                    }
                                                  ],
                                                  "functionName": {
                                                    "name": "and",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4891:3:8"
                                                  },
                                                  "nodeType": "YulFunctionCall",
                                                  "src": "4891:17:8"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "mask_bytes_dynamic",
                                                "nodeType": "YulIdentifier",
                                                "src": "4861:18:8"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "4861:48:8"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "sstore",
                                            "nodeType": "YulIdentifier",
                                            "src": "4846:6:8"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4846:64:8"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "4846:64:8"
                                      }
                                    ]
                                  },
                                  "condition": {
                                    "arguments": [
                                      {
                                        "name": "loopEnd",
                                        "nodeType": "YulIdentifier",
                                        "src": "4751:7:8"
                                      },
                                      {
                                        "name": "newLen",
                                        "nodeType": "YulIdentifier",
                                        "src": "4760:6:8"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "lt",
                                      "nodeType": "YulIdentifier",
                                      "src": "4748:2:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4748:19:8"
                                  },
                                  "nodeType": "YulIf",
                                  "src": "4745:179:8"
                                },
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "slot",
                                        "nodeType": "YulIdentifier",
                                        "src": "4944:4:8"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "name": "newLen",
                                                "nodeType": "YulIdentifier",
                                                "src": "4958:6:8"
                                              },
                                              {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "4966:1:8",
                                                "type": "",
                                                "value": "2"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "mul",
                                              "nodeType": "YulIdentifier",
                                              "src": "4954:3:8"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "4954:14:8"
                                          },
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "4970:1:8",
                                            "type": "",
                                            "value": "1"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "4950:3:8"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4950:22:8"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nodeType": "YulIdentifier",
                                      "src": "4937:6:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4937:36:8"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "4937:36:8"
                                }
                              ]
                            },
                            "nodeType": "YulCase",
                            "src": "4365:618:8",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4370:1:8",
                              "type": "",
                              "value": "1"
                            }
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "5000:222:8",
                              "statements": [
                                {
                                  "nodeType": "YulVariableDeclaration",
                                  "src": "5014:14:8",
                                  "value": {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "5027:1:8",
                                    "type": "",
                                    "value": "0"
                                  },
                                  "variables": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulTypedName",
                                      "src": "5018:5:8",
                                      "type": ""
                                    }
                                  ]
                                },
                                {
                                  "body": {
                                    "nodeType": "YulBlock",
                                    "src": "5051:67:8",
                                    "statements": [
                                      {
                                        "nodeType": "YulAssignment",
                                        "src": "5069:35:8",
                                        "value": {
                                          "arguments": [
                                            {
                                              "arguments": [
                                                {
                                                  "name": "src",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "5088:3:8"
                                                },
                                                {
                                                  "name": "srcOffset",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "5093:9:8"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "5084:3:8"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "5084:19:8"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mload",
                                            "nodeType": "YulIdentifier",
                                            "src": "5078:5:8"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "5078:26:8"
                                        },
                                        "variableNames": [
                                          {
                                            "name": "value",
                                            "nodeType": "YulIdentifier",
                                            "src": "5069:5:8"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "condition": {
                                    "name": "newLen",
                                    "nodeType": "YulIdentifier",
                                    "src": "5044:6:8"
                                  },
                                  "nodeType": "YulIf",
                                  "src": "5041:77:8"
                                },
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "slot",
                                        "nodeType": "YulIdentifier",
                                        "src": "5138:4:8"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "name": "value",
                                            "nodeType": "YulIdentifier",
                                            "src": "5197:5:8"
                                          },
                                          {
                                            "name": "newLen",
                                            "nodeType": "YulIdentifier",
                                            "src": "5204:6:8"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "extract_used_part_and_set_length_of_short_byte_array",
                                          "nodeType": "YulIdentifier",
                                          "src": "5144:52:8"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "5144:67:8"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nodeType": "YulIdentifier",
                                      "src": "5131:6:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "5131:81:8"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "5131:81:8"
                                }
                              ]
                            },
                            "nodeType": "YulCase",
                            "src": "4992:230:8",
                            "value": "default"
                          }
                        ],
                        "expression": {
                          "arguments": [
                            {
                              "name": "newLen",
                              "nodeType": "YulIdentifier",
                              "src": "4345:6:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4353:2:8",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "4342:2:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4342:14:8"
                        },
                        "nodeType": "YulSwitch",
                        "src": "4335:887:8"
                      }
                    ]
                  },
                  "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "slot",
                      "nodeType": "YulTypedName",
                      "src": "3914:4:8",
                      "type": ""
                    },
                    {
                      "name": "src",
                      "nodeType": "YulTypedName",
                      "src": "3920:3:8",
                      "type": ""
                    }
                  ],
                  "src": "3833:1395:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5330:73:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "5347:3:8"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "5352:6:8"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "5340:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5340:19:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5340:19:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5368:29:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "5387:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5392:4:8",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5383:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5383:14:8"
                        },
                        "variableNames": [
                          {
                            "name": "updated_pos",
                            "nodeType": "YulIdentifier",
                            "src": "5368:11:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "5302:3:8",
                      "type": ""
                    },
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "5307:6:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulTypedName",
                      "src": "5318:11:8",
                      "type": ""
                    }
                  ],
                  "src": "5234:169:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5515:75:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "5537:6:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5545:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "5533:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5533:14:8"
                            },
                            {
                              "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "5549:33:8",
                              "type": "",
                              "value": "ERC20: mint to the zero address"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "5526:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5526:57:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5526:57:8"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "5507:6:8",
                      "type": ""
                    }
                  ],
                  "src": "5409:181:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5742:220:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "5752:74:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "5818:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5823:2:8",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "5759:58:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5759:67:8"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "5752:3:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "5924:3:8"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
                            "nodeType": "YulIdentifier",
                            "src": "5835:88:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5835:93:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5835:93:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5937:19:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "5948:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5953:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5944:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5944:12:8"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "5937:3:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "5730:3:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "5738:3:8",
                      "type": ""
                    }
                  ],
                  "src": "5596:366:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6139:248:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "6149:26:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6161:9:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6172:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6157:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6157:18:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "6149:4:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "6196:9:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6207:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "6192:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6192:17:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "6215:4:8"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "6221:9:8"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "6211:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6211:20:8"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "6185:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6185:47:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6185:47:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "6241:139:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "6375:4:8"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "6249:124:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6249:131:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "6241:4:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "6119:9:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "6134:4:8",
                      "type": ""
                    }
                  ],
                  "src": "5968:419:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6421:152:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6438:1:8",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6441:77:8",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "6431:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6431:88:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6431:88:8"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6535:1:8",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6538:4:8",
                              "type": "",
                              "value": "0x11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "6528:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6528:15:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6528:15:8"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6559:1:8",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6562:4:8",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "6552:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6552:15:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6552:15:8"
                      }
                    ]
                  },
                  "name": "panic_error_0x11",
                  "nodeType": "YulFunctionDefinition",
                  "src": "6393:180:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6623:261:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "6633:25:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "6656:1:8"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "6638:17:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6638:20:8"
                        },
                        "variableNames": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "6633:1:8"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "6667:25:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "6690:1:8"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "6672:17:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6672:20:8"
                        },
                        "variableNames": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "6667:1:8"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6830:22:8",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "6832:16:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6832:18:8"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "6832:18:8"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "6751:1:8"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6758:66:8",
                                  "type": "",
                                  "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                                },
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "6826:1:8"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "6754:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6754:74:8"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "6748:2:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6748:81:8"
                        },
                        "nodeType": "YulIf",
                        "src": "6745:107:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "6862:16:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "6873:1:8"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "6876:1:8"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6869:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6869:9:8"
                        },
                        "variableNames": [
                          {
                            "name": "sum",
                            "nodeType": "YulIdentifier",
                            "src": "6862:3:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "checked_add_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "x",
                      "nodeType": "YulTypedName",
                      "src": "6610:1:8",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nodeType": "YulTypedName",
                      "src": "6613:1:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "sum",
                      "nodeType": "YulTypedName",
                      "src": "6619:3:8",
                      "type": ""
                    }
                  ],
                  "src": "6579:305:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6955:53:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "6972:3:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "6995:5:8"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "6977:17:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6977:24:8"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "6965:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6965:37:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6965:37:8"
                      }
                    ]
                  },
                  "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "6943:5:8",
                      "type": ""
                    },
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "6950:3:8",
                      "type": ""
                    }
                  ],
                  "src": "6890:118:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7112:124:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "7122:26:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7134:9:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7145:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7130:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7130:18:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "7122:4:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "7202:6:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "7215:9:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "7226:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "7211:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7211:17:8"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "7158:43:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7158:71:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7158:71:8"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "7084:9:8",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "7096:6:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "7107:4:8",
                      "type": ""
                    }
                  ],
                  "src": "7014:222:8"
                }
              ]
            },
            "contents": "{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: mint to the zero address\")\n\n    }\n\n    function abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 31)\n        store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n}\n",
            "id": 8,
            "language": "Yul",
            "name": "#utility.yul"
          }
        ],
        "deployedGeneratedSources": [
          {
            "ast": {
              "nodeType": "YulBlock",
              "src": "0:19789:8",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "66:40:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "77:22:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "93:5:8"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "87:5:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "87:12:8"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "77:6:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "array_length_t_string_memory_ptr",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "49:5:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "59:6:8",
                      "type": ""
                    }
                  ],
                  "src": "7:99:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "208:73:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "225:3:8"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "230:6:8"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "218:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "218:19:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "218:19:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "246:29:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "265:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "270:4:8",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "261:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "261:14:8"
                        },
                        "variableNames": [
                          {
                            "name": "updated_pos",
                            "nodeType": "YulIdentifier",
                            "src": "246:11:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "180:3:8",
                      "type": ""
                    },
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "185:6:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulTypedName",
                      "src": "196:11:8",
                      "type": ""
                    }
                  ],
                  "src": "112:169:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "336:258:8",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "346:10:8",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "355:1:8",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "i",
                            "nodeType": "YulTypedName",
                            "src": "350:1:8",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "415:63:8",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "dst",
                                        "nodeType": "YulIdentifier",
                                        "src": "440:3:8"
                                      },
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "445:1:8"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "436:3:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "436:11:8"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "459:3:8"
                                          },
                                          {
                                            "name": "i",
                                            "nodeType": "YulIdentifier",
                                            "src": "464:1:8"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "455:3:8"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "455:11:8"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "449:5:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "449:18:8"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "429:6:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "429:39:8"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "429:39:8"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "376:1:8"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "379:6:8"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "373:2:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "373:13:8"
                        },
                        "nodeType": "YulForLoop",
                        "post": {
                          "nodeType": "YulBlock",
                          "src": "387:19:8",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "389:15:8",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "398:1:8"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "401:2:8",
                                    "type": "",
                                    "value": "32"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "394:3:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "394:10:8"
                              },
                              "variableNames": [
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "389:1:8"
                                }
                              ]
                            }
                          ]
                        },
                        "pre": {
                          "nodeType": "YulBlock",
                          "src": "369:3:8",
                          "statements": []
                        },
                        "src": "365:113:8"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "512:76:8",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "dst",
                                        "nodeType": "YulIdentifier",
                                        "src": "562:3:8"
                                      },
                                      {
                                        "name": "length",
                                        "nodeType": "YulIdentifier",
                                        "src": "567:6:8"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "558:3:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "558:16:8"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "576:1:8",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "551:6:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "551:27:8"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "551:27:8"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "493:1:8"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "496:6:8"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "490:2:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "490:13:8"
                        },
                        "nodeType": "YulIf",
                        "src": "487:101:8"
                      }
                    ]
                  },
                  "name": "copy_memory_to_memory",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "src",
                      "nodeType": "YulTypedName",
                      "src": "318:3:8",
                      "type": ""
                    },
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "323:3:8",
                      "type": ""
                    },
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "328:6:8",
                      "type": ""
                    }
                  ],
                  "src": "287:307:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "648:54:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "658:38:8",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "676:5:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "683:2:8",
                                  "type": "",
                                  "value": "31"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "672:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "672:14:8"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "692:2:8",
                                  "type": "",
                                  "value": "31"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nodeType": "YulIdentifier",
                                "src": "688:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "688:7:8"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "668:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "668:28:8"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nodeType": "YulIdentifier",
                            "src": "658:6:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "round_up_to_mul_of_32",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "631:5:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "result",
                      "nodeType": "YulTypedName",
                      "src": "641:6:8",
                      "type": ""
                    }
                  ],
                  "src": "600:102:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "800:272:8",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "810:53:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "857:5:8"
                            }
                          ],
                          "functionName": {
                            "name": "array_length_t_string_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "824:32:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "824:39:8"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nodeType": "YulTypedName",
                            "src": "814:6:8",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "872:78:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "938:3:8"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "943:6:8"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "879:58:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "879:71:8"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "872:3:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "985:5:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "992:4:8",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "981:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "981:16:8"
                            },
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "999:3:8"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "1004:6:8"
                            }
                          ],
                          "functionName": {
                            "name": "copy_memory_to_memory",
                            "nodeType": "YulIdentifier",
                            "src": "959:21:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "959:52:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "959:52:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1020:46:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "1031:3:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "1058:6:8"
                                }
                              ],
                              "functionName": {
                                "name": "round_up_to_mul_of_32",
                                "nodeType": "YulIdentifier",
                                "src": "1036:21:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1036:29:8"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1027:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1027:39:8"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "1020:3:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "781:5:8",
                      "type": ""
                    },
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "788:3:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "796:3:8",
                      "type": ""
                    }
                  ],
                  "src": "708:364:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1196:195:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1206:26:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1218:9:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1229:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1214:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1214:18:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "1206:4:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1253:9:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1264:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1249:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1249:17:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "1272:4:8"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1278:9:8"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "1268:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1268:20:8"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1242:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1242:47:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1242:47:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1298:86:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "1370:6:8"
                            },
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "1379:4:8"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "1306:63:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1306:78:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "1298:4:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "1168:9:8",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "1180:6:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "1191:4:8",
                      "type": ""
                    }
                  ],
                  "src": "1078:313:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1437:35:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1447:19:8",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1463:2:8",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "1457:5:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1457:9:8"
                        },
                        "variableNames": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "1447:6:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "allocate_unbounded",
                  "nodeType": "YulFunctionDefinition",
                  "returnVariables": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "1430:6:8",
                      "type": ""
                    }
                  ],
                  "src": "1397:75:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1567:28:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1584:1:8",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1587:1:8",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1577:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1577:12:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1577:12:8"
                      }
                    ]
                  },
                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                  "nodeType": "YulFunctionDefinition",
                  "src": "1478:117:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1690:28:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1707:1:8",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1710:1:8",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1700:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1700:12:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1700:12:8"
                      }
                    ]
                  },
                  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                  "nodeType": "YulFunctionDefinition",
                  "src": "1601:117:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1769:81:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1779:65:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1794:5:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1801:42:8",
                              "type": "",
                              "value": "0xffffffffffffffffffffffffffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "1790:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1790:54:8"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nodeType": "YulIdentifier",
                            "src": "1779:7:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "cleanup_t_uint160",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1751:5:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulTypedName",
                      "src": "1761:7:8",
                      "type": ""
                    }
                  ],
                  "src": "1724:126:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1901:51:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1911:35:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1940:5:8"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint160",
                            "nodeType": "YulIdentifier",
                            "src": "1922:17:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1922:24:8"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nodeType": "YulIdentifier",
                            "src": "1911:7:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "cleanup_t_address",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1883:5:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulTypedName",
                      "src": "1893:7:8",
                      "type": ""
                    }
                  ],
                  "src": "1856:96:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2001:79:8",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2058:16:8",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2067:1:8",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2070:1:8",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2060:6:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2060:12:8"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2060:12:8"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "2024:5:8"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "2049:5:8"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "cleanup_t_address",
                                    "nodeType": "YulIdentifier",
                                    "src": "2031:17:8"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2031:24:8"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "2021:2:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2021:35:8"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "2014:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2014:43:8"
                        },
                        "nodeType": "YulIf",
                        "src": "2011:63:8"
                      }
                    ]
                  },
                  "name": "validator_revert_t_address",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1994:5:8",
                      "type": ""
                    }
                  ],
                  "src": "1958:122:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2138:87:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2148:29:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "2170:6:8"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "2157:12:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2157:20:8"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2148:5:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "2213:5:8"
                            }
                          ],
                          "functionName": {
                            "name": "validator_revert_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "2186:26:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2186:33:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2186:33:8"
                      }
                    ]
                  },
                  "name": "abi_decode_t_address",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "2116:6:8",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "2124:3:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "2132:5:8",
                      "type": ""
                    }
                  ],
                  "src": "2086:139:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2276:32:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2286:16:8",
                        "value": {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2297:5:8"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nodeType": "YulIdentifier",
                            "src": "2286:7:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "cleanup_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "2258:5:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulTypedName",
                      "src": "2268:7:8",
                      "type": ""
                    }
                  ],
                  "src": "2231:77:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2357:79:8",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2414:16:8",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2423:1:8",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2426:1:8",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2416:6:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2416:12:8"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2416:12:8"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "2380:5:8"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "2405:5:8"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "cleanup_t_uint256",
                                    "nodeType": "YulIdentifier",
                                    "src": "2387:17:8"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2387:24:8"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "2377:2:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2377:35:8"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "2370:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2370:43:8"
                        },
                        "nodeType": "YulIf",
                        "src": "2367:63:8"
                      }
                    ]
                  },
                  "name": "validator_revert_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "2350:5:8",
                      "type": ""
                    }
                  ],
                  "src": "2314:122:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2494:87:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2504:29:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "2526:6:8"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "2513:12:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2513:20:8"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2504:5:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "2569:5:8"
                            }
                          ],
                          "functionName": {
                            "name": "validator_revert_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "2542:26:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2542:33:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2542:33:8"
                      }
                    ]
                  },
                  "name": "abi_decode_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "2472:6:8",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "2480:3:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "2488:5:8",
                      "type": ""
                    }
                  ],
                  "src": "2442:139:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2670:391:8",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2716:83:8",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nodeType": "YulIdentifier",
                                  "src": "2718:77:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2718:79:8"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2718:79:8"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "2691:7:8"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "2700:9:8"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "2687:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2687:23:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2712:2:8",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "2683:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2683:32:8"
                        },
                        "nodeType": "YulIf",
                        "src": "2680:119:8"
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "2809:117:8",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "2824:15:8",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2838:1:8",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "2828:6:8",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "2853:63:8",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "2888:9:8"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "2899:6:8"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "2884:3:8"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2884:22:8"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "2908:7:8"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "2863:20:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2863:53:8"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "2853:6:8"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "2936:118:8",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "2951:16:8",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2965:2:8",
                              "type": "",
                              "value": "32"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "2955:6:8",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "2981:63:8",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "3016:9:8"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "3027:6:8"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "3012:3:8"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3012:22:8"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "3036:7:8"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "2991:20:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2991:53:8"
                            },
                            "variableNames": [
                              {
                                "name": "value1",
                                "nodeType": "YulIdentifier",
                                "src": "2981:6:8"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_addresst_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "2632:9:8",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "2643:7:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "2655:6:8",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nodeType": "YulTypedName",
                      "src": "2663:6:8",
                      "type": ""
                    }
                  ],
                  "src": "2587:474:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3109:48:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3119:32:8",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "3144:5:8"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nodeType": "YulIdentifier",
                                "src": "3137:6:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3137:13:8"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "3130:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3130:21:8"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nodeType": "YulIdentifier",
                            "src": "3119:7:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "cleanup_t_bool",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "3091:5:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulTypedName",
                      "src": "3101:7:8",
                      "type": ""
                    }
                  ],
                  "src": "3067:90:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3222:50:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "3239:3:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "3259:5:8"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_bool",
                                "nodeType": "YulIdentifier",
                                "src": "3244:14:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3244:21:8"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3232:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3232:34:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3232:34:8"
                      }
                    ]
                  },
                  "name": "abi_encode_t_bool_to_t_bool_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "3210:5:8",
                      "type": ""
                    },
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "3217:3:8",
                      "type": ""
                    }
                  ],
                  "src": "3163:109:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3370:118:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3380:26:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3392:9:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3403:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3388:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3388:18:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "3380:4:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "3454:6:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "3467:9:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3478:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3463:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3463:17:8"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_bool_to_t_bool_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "3416:37:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3416:65:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3416:65:8"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "3342:9:8",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "3354:6:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "3365:4:8",
                      "type": ""
                    }
                  ],
                  "src": "3278:210:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3559:53:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "3576:3:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "3599:5:8"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "3581:17:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3581:24:8"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3569:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3569:37:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3569:37:8"
                      }
                    ]
                  },
                  "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "3547:5:8",
                      "type": ""
                    },
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "3554:3:8",
                      "type": ""
                    }
                  ],
                  "src": "3494:118:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3716:124:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3726:26:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3738:9:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3749:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3734:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3734:18:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "3726:4:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "3806:6:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "3819:9:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3830:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3815:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3815:17:8"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "3762:43:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3762:71:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3762:71:8"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "3688:9:8",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "3700:6:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "3711:4:8",
                      "type": ""
                    }
                  ],
                  "src": "3618:222:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3946:519:8",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "3992:83:8",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nodeType": "YulIdentifier",
                                  "src": "3994:77:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3994:79:8"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "3994:79:8"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "3967:7:8"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "3976:9:8"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "3963:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3963:23:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3988:2:8",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "3959:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3959:32:8"
                        },
                        "nodeType": "YulIf",
                        "src": "3956:119:8"
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "4085:117:8",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "4100:15:8",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4114:1:8",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "4104:6:8",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "4129:63:8",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "4164:9:8"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "4175:6:8"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "4160:3:8"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4160:22:8"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "4184:7:8"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "4139:20:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4139:53:8"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "4129:6:8"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "4212:118:8",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "4227:16:8",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4241:2:8",
                              "type": "",
                              "value": "32"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "4231:6:8",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "4257:63:8",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "4292:9:8"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "4303:6:8"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "4288:3:8"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4288:22:8"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "4312:7:8"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "4267:20:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4267:53:8"
                            },
                            "variableNames": [
                              {
                                "name": "value1",
                                "nodeType": "YulIdentifier",
                                "src": "4257:6:8"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "4340:118:8",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "4355:16:8",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4369:2:8",
                              "type": "",
                              "value": "64"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "4359:6:8",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "4385:63:8",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "4420:9:8"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "4431:6:8"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "4416:3:8"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4416:22:8"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "4440:7:8"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "4395:20:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4395:53:8"
                            },
                            "variableNames": [
                              {
                                "name": "value2",
                                "nodeType": "YulIdentifier",
                                "src": "4385:6:8"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_addresst_addresst_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "3900:9:8",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "3911:7:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "3923:6:8",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nodeType": "YulTypedName",
                      "src": "3931:6:8",
                      "type": ""
                    },
                    {
                      "name": "value2",
                      "nodeType": "YulTypedName",
                      "src": "3939:6:8",
                      "type": ""
                    }
                  ],
                  "src": "3846:619:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4514:43:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "4524:27:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "4539:5:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4546:4:8",
                              "type": "",
                              "value": "0xff"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "4535:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4535:16:8"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nodeType": "YulIdentifier",
                            "src": "4524:7:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "cleanup_t_uint8",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "4496:5:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulTypedName",
                      "src": "4506:7:8",
                      "type": ""
                    }
                  ],
                  "src": "4471:86:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4624:51:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "4641:3:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "4662:5:8"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint8",
                                "nodeType": "YulIdentifier",
                                "src": "4646:15:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4646:22:8"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4634:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4634:35:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4634:35:8"
                      }
                    ]
                  },
                  "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "4612:5:8",
                      "type": ""
                    },
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "4619:3:8",
                      "type": ""
                    }
                  ],
                  "src": "4563:112:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4775:120:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "4785:26:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4797:9:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4808:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4793:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4793:18:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "4785:4:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "4861:6:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "4874:9:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4885:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4870:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4870:17:8"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "4821:39:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4821:67:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4821:67:8"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "4747:9:8",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "4759:6:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "4770:4:8",
                      "type": ""
                    }
                  ],
                  "src": "4681:214:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4967:263:8",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "5013:83:8",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nodeType": "YulIdentifier",
                                  "src": "5015:77:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5015:79:8"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "5015:79:8"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "4988:7:8"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "4997:9:8"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "4984:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4984:23:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5009:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "4980:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4980:32:8"
                        },
                        "nodeType": "YulIf",
                        "src": "4977:119:8"
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "5106:117:8",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "5121:15:8",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5135:1:8",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "5125:6:8",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "5150:63:8",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "5185:9:8"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "5196:6:8"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "5181:3:8"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5181:22:8"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "5205:7:8"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "5160:20:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5160:53:8"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "5150:6:8"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "4937:9:8",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "4948:7:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "4960:6:8",
                      "type": ""
                    }
                  ],
                  "src": "4901:329:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5302:263:8",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "5348:83:8",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nodeType": "YulIdentifier",
                                  "src": "5350:77:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5350:79:8"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "5350:79:8"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "5323:7:8"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "5332:9:8"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "5319:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5319:23:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5344:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "5315:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5315:32:8"
                        },
                        "nodeType": "YulIf",
                        "src": "5312:119:8"
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "5441:117:8",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "5456:15:8",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5470:1:8",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "5460:6:8",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "5485:63:8",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "5520:9:8"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "5531:6:8"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "5516:3:8"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5516:22:8"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "5540:7:8"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "5495:20:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5495:53:8"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "5485:6:8"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_address",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "5272:9:8",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "5283:7:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "5295:6:8",
                      "type": ""
                    }
                  ],
                  "src": "5236:329:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5636:53:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "5653:3:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "5676:5:8"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "5658:17:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5658:24:8"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "5646:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5646:37:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5646:37:8"
                      }
                    ]
                  },
                  "name": "abi_encode_t_address_to_t_address_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "5624:5:8",
                      "type": ""
                    },
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "5631:3:8",
                      "type": ""
                    }
                  ],
                  "src": "5571:118:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5793:124:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "5803:26:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5815:9:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5826:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5811:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5811:18:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "5803:4:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "5883:6:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "5896:9:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5907:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "5892:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5892:17:8"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_address_to_t_address_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "5839:43:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5839:71:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5839:71:8"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "5765:9:8",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "5777:6:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "5788:4:8",
                      "type": ""
                    }
                  ],
                  "src": "5695:222:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6006:391:8",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6052:83:8",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nodeType": "YulIdentifier",
                                  "src": "6054:77:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6054:79:8"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "6054:79:8"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "6027:7:8"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "6036:9:8"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "6023:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6023:23:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6048:2:8",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "6019:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6019:32:8"
                        },
                        "nodeType": "YulIf",
                        "src": "6016:119:8"
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "6145:117:8",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "6160:15:8",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6174:1:8",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "6164:6:8",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "6189:63:8",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "6224:9:8"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "6235:6:8"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "6220:3:8"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "6220:22:8"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "6244:7:8"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "6199:20:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6199:53:8"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "6189:6:8"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "6272:118:8",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "6287:16:8",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6301:2:8",
                              "type": "",
                              "value": "32"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "6291:6:8",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "6317:63:8",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "6352:9:8"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "6363:6:8"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "6348:3:8"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "6348:22:8"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "6372:7:8"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "6327:20:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6327:53:8"
                            },
                            "variableNames": [
                              {
                                "name": "value1",
                                "nodeType": "YulIdentifier",
                                "src": "6317:6:8"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_addresst_address",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "5968:9:8",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "5979:7:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "5991:6:8",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nodeType": "YulTypedName",
                      "src": "5999:6:8",
                      "type": ""
                    }
                  ],
                  "src": "5923:474:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6431:152:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6448:1:8",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6451:77:8",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "6441:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6441:88:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6441:88:8"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6545:1:8",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6548:4:8",
                              "type": "",
                              "value": "0x22"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "6538:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6538:15:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6538:15:8"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6569:1:8",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6572:4:8",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "6562:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6562:15:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6562:15:8"
                      }
                    ]
                  },
                  "name": "panic_error_0x22",
                  "nodeType": "YulFunctionDefinition",
                  "src": "6403:180:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6640:269:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "6650:22:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "6664:4:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6670:1:8",
                              "type": "",
                              "value": "2"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "6660:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6660:12:8"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "6650:6:8"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "6681:38:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "6711:4:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6717:1:8",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "6707:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6707:12:8"
                        },
                        "variables": [
                          {
                            "name": "outOfPlaceEncoding",
                            "nodeType": "YulTypedName",
                            "src": "6685:18:8",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6758:51:8",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "6772:27:8",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "length",
                                    "nodeType": "YulIdentifier",
                                    "src": "6786:6:8"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6794:4:8",
                                    "type": "",
                                    "value": "0x7f"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "6782:3:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6782:17:8"
                              },
                              "variableNames": [
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "6772:6:8"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "outOfPlaceEncoding",
                              "nodeType": "YulIdentifier",
                              "src": "6738:18:8"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "6731:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6731:26:8"
                        },
                        "nodeType": "YulIf",
                        "src": "6728:81:8"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6861:42:8",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x22",
                                  "nodeType": "YulIdentifier",
                                  "src": "6875:16:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6875:18:8"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "6875:18:8"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "outOfPlaceEncoding",
                              "nodeType": "YulIdentifier",
                              "src": "6825:18:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "6848:6:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6856:2:8",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "6845:2:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6845:14:8"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "6822:2:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6822:38:8"
                        },
                        "nodeType": "YulIf",
                        "src": "6819:84:8"
                      }
                    ]
                  },
                  "name": "extract_byte_array_length",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "data",
                      "nodeType": "YulTypedName",
                      "src": "6624:4:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "6633:6:8",
                      "type": ""
                    }
                  ],
                  "src": "6589:320:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6943:152:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6960:1:8",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6963:77:8",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "6953:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6953:88:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6953:88:8"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7057:1:8",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7060:4:8",
                              "type": "",
                              "value": "0x11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "7050:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7050:15:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7050:15:8"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7081:1:8",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7084:4:8",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "7074:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7074:15:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7074:15:8"
                      }
                    ]
                  },
                  "name": "panic_error_0x11",
                  "nodeType": "YulFunctionDefinition",
                  "src": "6915:180:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7145:261:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "7155:25:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "7178:1:8"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "7160:17:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7160:20:8"
                        },
                        "variableNames": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "7155:1:8"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "7189:25:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "7212:1:8"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "7194:17:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7194:20:8"
                        },
                        "variableNames": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "7189:1:8"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "7352:22:8",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "7354:16:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "7354:18:8"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "7354:18:8"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "7273:1:8"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "7280:66:8",
                                  "type": "",
                                  "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                                },
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "7348:1:8"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "7276:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7276:74:8"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "7270:2:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7270:81:8"
                        },
                        "nodeType": "YulIf",
                        "src": "7267:107:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "7384:16:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "7395:1:8"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "7398:1:8"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7391:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7391:9:8"
                        },
                        "variableNames": [
                          {
                            "name": "sum",
                            "nodeType": "YulIdentifier",
                            "src": "7384:3:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "checked_add_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "x",
                      "nodeType": "YulTypedName",
                      "src": "7132:1:8",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nodeType": "YulTypedName",
                      "src": "7135:1:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "sum",
                      "nodeType": "YulTypedName",
                      "src": "7141:3:8",
                      "type": ""
                    }
                  ],
                  "src": "7101:305:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7518:118:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "7540:6:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "7548:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "7536:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7536:14:8"
                            },
                            {
                              "hexValue": "45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "7552:34:8",
                              "type": "",
                              "value": "ERC20: decreased allowance below"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "7529:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7529:58:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7529:58:8"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "7608:6:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "7616:2:8",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "7604:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7604:15:8"
                            },
                            {
                              "hexValue": "207a65726f",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "7621:7:8",
                              "type": "",
                              "value": " zero"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "7597:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7597:32:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7597:32:8"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "7510:6:8",
                      "type": ""
                    }
                  ],
                  "src": "7412:224:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7788:220:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "7798:74:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "7864:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7869:2:8",
                              "type": "",
                              "value": "37"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "7805:58:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7805:67:8"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "7798:3:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "7970:3:8"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8",
                            "nodeType": "YulIdentifier",
                            "src": "7881:88:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7881:93:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7881:93:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "7983:19:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "7994:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7999:2:8",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7990:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7990:12:8"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "7983:3:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "7776:3:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "7784:3:8",
                      "type": ""
                    }
                  ],
                  "src": "7642:366:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8185:248:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "8195:26:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "8207:9:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8218:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "8203:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8203:18:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "8195:4:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "8242:9:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "8253:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8238:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8238:17:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "8261:4:8"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "8267:9:8"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "8257:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8257:20:8"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "8231:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8231:47:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8231:47:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8287:139:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "8421:4:8"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "8295:124:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8295:131:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "8287:4:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "8165:9:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "8180:4:8",
                      "type": ""
                    }
                  ],
                  "src": "8014:419:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8545:119:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "8567:6:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "8575:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8563:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8563:14:8"
                            },
                            {
                              "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "8579:34:8",
                              "type": "",
                              "value": "Ownable: new owner is the zero a"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "8556:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8556:58:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8556:58:8"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "8635:6:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "8643:2:8",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8631:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8631:15:8"
                            },
                            {
                              "hexValue": "646472657373",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "8648:8:8",
                              "type": "",
                              "value": "ddress"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "8624:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8624:33:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8624:33:8"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "8537:6:8",
                      "type": ""
                    }
                  ],
                  "src": "8439:225:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8816:220:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "8826:74:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "8892:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8897:2:8",
                              "type": "",
                              "value": "38"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "8833:58:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8833:67:8"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "8826:3:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "8998:3:8"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
                            "nodeType": "YulIdentifier",
                            "src": "8909:88:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8909:93:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8909:93:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "9011:19:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "9022:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9027:2:8",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9018:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9018:12:8"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "9011:3:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "8804:3:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "8812:3:8",
                      "type": ""
                    }
                  ],
                  "src": "8670:366:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9213:248:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "9223:26:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "9235:9:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9246:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9231:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9231:18:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "9223:4:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "9270:9:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "9281:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "9266:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9266:17:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "9289:4:8"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "9295:9:8"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "9285:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9285:20:8"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "9259:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9259:47:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9259:47:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "9315:139:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "9449:4:8"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "9323:124:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9323:131:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "9315:4:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "9193:9:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "9208:4:8",
                      "type": ""
                    }
                  ],
                  "src": "9042:419:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9573:117:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "9595:6:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "9603:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "9591:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9591:14:8"
                            },
                            {
                              "hexValue": "45524332303a20617070726f76652066726f6d20746865207a65726f20616464",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "9607:34:8",
                              "type": "",
                              "value": "ERC20: approve from the zero add"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "9584:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9584:58:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9584:58:8"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "9663:6:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "9671:2:8",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "9659:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9659:15:8"
                            },
                            {
                              "hexValue": "72657373",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "9676:6:8",
                              "type": "",
                              "value": "ress"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "9652:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9652:31:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9652:31:8"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "9565:6:8",
                      "type": ""
                    }
                  ],
                  "src": "9467:223:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9842:220:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "9852:74:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "9918:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9923:2:8",
                              "type": "",
                              "value": "36"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "9859:58:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9859:67:8"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "9852:3:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "10024:3:8"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208",
                            "nodeType": "YulIdentifier",
                            "src": "9935:88:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9935:93:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9935:93:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "10037:19:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "10048:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10053:2:8",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10044:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10044:12:8"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "10037:3:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "9830:3:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "9838:3:8",
                      "type": ""
                    }
                  ],
                  "src": "9696:366:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10239:248:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "10249:26:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "10261:9:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10272:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10257:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10257:18:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "10249:4:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "10296:9:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "10307:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "10292:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10292:17:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "10315:4:8"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "10321:9:8"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "10311:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10311:20:8"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "10285:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10285:47:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10285:47:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "10341:139:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "10475:4:8"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "10349:124:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10349:131:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "10341:4:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "10219:9:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "10234:4:8",
                      "type": ""
                    }
                  ],
                  "src": "10068:419:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10599:115:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "10621:6:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "10629:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "10617:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10617:14:8"
                            },
                            {
                              "hexValue": "45524332303a20617070726f766520746f20746865207a65726f206164647265",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "10633:34:8",
                              "type": "",
                              "value": "ERC20: approve to the zero addre"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "10610:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10610:58:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10610:58:8"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "10689:6:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "10697:2:8",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "10685:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10685:15:8"
                            },
                            {
                              "hexValue": "7373",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "10702:4:8",
                              "type": "",
                              "value": "ss"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "10678:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10678:29:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10678:29:8"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "10591:6:8",
                      "type": ""
                    }
                  ],
                  "src": "10493:221:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10866:220:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "10876:74:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "10942:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10947:2:8",
                              "type": "",
                              "value": "34"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "10883:58:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10883:67:8"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "10876:3:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "11048:3:8"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029",
                            "nodeType": "YulIdentifier",
                            "src": "10959:88:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10959:93:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10959:93:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "11061:19:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "11072:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11077:2:8",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11068:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11068:12:8"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "11061:3:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "10854:3:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "10862:3:8",
                      "type": ""
                    }
                  ],
                  "src": "10720:366:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11263:248:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "11273:26:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "11285:9:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11296:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11281:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11281:18:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "11273:4:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "11320:9:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "11331:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "11316:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11316:17:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "11339:4:8"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "11345:9:8"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "11335:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11335:20:8"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "11309:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11309:47:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "11309:47:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "11365:139:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "11499:4:8"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "11373:124:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11373:131:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "11365:4:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "11243:9:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "11258:4:8",
                      "type": ""
                    }
                  ],
                  "src": "11092:419:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11623:73:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "11645:6:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "11653:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "11641:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11641:14:8"
                            },
                            {
                              "hexValue": "45524332303a20696e73756666696369656e7420616c6c6f77616e6365",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "11657:31:8",
                              "type": "",
                              "value": "ERC20: insufficient allowance"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "11634:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11634:55:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "11634:55:8"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "11615:6:8",
                      "type": ""
                    }
                  ],
                  "src": "11517:179:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11848:220:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "11858:74:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "11924:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11929:2:8",
                              "type": "",
                              "value": "29"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "11865:58:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11865:67:8"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "11858:3:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "12030:3:8"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe",
                            "nodeType": "YulIdentifier",
                            "src": "11941:88:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11941:93:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "11941:93:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "12043:19:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "12054:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12059:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "12050:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12050:12:8"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "12043:3:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "11836:3:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "11844:3:8",
                      "type": ""
                    }
                  ],
                  "src": "11702:366:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "12245:248:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "12255:26:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "12267:9:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12278:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "12263:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12263:18:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "12255:4:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "12302:9:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "12313:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "12298:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12298:17:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "12321:4:8"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "12327:9:8"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "12317:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12317:20:8"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "12291:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12291:47:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "12291:47:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "12347:139:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "12481:4:8"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "12355:124:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12355:131:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "12347:4:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "12225:9:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "12240:4:8",
                      "type": ""
                    }
                  ],
                  "src": "12074:419:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "12605:118:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "12627:6:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "12635:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "12623:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12623:14:8"
                            },
                            {
                              "hexValue": "45524332303a207472616e736665722066726f6d20746865207a65726f206164",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "12639:34:8",
                              "type": "",
                              "value": "ERC20: transfer from the zero ad"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "12616:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12616:58:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "12616:58:8"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "12695:6:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "12703:2:8",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "12691:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12691:15:8"
                            },
                            {
                              "hexValue": "6472657373",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "12708:7:8",
                              "type": "",
                              "value": "dress"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "12684:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12684:32:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "12684:32:8"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "12597:6:8",
                      "type": ""
                    }
                  ],
                  "src": "12499:224:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "12875:220:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "12885:74:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "12951:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12956:2:8",
                              "type": "",
                              "value": "37"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "12892:58:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12892:67:8"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "12885:3:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "13057:3:8"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea",
                            "nodeType": "YulIdentifier",
                            "src": "12968:88:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12968:93:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "12968:93:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "13070:19:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "13081:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13086:2:8",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "13077:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13077:12:8"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "13070:3:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "12863:3:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "12871:3:8",
                      "type": ""
                    }
                  ],
                  "src": "12729:366:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "13272:248:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "13282:26:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "13294:9:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13305:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "13290:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13290:18:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "13282:4:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "13329:9:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "13340:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "13325:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "13325:17:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "13348:4:8"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "13354:9:8"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "13344:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "13344:20:8"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "13318:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13318:47:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "13318:47:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "13374:139:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "13508:4:8"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "13382:124:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13382:131:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "13374:4:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "13252:9:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "13267:4:8",
                      "type": ""
                    }
                  ],
                  "src": "13101:419:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "13632:116:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "13654:6:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "13662:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "13650:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "13650:14:8"
                            },
                            {
                              "hexValue": "45524332303a207472616e7366657220746f20746865207a65726f2061646472",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "13666:34:8",
                              "type": "",
                              "value": "ERC20: transfer to the zero addr"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "13643:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13643:58:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "13643:58:8"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "13722:6:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "13730:2:8",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "13718:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "13718:15:8"
                            },
                            {
                              "hexValue": "657373",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "13735:5:8",
                              "type": "",
                              "value": "ess"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "13711:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13711:30:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "13711:30:8"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "13624:6:8",
                      "type": ""
                    }
                  ],
                  "src": "13526:222:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "13900:220:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "13910:74:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "13976:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13981:2:8",
                              "type": "",
                              "value": "35"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "13917:58:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13917:67:8"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "13910:3:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "14082:3:8"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f",
                            "nodeType": "YulIdentifier",
                            "src": "13993:88:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13993:93:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "13993:93:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "14095:19:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "14106:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "14111:2:8",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "14102:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14102:12:8"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "14095:3:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "13888:3:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "13896:3:8",
                      "type": ""
                    }
                  ],
                  "src": "13754:366:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "14297:248:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "14307:26:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "14319:9:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "14330:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "14315:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14315:18:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "14307:4:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "14354:9:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "14365:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "14350:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "14350:17:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "14373:4:8"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "14379:9:8"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "14369:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "14369:20:8"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "14343:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14343:47:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "14343:47:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "14399:139:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "14533:4:8"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "14407:124:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14407:131:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "14399:4:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "14277:9:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "14292:4:8",
                      "type": ""
                    }
                  ],
                  "src": "14126:419:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "14657:119:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "14679:6:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "14687:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "14675:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "14675:14:8"
                            },
                            {
                              "hexValue": "45524332303a207472616e7366657220616d6f756e7420657863656564732062",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "14691:34:8",
                              "type": "",
                              "value": "ERC20: transfer amount exceeds b"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "14668:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14668:58:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "14668:58:8"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "14747:6:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "14755:2:8",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "14743:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "14743:15:8"
                            },
                            {
                              "hexValue": "616c616e6365",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "14760:8:8",
                              "type": "",
                              "value": "alance"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "14736:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14736:33:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "14736:33:8"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "14649:6:8",
                      "type": ""
                    }
                  ],
                  "src": "14551:225:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "14928:220:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "14938:74:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "15004:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15009:2:8",
                              "type": "",
                              "value": "38"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "14945:58:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14945:67:8"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "14938:3:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "15110:3:8"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6",
                            "nodeType": "YulIdentifier",
                            "src": "15021:88:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15021:93:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "15021:93:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "15123:19:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "15134:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15139:2:8",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15130:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15130:12:8"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "15123:3:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "14916:3:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "14924:3:8",
                      "type": ""
                    }
                  ],
                  "src": "14782:366:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "15325:248:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "15335:26:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "15347:9:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15358:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15343:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15343:18:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "15335:4:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "15382:9:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "15393:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "15378:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "15378:17:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "15401:4:8"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "15407:9:8"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "15397:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "15397:20:8"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "15371:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15371:47:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "15371:47:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "15427:139:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "15561:4:8"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "15435:124:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15435:131:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "15427:4:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "15305:9:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "15320:4:8",
                      "type": ""
                    }
                  ],
                  "src": "15154:419:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "15685:76:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "15707:6:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "15715:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "15703:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "15703:14:8"
                            },
                            {
                              "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "15719:34:8",
                              "type": "",
                              "value": "Ownable: caller is not the owner"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "15696:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15696:58:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "15696:58:8"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "15677:6:8",
                      "type": ""
                    }
                  ],
                  "src": "15579:182:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "15913:220:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "15923:74:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "15989:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15994:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "15930:58:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15930:67:8"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "15923:3:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "16095:3:8"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
                            "nodeType": "YulIdentifier",
                            "src": "16006:88:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16006:93:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "16006:93:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "16108:19:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "16119:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16124:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "16115:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16115:12:8"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "16108:3:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "15901:3:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "15909:3:8",
                      "type": ""
                    }
                  ],
                  "src": "15767:366:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "16310:248:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "16320:26:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "16332:9:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16343:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "16328:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16328:18:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "16320:4:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "16367:9:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "16378:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "16363:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "16363:17:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "16386:4:8"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "16392:9:8"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "16382:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "16382:20:8"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "16356:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16356:47:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "16356:47:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "16412:139:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "16546:4:8"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "16420:124:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16420:131:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "16412:4:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "16290:9:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "16305:4:8",
                      "type": ""
                    }
                  ],
                  "src": "16139:419:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "16670:75:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "16692:6:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "16700:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "16688:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "16688:14:8"
                            },
                            {
                              "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "16704:33:8",
                              "type": "",
                              "value": "ERC20: mint to the zero address"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "16681:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16681:57:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "16681:57:8"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "16662:6:8",
                      "type": ""
                    }
                  ],
                  "src": "16564:181:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "16897:220:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "16907:74:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "16973:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16978:2:8",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "16914:58:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16914:67:8"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "16907:3:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "17079:3:8"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
                            "nodeType": "YulIdentifier",
                            "src": "16990:88:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16990:93:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "16990:93:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "17092:19:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "17103:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17108:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "17099:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17099:12:8"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "17092:3:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "16885:3:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "16893:3:8",
                      "type": ""
                    }
                  ],
                  "src": "16751:366:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "17294:248:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "17304:26:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "17316:9:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17327:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "17312:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17312:18:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "17304:4:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "17351:9:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "17362:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "17347:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "17347:17:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "17370:4:8"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "17376:9:8"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "17366:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "17366:20:8"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "17340:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17340:47:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "17340:47:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "17396:139:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "17530:4:8"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "17404:124:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17404:131:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "17396:4:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "17274:9:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "17289:4:8",
                      "type": ""
                    }
                  ],
                  "src": "17123:419:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "17654:114:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "17676:6:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "17684:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "17672:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "17672:14:8"
                            },
                            {
                              "hexValue": "45524332303a206275726e2066726f6d20746865207a65726f20616464726573",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "17688:34:8",
                              "type": "",
                              "value": "ERC20: burn from the zero addres"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "17665:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17665:58:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "17665:58:8"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "17744:6:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "17752:2:8",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "17740:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "17740:15:8"
                            },
                            {
                              "hexValue": "73",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "17757:3:8",
                              "type": "",
                              "value": "s"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "17733:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17733:28:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "17733:28:8"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "17646:6:8",
                      "type": ""
                    }
                  ],
                  "src": "17548:220:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "17920:220:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "17930:74:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "17996:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "18001:2:8",
                              "type": "",
                              "value": "33"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "17937:58:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17937:67:8"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "17930:3:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "18102:3:8"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f",
                            "nodeType": "YulIdentifier",
                            "src": "18013:88:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18013:93:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "18013:93:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "18115:19:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "18126:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "18131:2:8",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "18122:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18122:12:8"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "18115:3:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "17908:3:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "17916:3:8",
                      "type": ""
                    }
                  ],
                  "src": "17774:366:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "18317:248:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "18327:26:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "18339:9:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "18350:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "18335:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18335:18:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "18327:4:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "18374:9:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "18385:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "18370:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "18370:17:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "18393:4:8"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "18399:9:8"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "18389:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "18389:20:8"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "18363:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18363:47:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "18363:47:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "18419:139:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "18553:4:8"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "18427:124:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18427:131:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "18419:4:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "18297:9:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "18312:4:8",
                      "type": ""
                    }
                  ],
                  "src": "18146:419:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "18677:115:8",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "18699:6:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "18707:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "18695:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "18695:14:8"
                            },
                            {
                              "hexValue": "45524332303a206275726e20616d6f756e7420657863656564732062616c616e",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "18711:34:8",
                              "type": "",
                              "value": "ERC20: burn amount exceeds balan"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "18688:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18688:58:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "18688:58:8"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "18767:6:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "18775:2:8",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "18763:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "18763:15:8"
                            },
                            {
                              "hexValue": "6365",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "18780:4:8",
                              "type": "",
                              "value": "ce"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "18756:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18756:29:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "18756:29:8"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "18669:6:8",
                      "type": ""
                    }
                  ],
                  "src": "18571:221:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "18944:220:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "18954:74:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "19020:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "19025:2:8",
                              "type": "",
                              "value": "34"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "18961:58:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18961:67:8"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "18954:3:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "19126:3:8"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd",
                            "nodeType": "YulIdentifier",
                            "src": "19037:88:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19037:93:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "19037:93:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "19139:19:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "19150:3:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "19155:2:8",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "19146:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19146:12:8"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "19139:3:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "18932:3:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "18940:3:8",
                      "type": ""
                    }
                  ],
                  "src": "18798:366:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "19341:248:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "19351:26:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "19363:9:8"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "19374:2:8",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "19359:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19359:18:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "19351:4:8"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "19398:9:8"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "19409:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "19394:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "19394:17:8"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "19417:4:8"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "19423:9:8"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "19413:3:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "19413:20:8"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "19387:6:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19387:47:8"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "19387:47:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "19443:139:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "19577:4:8"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "19451:124:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19451:131:8"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "19443:4:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "19321:9:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "19336:4:8",
                      "type": ""
                    }
                  ],
                  "src": "19170:419:8"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "19640:146:8",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "19650:25:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "19673:1:8"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "19655:17:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19655:20:8"
                        },
                        "variableNames": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "19650:1:8"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "19684:25:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "19707:1:8"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "19689:17:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19689:20:8"
                        },
                        "variableNames": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "19684:1:8"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "19731:22:8",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "19733:16:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "19733:18:8"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "19733:18:8"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "19725:1:8"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "19728:1:8"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "19722:2:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19722:8:8"
                        },
                        "nodeType": "YulIf",
                        "src": "19719:34:8"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "19763:17:8",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "19775:1:8"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "19778:1:8"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "19771:3:8"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19771:9:8"
                        },
                        "variableNames": [
                          {
                            "name": "diff",
                            "nodeType": "YulIdentifier",
                            "src": "19763:4:8"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "checked_sub_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "x",
                      "nodeType": "YulTypedName",
                      "src": "19626:1:8",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nodeType": "YulTypedName",
                      "src": "19629:1:8",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "diff",
                      "nodeType": "YulTypedName",
                      "src": "19635:4:8",
                      "type": ""
                    }
                  ],
                  "src": "19595:191:8"
                }
              ]
            },
            "contents": "{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint8(value) -> cleaned {\n        cleaned := and(value, 0xff)\n    }\n\n    function abi_encode_t_uint8_to_t_uint8_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint8(value))\n    }\n\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint8_to_t_uint8_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: decreased allowance below\")\n\n        mstore(add(memPtr, 32), \" zero\")\n\n    }\n\n    function abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: new owner is the zero a\")\n\n        mstore(add(memPtr, 32), \"ddress\")\n\n    }\n\n    function abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: approve from the zero add\")\n\n        mstore(add(memPtr, 32), \"ress\")\n\n    }\n\n    function abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 36)\n        store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: approve to the zero addre\")\n\n        mstore(add(memPtr, 32), \"ss\")\n\n    }\n\n    function abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 34)\n        store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: insufficient allowance\")\n\n    }\n\n    function abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 29)\n        store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer from the zero ad\")\n\n        mstore(add(memPtr, 32), \"dress\")\n\n    }\n\n    function abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer to the zero addr\")\n\n        mstore(add(memPtr, 32), \"ess\")\n\n    }\n\n    function abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 35)\n        store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer amount exceeds b\")\n\n        mstore(add(memPtr, 32), \"alance\")\n\n    }\n\n    function abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: caller is not the owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n        store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: mint to the zero address\")\n\n    }\n\n    function abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 31)\n        store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: burn from the zero addres\")\n\n        mstore(add(memPtr, 32), \"s\")\n\n    }\n\n    function abi_encode_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 33)\n        store_literal_in_memory_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: burn amount exceeds balan\")\n\n        mstore(add(memPtr, 32), \"ce\")\n\n    }\n\n    function abi_encode_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 34)\n        store_literal_in_memory_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function checked_sub_t_uint256(x, y) -> diff {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        if lt(x, y) { panic_error_0x11() }\n\n        diff := sub(x, y)\n    }\n\n}\n",
            "id": 8,
            "language": "Yul",
            "name": "#utility.yul"
          }
        ],
        "sourceMap": "249:255:7:-:0;;;308:90;;;;;;;;;;1978:113:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2052:5;2044;:13;;;;;;:::i;:::-;;2077:7;2067;:17;;;;;;:::i;:::-;;1978:113;;936:32:0;955:12;:10;;;:12;;:::i;:::-;936:18;;;:32;;:::i;:::-;359:31:7::1;365:10;377:11;359:5;;;:31;;:::i;:::-;249:255:::0;;640:96:5;693:7;719:10;712:17;;640:96;:::o;2433:187:0:-;2506:16;2525:6;;;;;;;;;;;2506:25;;2550:8;2541:6;;:17;;;;;;;;;;;;;;;;;;2604:8;2573:40;;2594:8;2573:40;;;;;;;;;;;;2496:124;2433:187;:::o;8402:389:1:-;8504:1;8485:21;;:7;:21;;;8477:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;8553:49;8582:1;8586:7;8595:6;8553:20;;;:49;;:::i;:::-;8629:6;8613:12;;:22;;;;;;;:::i;:::-;;;;;;;;8667:6;8645:9;:18;8655:7;8645:18;;;;;;;;;;;;;;;;:28;;;;;;;:::i;:::-;;;;;;;;8709:7;8688:37;;8705:1;8688:37;;;8718:6;8688:37;;;;;;:::i;:::-;;;;;;;;8736:48;8764:1;8768:7;8777:6;8736:19;;;:48;;:::i;:::-;8402:389;;:::o;11786:121::-;;;;:::o;12495:120::-;;;;:::o;7:99:8:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:180::-;160:77;157:1;150:88;257:4;254:1;247:15;281:4;278:1;271:15;298:180;346:77;343:1;336:88;443:4;440:1;433:15;467:4;464:1;457:15;484:320;528:6;565:1;559:4;555:12;545:22;;612:1;606:4;602:12;633:18;623:81;;689:4;681:6;677:17;667:27;;623:81;751:2;743:6;740:14;720:18;717:38;714:84;;770:18;;:::i;:::-;714:84;535:269;484:320;;;:::o;810:141::-;859:4;882:3;874:11;;905:3;902:1;895:14;939:4;936:1;926:18;918:26;;810:141;;;:::o;957:93::-;994:6;1041:2;1036;1029:5;1025:14;1021:23;1011:33;;957:93;;;:::o;1056:107::-;1100:8;1150:5;1144:4;1140:16;1119:37;;1056:107;;;;:::o;1169:393::-;1238:6;1288:1;1276:10;1272:18;1311:97;1341:66;1330:9;1311:97;:::i;:::-;1429:39;1459:8;1448:9;1429:39;:::i;:::-;1417:51;;1501:4;1497:9;1490:5;1486:21;1477:30;;1550:4;1540:8;1536:19;1529:5;1526:30;1516:40;;1245:317;;1169:393;;;;;:::o;1568:77::-;1605:7;1634:5;1623:16;;1568:77;;;:::o;1651:60::-;1679:3;1700:5;1693:12;;1651:60;;;:::o;1717:142::-;1767:9;1800:53;1818:34;1827:24;1845:5;1827:24;:::i;:::-;1818:34;:::i;:::-;1800:53;:::i;:::-;1787:66;;1717:142;;;:::o;1865:75::-;1908:3;1929:5;1922:12;;1865:75;;;:::o;1946:269::-;2056:39;2087:7;2056:39;:::i;:::-;2117:91;2166:41;2190:16;2166:41;:::i;:::-;2158:6;2151:4;2145:11;2117:91;:::i;:::-;2111:4;2104:105;2022:193;1946:269;;;:::o;2221:73::-;2266:3;2221:73;:::o;2300:189::-;2377:32;;:::i;:::-;2418:65;2476:6;2468;2462:4;2418:65;:::i;:::-;2353:136;2300:189;;:::o;2495:186::-;2555:120;2572:3;2565:5;2562:14;2555:120;;;2626:39;2663:1;2656:5;2626:39;:::i;:::-;2599:1;2592:5;2588:13;2579:22;;2555:120;;;2495:186;;:::o;2687:543::-;2788:2;2783:3;2780:11;2777:446;;;2822:38;2854:5;2822:38;:::i;:::-;2906:29;2924:10;2906:29;:::i;:::-;2896:8;2892:44;3089:2;3077:10;3074:18;3071:49;;;3110:8;3095:23;;3071:49;3133:80;3189:22;3207:3;3189:22;:::i;:::-;3179:8;3175:37;3162:11;3133:80;:::i;:::-;2792:431;;2777:446;2687:543;;;:::o;3236:117::-;3290:8;3340:5;3334:4;3330:16;3309:37;;3236:117;;;;:::o;3359:169::-;3403:6;3436:51;3484:1;3480:6;3472:5;3469:1;3465:13;3436:51;:::i;:::-;3432:56;3517:4;3511;3507:15;3497:25;;3410:118;3359:169;;;;:::o;3533:295::-;3609:4;3755:29;3780:3;3774:4;3755:29;:::i;:::-;3747:37;;3817:3;3814:1;3810:11;3804:4;3801:21;3793:29;;3533:295;;;;:::o;3833:1395::-;3950:37;3983:3;3950:37;:::i;:::-;4052:18;4044:6;4041:30;4038:56;;;4074:18;;:::i;:::-;4038:56;4118:38;4150:4;4144:11;4118:38;:::i;:::-;4203:67;4263:6;4255;4249:4;4203:67;:::i;:::-;4297:1;4321:4;4308:17;;4353:2;4345:6;4342:14;4370:1;4365:618;;;;5027:1;5044:6;5041:77;;;5093:9;5088:3;5084:19;5078:26;5069:35;;5041:77;5144:67;5204:6;5197:5;5144:67;:::i;:::-;5138:4;5131:81;5000:222;4335:887;;4365:618;4417:4;4413:9;4405:6;4401:22;4451:37;4483:4;4451:37;:::i;:::-;4510:1;4524:208;4538:7;4535:1;4532:14;4524:208;;;4617:9;4612:3;4608:19;4602:26;4594:6;4587:42;4668:1;4660:6;4656:14;4646:24;;4715:2;4704:9;4700:18;4687:31;;4561:4;4558:1;4554:12;4549:17;;4524:208;;;4760:6;4751:7;4748:19;4745:179;;;4818:9;4813:3;4809:19;4803:26;4861:48;4903:4;4895:6;4891:17;4880:9;4861:48;:::i;:::-;4853:6;4846:64;4768:156;4745:179;4970:1;4966;4958:6;4954:14;4950:22;4944:4;4937:36;4372:611;;;4335:887;;3925:1303;;;3833:1395;;:::o;5234:169::-;5318:11;5352:6;5347:3;5340:19;5392:4;5387:3;5383:14;5368:29;;5234:169;;;;:::o;5409:181::-;5549:33;5545:1;5537:6;5533:14;5526:57;5409:181;:::o;5596:366::-;5738:3;5759:67;5823:2;5818:3;5759:67;:::i;:::-;5752:74;;5835:93;5924:3;5835:93;:::i;:::-;5953:2;5948:3;5944:12;5937:19;;5596:366;;;:::o;5968:419::-;6134:4;6172:2;6161:9;6157:18;6149:26;;6221:9;6215:4;6211:20;6207:1;6196:9;6192:17;6185:47;6249:131;6375:4;6249:131;:::i;:::-;6241:139;;5968:419;;;:::o;6393:180::-;6441:77;6438:1;6431:88;6538:4;6535:1;6528:15;6562:4;6559:1;6552:15;6579:305;6619:3;6638:20;6656:1;6638:20;:::i;:::-;6633:25;;6672:20;6690:1;6672:20;:::i;:::-;6667:25;;6826:1;6758:66;6754:74;6751:1;6748:81;6745:107;;;6832:18;;:::i;:::-;6745:107;6876:1;6873;6869:9;6862:16;;6579:305;;;;:::o;6890:118::-;6977:24;6995:5;6977:24;:::i;:::-;6972:3;6965:37;6890:118;;:::o;7014:222::-;7107:4;7145:2;7134:9;7130:18;7122:26;;7158:71;7226:1;7215:9;7211:17;7202:6;7158:71;:::i;:::-;7014:222;;;;:::o;249:255:7:-;;;;;;;",
        "deployedSourceMap": "249:255:7:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2156:98:1;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4433:197;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3244:106;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5192:286;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3093:91;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5873:234;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;406:95:7;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;578:89:3;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;3408:125:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1831:101:0;;;:::i;:::-;;973:161:3;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1201:85:0;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2367:102:1;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;6594:427;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3729:189;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3976:149;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2081:198:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2156:98:1;2210:13;2242:5;2235:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2156:98;:::o;4433:197::-;4516:4;4532:13;4548:12;:10;:12::i;:::-;4532:28;;4570:32;4579:5;4586:7;4595:6;4570:8;:32::i;:::-;4619:4;4612:11;;;4433:197;;;;:::o;3244:106::-;3305:7;3331:12;;3324:19;;3244:106;:::o;5192:286::-;5319:4;5335:15;5353:12;:10;:12::i;:::-;5335:30;;5375:38;5391:4;5397:7;5406:6;5375:15;:38::i;:::-;5423:27;5433:4;5439:2;5443:6;5423:9;:27::i;:::-;5467:4;5460:11;;;5192:286;;;;;:::o;3093:91::-;3151:5;3175:2;3168:9;;3093:91;:::o;5873:234::-;5961:4;5977:13;5993:12;:10;:12::i;:::-;5977:28;;6015:64;6024:5;6031:7;6068:10;6040:25;6050:5;6057:7;6040:9;:25::i;:::-;:38;;;;:::i;:::-;6015:8;:64::i;:::-;6096:4;6089:11;;;5873:234;;;;:::o;406:95:7:-;1094:13:0;:11;:13::i;:::-;476:17:7::1;482:2;486:6;476:5;:17::i;:::-;406:95:::0;;:::o;578:89:3:-;633:27;639:12;:10;:12::i;:::-;653:6;633:5;:27::i;:::-;578:89;:::o;3408:125:1:-;3482:7;3508:9;:18;3518:7;3508:18;;;;;;;;;;;;;;;;3501:25;;3408:125;;;:::o;1831:101:0:-;1094:13;:11;:13::i;:::-;1895:30:::1;1922:1;1895:18;:30::i;:::-;1831:101::o:0;973:161:3:-;1049:46;1065:7;1074:12;:10;:12::i;:::-;1088:6;1049:15;:46::i;:::-;1105:22;1111:7;1120:6;1105:5;:22::i;:::-;973:161;;:::o;1201:85:0:-;1247:7;1273:6;;;;;;;;;;;1266:13;;1201:85;:::o;2367:102:1:-;2423:13;2455:7;2448:14;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2367:102;:::o;6594:427::-;6687:4;6703:13;6719:12;:10;:12::i;:::-;6703:28;;6741:24;6768:25;6778:5;6785:7;6768:9;:25::i;:::-;6741:52;;6831:15;6811:16;:35;;6803:85;;;;;;;;;;;;:::i;:::-;;;;;;;;;6922:60;6931:5;6938:7;6966:15;6947:16;:34;6922:8;:60::i;:::-;7010:4;7003:11;;;;6594:427;;;;:::o;3729:189::-;3808:4;3824:13;3840:12;:10;:12::i;:::-;3824:28;;3862;3872:5;3879:2;3883:6;3862:9;:28::i;:::-;3907:4;3900:11;;;3729:189;;;;:::o;3976:149::-;4065:7;4091:11;:18;4103:5;4091:18;;;;;;;;;;;;;;;:27;4110:7;4091:27;;;;;;;;;;;;;;;;4084:34;;3976:149;;;;:::o;2081:198:0:-;1094:13;:11;:13::i;:::-;2189:1:::1;2169:22;;:8;:22;;::::0;2161:73:::1;;;;;;;;;;;;:::i;:::-;;;;;;;;;2244:28;2263:8;2244:18;:28::i;:::-;2081:198:::0;:::o;640:96:5:-;693:7;719:10;712:17;;640:96;:::o;10110:370:1:-;10258:1;10241:19;;:5;:19;;;10233:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;10338:1;10319:21;;:7;:21;;;10311:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;10420:6;10390:11;:18;10402:5;10390:18;;;;;;;;;;;;;;;:27;10409:7;10390:27;;;;;;;;;;;;;;;:36;;;;10457:7;10441:32;;10450:5;10441:32;;;10466:6;10441:32;;;;;;:::i;:::-;;;;;;;;10110:370;;;:::o;10761:441::-;10891:24;10918:25;10928:5;10935:7;10918:9;:25::i;:::-;10891:52;;10977:17;10957:16;:37;10953:243;;11038:6;11018:16;:26;;11010:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;11120:51;11129:5;11136:7;11164:6;11145:16;:25;11120:8;:51::i;:::-;10953:243;10881:321;10761:441;;;:::o;7475:651::-;7617:1;7601:18;;:4;:18;;;7593:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;7693:1;7679:16;;:2;:16;;;7671:64;;;;;;;;;;;;:::i;:::-;;;;;;;;;7746:38;7767:4;7773:2;7777:6;7746:20;:38::i;:::-;7795:19;7817:9;:15;7827:4;7817:15;;;;;;;;;;;;;;;;7795:37;;7865:6;7850:11;:21;;7842:72;;;;;;;;;;;;:::i;:::-;;;;;;;;;7980:6;7966:11;:20;7948:9;:15;7958:4;7948:15;;;;;;;;;;;;;;;:38;;;;8023:6;8006:9;:13;8016:2;8006:13;;;;;;;;;;;;;;;;:23;;;;;;;:::i;:::-;;;;;;;;8060:2;8045:26;;8054:4;8045:26;;;8064:6;8045:26;;;;;;:::i;:::-;;;;;;;;8082:37;8102:4;8108:2;8112:6;8082:19;:37::i;:::-;7583:543;7475:651;;;:::o;1359:130:0:-;1433:12;:10;:12::i;:::-;1422:23;;:7;:5;:7::i;:::-;:23;;;1414:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;1359:130::o;8402:389:1:-;8504:1;8485:21;;:7;:21;;;8477:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;8553:49;8582:1;8586:7;8595:6;8553:20;:49::i;:::-;8629:6;8613:12;;:22;;;;;;;:::i;:::-;;;;;;;;8667:6;8645:9;:18;8655:7;8645:18;;;;;;;;;;;;;;;;:28;;;;;;;:::i;:::-;;;;;;;;8709:7;8688:37;;8705:1;8688:37;;;8718:6;8688:37;;;;;;:::i;:::-;;;;;;;;8736:48;8764:1;8768:7;8777:6;8736:19;:48::i;:::-;8402:389;;:::o;9111:576::-;9213:1;9194:21;;:7;:21;;;9186:67;;;;;;;;;;;;:::i;:::-;;;;;;;;;9264:49;9285:7;9302:1;9306:6;9264:20;:49::i;:::-;9324:22;9349:9;:18;9359:7;9349:18;;;;;;;;;;;;;;;;9324:43;;9403:6;9385:14;:24;;9377:71;;;;;;;;;;;;:::i;:::-;;;;;;;;;9520:6;9503:14;:23;9482:9;:18;9492:7;9482:18;;;;;;;;;;;;;;;:44;;;;9562:6;9546:12;;:22;;;;;;;:::i;:::-;;;;;;;;9610:1;9584:37;;9593:7;9584:37;;;9614:6;9584:37;;;;;;:::i;:::-;;;;;;;;9632:48;9652:7;9669:1;9673:6;9632:19;:48::i;:::-;9176:511;9111:576;;:::o;2433:187:0:-;2506:16;2525:6;;;;;;;;;;;2506:25;;2550:8;2541:6;;:17;;;;;;;;;;;;;;;;;;2604:8;2573:40;;2594:8;2573:40;;;;;;;;;;;;2496:124;2433:187;:::o;11786:121:1:-;;;;:::o;12495:120::-;;;;:::o;7:99:8:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:169::-;196:11;230:6;225:3;218:19;270:4;265:3;261:14;246:29;;112:169;;;;:::o;287:307::-;355:1;365:113;379:6;376:1;373:13;365:113;;;464:1;459:3;455:11;449:18;445:1;440:3;436:11;429:39;401:2;398:1;394:10;389:15;;365:113;;;496:6;493:1;490:13;487:101;;;576:1;567:6;562:3;558:16;551:27;487:101;336:258;287:307;;;:::o;600:102::-;641:6;692:2;688:7;683:2;676:5;672:14;668:28;658:38;;600:102;;;:::o;708:364::-;796:3;824:39;857:5;824:39;:::i;:::-;879:71;943:6;938:3;879:71;:::i;:::-;872:78;;959:52;1004:6;999:3;992:4;985:5;981:16;959:52;:::i;:::-;1036:29;1058:6;1036:29;:::i;:::-;1031:3;1027:39;1020:46;;800:272;708:364;;;;:::o;1078:313::-;1191:4;1229:2;1218:9;1214:18;1206:26;;1278:9;1272:4;1268:20;1264:1;1253:9;1249:17;1242:47;1306:78;1379:4;1370:6;1306:78;:::i;:::-;1298:86;;1078:313;;;;:::o;1478:117::-;1587:1;1584;1577:12;1724:126;1761:7;1801:42;1794:5;1790:54;1779:65;;1724:126;;;:::o;1856:96::-;1893:7;1922:24;1940:5;1922:24;:::i;:::-;1911:35;;1856:96;;;:::o;1958:122::-;2031:24;2049:5;2031:24;:::i;:::-;2024:5;2021:35;2011:63;;2070:1;2067;2060:12;2011:63;1958:122;:::o;2086:139::-;2132:5;2170:6;2157:20;2148:29;;2186:33;2213:5;2186:33;:::i;:::-;2086:139;;;;:::o;2231:77::-;2268:7;2297:5;2286:16;;2231:77;;;:::o;2314:122::-;2387:24;2405:5;2387:24;:::i;:::-;2380:5;2377:35;2367:63;;2426:1;2423;2416:12;2367:63;2314:122;:::o;2442:139::-;2488:5;2526:6;2513:20;2504:29;;2542:33;2569:5;2542:33;:::i;:::-;2442:139;;;;:::o;2587:474::-;2655:6;2663;2712:2;2700:9;2691:7;2687:23;2683:32;2680:119;;;2718:79;;:::i;:::-;2680:119;2838:1;2863:53;2908:7;2899:6;2888:9;2884:22;2863:53;:::i;:::-;2853:63;;2809:117;2965:2;2991:53;3036:7;3027:6;3016:9;3012:22;2991:53;:::i;:::-;2981:63;;2936:118;2587:474;;;;;:::o;3067:90::-;3101:7;3144:5;3137:13;3130:21;3119:32;;3067:90;;;:::o;3163:109::-;3244:21;3259:5;3244:21;:::i;:::-;3239:3;3232:34;3163:109;;:::o;3278:210::-;3365:4;3403:2;3392:9;3388:18;3380:26;;3416:65;3478:1;3467:9;3463:17;3454:6;3416:65;:::i;:::-;3278:210;;;;:::o;3494:118::-;3581:24;3599:5;3581:24;:::i;:::-;3576:3;3569:37;3494:118;;:::o;3618:222::-;3711:4;3749:2;3738:9;3734:18;3726:26;;3762:71;3830:1;3819:9;3815:17;3806:6;3762:71;:::i;:::-;3618:222;;;;:::o;3846:619::-;3923:6;3931;3939;3988:2;3976:9;3967:7;3963:23;3959:32;3956:119;;;3994:79;;:::i;:::-;3956:119;4114:1;4139:53;4184:7;4175:6;4164:9;4160:22;4139:53;:::i;:::-;4129:63;;4085:117;4241:2;4267:53;4312:7;4303:6;4292:9;4288:22;4267:53;:::i;:::-;4257:63;;4212:118;4369:2;4395:53;4440:7;4431:6;4420:9;4416:22;4395:53;:::i;:::-;4385:63;;4340:118;3846:619;;;;;:::o;4471:86::-;4506:7;4546:4;4539:5;4535:16;4524:27;;4471:86;;;:::o;4563:112::-;4646:22;4662:5;4646:22;:::i;:::-;4641:3;4634:35;4563:112;;:::o;4681:214::-;4770:4;4808:2;4797:9;4793:18;4785:26;;4821:67;4885:1;4874:9;4870:17;4861:6;4821:67;:::i;:::-;4681:214;;;;:::o;4901:329::-;4960:6;5009:2;4997:9;4988:7;4984:23;4980:32;4977:119;;;5015:79;;:::i;:::-;4977:119;5135:1;5160:53;5205:7;5196:6;5185:9;5181:22;5160:53;:::i;:::-;5150:63;;5106:117;4901:329;;;;:::o;5236:::-;5295:6;5344:2;5332:9;5323:7;5319:23;5315:32;5312:119;;;5350:79;;:::i;:::-;5312:119;5470:1;5495:53;5540:7;5531:6;5520:9;5516:22;5495:53;:::i;:::-;5485:63;;5441:117;5236:329;;;;:::o;5571:118::-;5658:24;5676:5;5658:24;:::i;:::-;5653:3;5646:37;5571:118;;:::o;5695:222::-;5788:4;5826:2;5815:9;5811:18;5803:26;;5839:71;5907:1;5896:9;5892:17;5883:6;5839:71;:::i;:::-;5695:222;;;;:::o;5923:474::-;5991:6;5999;6048:2;6036:9;6027:7;6023:23;6019:32;6016:119;;;6054:79;;:::i;:::-;6016:119;6174:1;6199:53;6244:7;6235:6;6224:9;6220:22;6199:53;:::i;:::-;6189:63;;6145:117;6301:2;6327:53;6372:7;6363:6;6352:9;6348:22;6327:53;:::i;:::-;6317:63;;6272:118;5923:474;;;;;:::o;6403:180::-;6451:77;6448:1;6441:88;6548:4;6545:1;6538:15;6572:4;6569:1;6562:15;6589:320;6633:6;6670:1;6664:4;6660:12;6650:22;;6717:1;6711:4;6707:12;6738:18;6728:81;;6794:4;6786:6;6782:17;6772:27;;6728:81;6856:2;6848:6;6845:14;6825:18;6822:38;6819:84;;6875:18;;:::i;:::-;6819:84;6640:269;6589:320;;;:::o;6915:180::-;6963:77;6960:1;6953:88;7060:4;7057:1;7050:15;7084:4;7081:1;7074:15;7101:305;7141:3;7160:20;7178:1;7160:20;:::i;:::-;7155:25;;7194:20;7212:1;7194:20;:::i;:::-;7189:25;;7348:1;7280:66;7276:74;7273:1;7270:81;7267:107;;;7354:18;;:::i;:::-;7267:107;7398:1;7395;7391:9;7384:16;;7101:305;;;;:::o;7412:224::-;7552:34;7548:1;7540:6;7536:14;7529:58;7621:7;7616:2;7608:6;7604:15;7597:32;7412:224;:::o;7642:366::-;7784:3;7805:67;7869:2;7864:3;7805:67;:::i;:::-;7798:74;;7881:93;7970:3;7881:93;:::i;:::-;7999:2;7994:3;7990:12;7983:19;;7642:366;;;:::o;8014:419::-;8180:4;8218:2;8207:9;8203:18;8195:26;;8267:9;8261:4;8257:20;8253:1;8242:9;8238:17;8231:47;8295:131;8421:4;8295:131;:::i;:::-;8287:139;;8014:419;;;:::o;8439:225::-;8579:34;8575:1;8567:6;8563:14;8556:58;8648:8;8643:2;8635:6;8631:15;8624:33;8439:225;:::o;8670:366::-;8812:3;8833:67;8897:2;8892:3;8833:67;:::i;:::-;8826:74;;8909:93;8998:3;8909:93;:::i;:::-;9027:2;9022:3;9018:12;9011:19;;8670:366;;;:::o;9042:419::-;9208:4;9246:2;9235:9;9231:18;9223:26;;9295:9;9289:4;9285:20;9281:1;9270:9;9266:17;9259:47;9323:131;9449:4;9323:131;:::i;:::-;9315:139;;9042:419;;;:::o;9467:223::-;9607:34;9603:1;9595:6;9591:14;9584:58;9676:6;9671:2;9663:6;9659:15;9652:31;9467:223;:::o;9696:366::-;9838:3;9859:67;9923:2;9918:3;9859:67;:::i;:::-;9852:74;;9935:93;10024:3;9935:93;:::i;:::-;10053:2;10048:3;10044:12;10037:19;;9696:366;;;:::o;10068:419::-;10234:4;10272:2;10261:9;10257:18;10249:26;;10321:9;10315:4;10311:20;10307:1;10296:9;10292:17;10285:47;10349:131;10475:4;10349:131;:::i;:::-;10341:139;;10068:419;;;:::o;10493:221::-;10633:34;10629:1;10621:6;10617:14;10610:58;10702:4;10697:2;10689:6;10685:15;10678:29;10493:221;:::o;10720:366::-;10862:3;10883:67;10947:2;10942:3;10883:67;:::i;:::-;10876:74;;10959:93;11048:3;10959:93;:::i;:::-;11077:2;11072:3;11068:12;11061:19;;10720:366;;;:::o;11092:419::-;11258:4;11296:2;11285:9;11281:18;11273:26;;11345:9;11339:4;11335:20;11331:1;11320:9;11316:17;11309:47;11373:131;11499:4;11373:131;:::i;:::-;11365:139;;11092:419;;;:::o;11517:179::-;11657:31;11653:1;11645:6;11641:14;11634:55;11517:179;:::o;11702:366::-;11844:3;11865:67;11929:2;11924:3;11865:67;:::i;:::-;11858:74;;11941:93;12030:3;11941:93;:::i;:::-;12059:2;12054:3;12050:12;12043:19;;11702:366;;;:::o;12074:419::-;12240:4;12278:2;12267:9;12263:18;12255:26;;12327:9;12321:4;12317:20;12313:1;12302:9;12298:17;12291:47;12355:131;12481:4;12355:131;:::i;:::-;12347:139;;12074:419;;;:::o;12499:224::-;12639:34;12635:1;12627:6;12623:14;12616:58;12708:7;12703:2;12695:6;12691:15;12684:32;12499:224;:::o;12729:366::-;12871:3;12892:67;12956:2;12951:3;12892:67;:::i;:::-;12885:74;;12968:93;13057:3;12968:93;:::i;:::-;13086:2;13081:3;13077:12;13070:19;;12729:366;;;:::o;13101:419::-;13267:4;13305:2;13294:9;13290:18;13282:26;;13354:9;13348:4;13344:20;13340:1;13329:9;13325:17;13318:47;13382:131;13508:4;13382:131;:::i;:::-;13374:139;;13101:419;;;:::o;13526:222::-;13666:34;13662:1;13654:6;13650:14;13643:58;13735:5;13730:2;13722:6;13718:15;13711:30;13526:222;:::o;13754:366::-;13896:3;13917:67;13981:2;13976:3;13917:67;:::i;:::-;13910:74;;13993:93;14082:3;13993:93;:::i;:::-;14111:2;14106:3;14102:12;14095:19;;13754:366;;;:::o;14126:419::-;14292:4;14330:2;14319:9;14315:18;14307:26;;14379:9;14373:4;14369:20;14365:1;14354:9;14350:17;14343:47;14407:131;14533:4;14407:131;:::i;:::-;14399:139;;14126:419;;;:::o;14551:225::-;14691:34;14687:1;14679:6;14675:14;14668:58;14760:8;14755:2;14747:6;14743:15;14736:33;14551:225;:::o;14782:366::-;14924:3;14945:67;15009:2;15004:3;14945:67;:::i;:::-;14938:74;;15021:93;15110:3;15021:93;:::i;:::-;15139:2;15134:3;15130:12;15123:19;;14782:366;;;:::o;15154:419::-;15320:4;15358:2;15347:9;15343:18;15335:26;;15407:9;15401:4;15397:20;15393:1;15382:9;15378:17;15371:47;15435:131;15561:4;15435:131;:::i;:::-;15427:139;;15154:419;;;:::o;15579:182::-;15719:34;15715:1;15707:6;15703:14;15696:58;15579:182;:::o;15767:366::-;15909:3;15930:67;15994:2;15989:3;15930:67;:::i;:::-;15923:74;;16006:93;16095:3;16006:93;:::i;:::-;16124:2;16119:3;16115:12;16108:19;;15767:366;;;:::o;16139:419::-;16305:4;16343:2;16332:9;16328:18;16320:26;;16392:9;16386:4;16382:20;16378:1;16367:9;16363:17;16356:47;16420:131;16546:4;16420:131;:::i;:::-;16412:139;;16139:419;;;:::o;16564:181::-;16704:33;16700:1;16692:6;16688:14;16681:57;16564:181;:::o;16751:366::-;16893:3;16914:67;16978:2;16973:3;16914:67;:::i;:::-;16907:74;;16990:93;17079:3;16990:93;:::i;:::-;17108:2;17103:3;17099:12;17092:19;;16751:366;;;:::o;17123:419::-;17289:4;17327:2;17316:9;17312:18;17304:26;;17376:9;17370:4;17366:20;17362:1;17351:9;17347:17;17340:47;17404:131;17530:4;17404:131;:::i;:::-;17396:139;;17123:419;;;:::o;17548:220::-;17688:34;17684:1;17676:6;17672:14;17665:58;17757:3;17752:2;17744:6;17740:15;17733:28;17548:220;:::o;17774:366::-;17916:3;17937:67;18001:2;17996:3;17937:67;:::i;:::-;17930:74;;18013:93;18102:3;18013:93;:::i;:::-;18131:2;18126:3;18122:12;18115:19;;17774:366;;;:::o;18146:419::-;18312:4;18350:2;18339:9;18335:18;18327:26;;18399:9;18393:4;18389:20;18385:1;18374:9;18370:17;18363:47;18427:131;18553:4;18427:131;:::i;:::-;18419:139;;18146:419;;;:::o;18571:221::-;18711:34;18707:1;18699:6;18695:14;18688:58;18780:4;18775:2;18767:6;18763:15;18756:29;18571:221;:::o;18798:366::-;18940:3;18961:67;19025:2;19020:3;18961:67;:::i;:::-;18954:74;;19037:93;19126:3;19037:93;:::i;:::-;19155:2;19150:3;19146:12;19139:19;;18798:366;;;:::o;19170:419::-;19336:4;19374:2;19363:9;19359:18;19351:26;;19423:9;19417:4;19413:20;19409:1;19398:9;19394:17;19387:47;19451:131;19577:4;19451:131;:::i;:::-;19443:139;;19170:419;;;:::o;19595:191::-;19635:4;19655:20;19673:1;19655:20;:::i;:::-;19650:25;;19689:20;19707:1;19689:20;:::i;:::-;19684:25;;19728:1;19725;19722:8;19719:34;;;19733:18;;:::i;:::-;19719:34;19778:1;19775;19771:9;19763:17;;19595:191;;;;:::o",
        "source": "// SPDX-License-Identifier: MIT\r\npragma solidity ^0.8.4;\r\n\r\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\r\nimport \"@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol\";\r\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\r\n\r\ncontract Interlynk is ERC20, ERC20Burnable, Ownable {\r\n    constructor() ERC20(\"Interlynk\", \"ILK\") {\r\n        _mint(msg.sender, 100000 * 10 );\r\n    }\r\n\r\n    function mint(address to, uint256 amount) public onlyOwner {\r\n        _mint(to, amount);\r\n    }\r\n}",
        "sourcePath": "C:\\Work\\Interlynk-App\\Interlynk-App\\contracts\\interlynk.sol",
        "ast": {
          "absolutePath": "project:/contracts/interlynk.sol",
          "exportedSymbols": {
            "Context": [
              867
            ],
            "ERC20": [
              698
            ],
            "ERC20Burnable": [
              820
            ],
            "IERC20": [
              776
            ],
            "IERC20Metadata": [
              845
            ],
            "Interlynk": [
              943
            ],
            "Ownable": [
              112
            ]
          },
          "id": 944,
          "license": "MIT",
          "nodeType": "SourceUnit",
          "nodes": [
            {
              "id": 902,
              "literals": [
                "solidity",
                "^",
                "0.8",
                ".4"
              ],
              "nodeType": "PragmaDirective",
              "src": "33:23:7"
            },
            {
              "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
              "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
              "id": 903,
              "nameLocation": "-1:-1:-1",
              "nodeType": "ImportDirective",
              "scope": 944,
              "sourceUnit": 699,
              "src": "60:55:7",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "absolutePath": "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol",
              "file": "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol",
              "id": 904,
              "nameLocation": "-1:-1:-1",
              "nodeType": "ImportDirective",
              "scope": 944,
              "sourceUnit": 821,
              "src": "117:74:7",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
              "file": "@openzeppelin/contracts/access/Ownable.sol",
              "id": 905,
              "nameLocation": "-1:-1:-1",
              "nodeType": "ImportDirective",
              "scope": 944,
              "sourceUnit": 113,
              "src": "193:52:7",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "abstract": false,
              "baseContracts": [
                {
                  "baseName": {
                    "id": 906,
                    "name": "ERC20",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 698,
                    "src": "271:5:7"
                  },
                  "id": 907,
                  "nodeType": "InheritanceSpecifier",
                  "src": "271:5:7"
                },
                {
                  "baseName": {
                    "id": 908,
                    "name": "ERC20Burnable",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 820,
                    "src": "278:13:7"
                  },
                  "id": 909,
                  "nodeType": "InheritanceSpecifier",
                  "src": "278:13:7"
                },
                {
                  "baseName": {
                    "id": 910,
                    "name": "Ownable",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 112,
                    "src": "293:7:7"
                  },
                  "id": 911,
                  "nodeType": "InheritanceSpecifier",
                  "src": "293:7:7"
                }
              ],
              "canonicalName": "Interlynk",
              "contractDependencies": [],
              "contractKind": "contract",
              "fullyImplemented": true,
              "id": 943,
              "linearizedBaseContracts": [
                943,
                112,
                820,
                698,
                845,
                776,
                867
              ],
              "name": "Interlynk",
              "nameLocation": "258:9:7",
              "nodeType": "ContractDefinition",
              "nodes": [
                {
                  "body": {
                    "id": 926,
                    "nodeType": "Block",
                    "src": "348:50:7",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 919,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "365:3:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 920,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "365:10:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_rational_1000000_by_1",
                                "typeString": "int_const 1000000"
                              },
                              "id": 923,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "leftExpression": {
                                "hexValue": "313030303030",
                                "id": 921,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "377:6:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100000_by_1",
                                  "typeString": "int_const 100000"
                                },
                                "value": "100000"
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "3130",
                                "id": 922,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "386:2:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_10_by_1",
                                  "typeString": "int_const 10"
                                },
                                "value": "10"
                              },
                              "src": "377:11:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1000000_by_1",
                                "typeString": "int_const 1000000"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_rational_1000000_by_1",
                                "typeString": "int_const 1000000"
                              }
                            ],
                            "id": 918,
                            "name": "_mint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 515,
                            "src": "359:5:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256)"
                            }
                          },
                          "id": 924,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "359:31:7",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 925,
                        "nodeType": "ExpressionStatement",
                        "src": "359:31:7"
                      }
                    ]
                  },
                  "id": 927,
                  "implemented": true,
                  "kind": "constructor",
                  "modifiers": [
                    {
                      "arguments": [
                        {
                          "hexValue": "496e7465726c796e6b",
                          "id": 914,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "328:11:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_4369163b4f28286089d51b7c99c48d28351e689c3baaf6c01b28a8b7c1ad2d46",
                            "typeString": "literal_string \"Interlynk\""
                          },
                          "value": "Interlynk"
                        },
                        {
                          "hexValue": "494c4b",
                          "id": 915,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "341:5:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_856c6557a4a628215eaa074ccea96bb31ac46d9b470950684e33ba0a16fad388",
                            "typeString": "literal_string \"ILK\""
                          },
                          "value": "ILK"
                        }
                      ],
                      "id": 916,
                      "kind": "baseConstructorSpecifier",
                      "modifierName": {
                        "id": 913,
                        "name": "ERC20",
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 698,
                        "src": "322:5:7"
                      },
                      "nodeType": "ModifierInvocation",
                      "src": "322:25:7"
                    }
                  ],
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 912,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "319:2:7"
                  },
                  "returnParameters": {
                    "id": 917,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "348:0:7"
                  },
                  "scope": 943,
                  "src": "308:90:7",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 941,
                    "nodeType": "Block",
                    "src": "465:36:7",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 937,
                              "name": "to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 929,
                              "src": "482:2:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 938,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 931,
                              "src": "486:6:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 936,
                            "name": "_mint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 515,
                            "src": "476:5:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256)"
                            }
                          },
                          "id": 939,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "476:17:7",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 940,
                        "nodeType": "ExpressionStatement",
                        "src": "476:17:7"
                      }
                    ]
                  },
                  "functionSelector": "40c10f19",
                  "id": 942,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [
                    {
                      "id": 934,
                      "kind": "modifierInvocation",
                      "modifierName": {
                        "id": 933,
                        "name": "onlyOwner",
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 31,
                        "src": "455:9:7"
                      },
                      "nodeType": "ModifierInvocation",
                      "src": "455:9:7"
                    }
                  ],
                  "name": "mint",
                  "nameLocation": "415:4:7",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 932,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 929,
                        "mutability": "mutable",
                        "name": "to",
                        "nameLocation": "428:2:7",
                        "nodeType": "VariableDeclaration",
                        "scope": 942,
                        "src": "420:10:7",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 928,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "420:7:7",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 931,
                        "mutability": "mutable",
                        "name": "amount",
                        "nameLocation": "440:6:7",
                        "nodeType": "VariableDeclaration",
                        "scope": 942,
                        "src": "432:14:7",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 930,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "432:7:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "src": "419:28:7"
                  },
                  "returnParameters": {
                    "id": 935,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "465:0:7"
                  },
                  "scope": 943,
                  "src": "406:95:7",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                }
              ],
              "scope": 944,
              "src": "249:255:7",
              "usedErrors": []
            }
          ],
          "src": "33:471:7"
        },
        "legacyAST": {
          "absolutePath": "project:/contracts/interlynk.sol",
          "exportedSymbols": {
            "Context": [
              867
            ],
            "ERC20": [
              698
            ],
            "ERC20Burnable": [
              820
            ],
            "IERC20": [
              776
            ],
            "IERC20Metadata": [
              845
            ],
            "Interlynk": [
              943
            ],
            "Ownable": [
              112
            ]
          },
          "id": 944,
          "license": "MIT",
          "nodeType": "SourceUnit",
          "nodes": [
            {
              "id": 902,
              "literals": [
                "solidity",
                "^",
                "0.8",
                ".4"
              ],
              "nodeType": "PragmaDirective",
              "src": "33:23:7"
            },
            {
              "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
              "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
              "id": 903,
              "nameLocation": "-1:-1:-1",
              "nodeType": "ImportDirective",
              "scope": 944,
              "sourceUnit": 699,
              "src": "60:55:7",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "absolutePath": "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol",
              "file": "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol",
              "id": 904,
              "nameLocation": "-1:-1:-1",
              "nodeType": "ImportDirective",
              "scope": 944,
              "sourceUnit": 821,
              "src": "117:74:7",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
              "file": "@openzeppelin/contracts/access/Ownable.sol",
              "id": 905,
              "nameLocation": "-1:-1:-1",
              "nodeType": "ImportDirective",
              "scope": 944,
              "sourceUnit": 113,
              "src": "193:52:7",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "abstract": false,
              "baseContracts": [
                {
                  "baseName": {
                    "id": 906,
                    "name": "ERC20",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 698,
                    "src": "271:5:7"
                  },
                  "id": 907,
                  "nodeType": "InheritanceSpecifier",
                  "src": "271:5:7"
                },
                {
                  "baseName": {
                    "id": 908,
                    "name": "ERC20Burnable",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 820,
                    "src": "278:13:7"
                  },
                  "id": 909,
                  "nodeType": "InheritanceSpecifier",
                  "src": "278:13:7"
                },
                {
                  "baseName": {
                    "id": 910,
                    "name": "Ownable",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 112,
                    "src": "293:7:7"
                  },
                  "id": 911,
                  "nodeType": "InheritanceSpecifier",
                  "src": "293:7:7"
                }
              ],
              "canonicalName": "Interlynk",
              "contractDependencies": [],
              "contractKind": "contract",
              "fullyImplemented": true,
              "id": 943,
              "linearizedBaseContracts": [
                943,
                112,
                820,
                698,
                845,
                776,
                867
              ],
              "name": "Interlynk",
              "nameLocation": "258:9:7",
              "nodeType": "ContractDefinition",
              "nodes": [
                {
                  "body": {
                    "id": 926,
                    "nodeType": "Block",
                    "src": "348:50:7",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 919,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "365:3:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 920,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "365:10:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_rational_1000000_by_1",
                                "typeString": "int_const 1000000"
                              },
                              "id": 923,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "leftExpression": {
                                "hexValue": "313030303030",
                                "id": 921,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "377:6:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100000_by_1",
                                  "typeString": "int_const 100000"
                                },
                                "value": "100000"
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "3130",
                                "id": 922,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "386:2:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_10_by_1",
                                  "typeString": "int_const 10"
                                },
                                "value": "10"
                              },
                              "src": "377:11:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1000000_by_1",
                                "typeString": "int_const 1000000"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_rational_1000000_by_1",
                                "typeString": "int_const 1000000"
                              }
                            ],
                            "id": 918,
                            "name": "_mint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 515,
                            "src": "359:5:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256)"
                            }
                          },
                          "id": 924,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "359:31:7",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 925,
                        "nodeType": "ExpressionStatement",
                        "src": "359:31:7"
                      }
                    ]
                  },
                  "id": 927,
                  "implemented": true,
                  "kind": "constructor",
                  "modifiers": [
                    {
                      "arguments": [
                        {
                          "hexValue": "496e7465726c796e6b",
                          "id": 914,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "328:11:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_4369163b4f28286089d51b7c99c48d28351e689c3baaf6c01b28a8b7c1ad2d46",
                            "typeString": "literal_string \"Interlynk\""
                          },
                          "value": "Interlynk"
                        },
                        {
                          "hexValue": "494c4b",
                          "id": 915,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "341:5:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_856c6557a4a628215eaa074ccea96bb31ac46d9b470950684e33ba0a16fad388",
                            "typeString": "literal_string \"ILK\""
                          },
                          "value": "ILK"
                        }
                      ],
                      "id": 916,
                      "kind": "baseConstructorSpecifier",
                      "modifierName": {
                        "id": 913,
                        "name": "ERC20",
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 698,
                        "src": "322:5:7"
                      },
                      "nodeType": "ModifierInvocation",
                      "src": "322:25:7"
                    }
                  ],
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 912,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "319:2:7"
                  },
                  "returnParameters": {
                    "id": 917,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "348:0:7"
                  },
                  "scope": 943,
                  "src": "308:90:7",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 941,
                    "nodeType": "Block",
                    "src": "465:36:7",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 937,
                              "name": "to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 929,
                              "src": "482:2:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 938,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 931,
                              "src": "486:6:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 936,
                            "name": "_mint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 515,
                            "src": "476:5:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256)"
                            }
                          },
                          "id": 939,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "476:17:7",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 940,
                        "nodeType": "ExpressionStatement",
                        "src": "476:17:7"
                      }
                    ]
                  },
                  "functionSelector": "40c10f19",
                  "id": 942,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [
                    {
                      "id": 934,
                      "kind": "modifierInvocation",
                      "modifierName": {
                        "id": 933,
                        "name": "onlyOwner",
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 31,
                        "src": "455:9:7"
                      },
                      "nodeType": "ModifierInvocation",
                      "src": "455:9:7"
                    }
                  ],
                  "name": "mint",
                  "nameLocation": "415:4:7",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 932,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 929,
                        "mutability": "mutable",
                        "name": "to",
                        "nameLocation": "428:2:7",
                        "nodeType": "VariableDeclaration",
                        "scope": 942,
                        "src": "420:10:7",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 928,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "420:7:7",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 931,
                        "mutability": "mutable",
                        "name": "amount",
                        "nameLocation": "440:6:7",
                        "nodeType": "VariableDeclaration",
                        "scope": 942,
                        "src": "432:14:7",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 930,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "432:7:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "src": "419:28:7"
                  },
                  "returnParameters": {
                    "id": 935,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "465:0:7"
                  },
                  "scope": 943,
                  "src": "406:95:7",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                }
              ],
              "scope": 944,
              "src": "249:255:7",
              "usedErrors": []
            }
          ],
          "src": "33:471:7"
        },
        "compiler": {
          "name": "solc",
          "version": "0.8.15+commit.e14f2714.Emscripten.clang"
        },
        "networks": {
          "5777": {
            "events": {},
            "links": {},
            "address": "0x19d85D9b9cB40FD09418e8366D510856622d2cEE",
            "transactionHash": "0xcb996896fefcfab8514983286fc31f95efe39593329fb3632260c7e8c8d07794"
          }
        },
        "schemaVersion": "3.4.3",
        "updatedAt": "2022-07-17T13:04:23.024Z",
        "networkType": "ethereum",
        "devdoc": {
          "kind": "dev",
          "methods": {
            "allowance(address,address)": {
              "details": "See {IERC20-allowance}."
            },
            "approve(address,uint256)": {
              "details": "See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."
            },
            "balanceOf(address)": {
              "details": "See {IERC20-balanceOf}."
            },
            "burn(uint256)": {
              "details": "Destroys `amount` tokens from the caller. See {ERC20-_burn}."
            },
            "burnFrom(address,uint256)": {
              "details": "Destroys `amount` tokens from `account`, deducting from the caller's allowance. See {ERC20-_burn} and {ERC20-allowance}. Requirements: - the caller must have allowance for ``accounts``'s tokens of at least `amount`."
            },
            "decimals()": {
              "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
            },
            "decreaseAllowance(address,uint256)": {
              "details": "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
            },
            "increaseAllowance(address,uint256)": {
              "details": "Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."
            },
            "name()": {
              "details": "Returns the name of the token."
            },
            "owner()": {
              "details": "Returns the address of the current owner."
            },
            "renounceOwnership()": {
              "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
            },
            "symbol()": {
              "details": "Returns the symbol of the token, usually a shorter version of the name."
            },
            "totalSupply()": {
              "details": "See {IERC20-totalSupply}."
            },
            "transfer(address,uint256)": {
              "details": "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`."
            },
            "transferFrom(address,address,uint256)": {
              "details": "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`."
            },
            "transferOwnership(address)": {
              "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
            }
          },
          "version": 1
        },
        "userdoc": {
          "kind": "user",
          "methods": {},
          "version": 1
        }
      }
];

module.exports = {
  CONTACT_ABI,
  CONTACT_ADDRESS,
};
