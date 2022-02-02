/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BCTFuture, BCTFutureInterface } from "../BCTFuture";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cap",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct BCTFuture.Balance[]",
        name: "balances",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162002a1b38038062002a1b83398181016040528101906200003791906200080f565b816040518060400160405280601481526020017f43727970746f20546f64617920467574757265730000000000000000000000008152506040518060400160405280600481526020017f42435446000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000bc929190620004d8565b508060049080519060200190620000d5929190620004d8565b505050600081116200011e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200011590620008d6565b60405180910390fd5b806080818152505050620001476200013b620001e260201b60201c565b620001ea60201b60201c565b6000600560146101000a81548160ff02191690831515021790555060005b8151811015620001d957620001c3828281518110620001895762000188620008f8565b5b602002602001015160000151838381518110620001ab57620001aa620008f8565b5b602002602001015160200151620002b060201b60201c565b8080620001d09062000956565b91505062000165565b50505062000b78565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b620002c06200034160201b60201c565b81620002d66200034b60201b620004241760201c565b620002e29190620009a4565b111562000326576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200031d9062000a51565b60405180910390fd5b6200033d82826200035560201b62000aa91760201c565b5050565b6000608051905090565b6000600254905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620003c8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003bf9062000ac3565b60405180910390fd5b620003dc60008383620004ce60201b60201c565b8060026000828254620003f09190620009a4565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620004479190620009a4565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620004ae919062000af6565b60405180910390a3620004ca60008383620004d360201b60201c565b5050565b505050565b505050565b828054620004e69062000b42565b90600052602060002090601f0160209004810192826200050a576000855562000556565b82601f106200052557805160ff191683800117855562000556565b8280016001018555821562000556579182015b828111156200055557825182559160200191906001019062000538565b5b50905062000565919062000569565b5090565b5b80821115620005845760008160009055506001016200056a565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b620005b1816200059c565b8114620005bd57600080fd5b50565b600081519050620005d181620005a6565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200062782620005dc565b810181811067ffffffffffffffff82111715620006495762000648620005ed565b5b80604052505050565b60006200065e62000588565b90506200066c82826200061c565b919050565b600067ffffffffffffffff8211156200068f576200068e620005ed565b5b602082029050602081019050919050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620006d782620006aa565b9050919050565b620006e981620006ca565b8114620006f557600080fd5b50565b6000815190506200070981620006de565b92915050565b600060408284031215620007285762000727620006a5565b5b62000734604062000652565b905060006200074684828501620006f8565b60008301525060206200075c84828501620005c0565b60208301525092915050565b60006200077f620007798462000671565b62000652565b90508083825260208201905060408402830185811115620007a557620007a4620006a0565b5b835b81811015620007d25780620007bd88826200070f565b845260208401935050604081019050620007a7565b5050509392505050565b600082601f830112620007f457620007f3620005d7565b5b81516200080684826020860162000768565b91505092915050565b6000806040838503121562000829576200082862000592565b5b60006200083985828601620005c0565b925050602083015167ffffffffffffffff8111156200085d576200085c62000597565b5b6200086b85828601620007dc565b9150509250929050565b600082825260208201905092915050565b7f45524332304361707065643a2063617020697320300000000000000000000000600082015250565b6000620008be60158362000875565b9150620008cb8262000886565b602082019050919050565b60006020820190508181036000830152620008f181620008af565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000963826200059c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141562000999576200099862000927565b5b600182019050919050565b6000620009b1826200059c565b9150620009be836200059c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620009f657620009f562000927565b5b828201905092915050565b7f45524332304361707065643a2063617020657863656564656400000000000000600082015250565b600062000a3960198362000875565b915062000a468262000a01565b602082019050919050565b6000602082019050818103600083015262000a6c8162000a2a565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000aab601f8362000875565b915062000ab88262000a73565b602082019050919050565b6000602082019050818103600083015262000ade8162000a9c565b9050919050565b62000af0816200059c565b82525050565b600060208201905062000b0d600083018462000ae5565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168062000b5b57607f821691505b6020821081141562000b725762000b7162000b13565b5b50919050565b608051611e8762000b9460003960006105330152611e876000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a257806395d89b411161007157806395d89b41146102aa578063a457c2d7146102c8578063a9059cbb146102f8578063dd62ed3e14610328578063f2fde38b146103585761010b565b806370a0823114610236578063715018a61461026657806379cc6790146102705780638da5cb5b1461028c5761010b565b8063313ce567116100de578063313ce567146101ac578063355274ea146101ca57806339509351146101e85780635c975abb146102185761010b565b806306fdde0314610110578063095ea7b31461012e57806318160ddd1461015e57806323b872dd1461017c575b600080fd5b610118610374565b604051610125919061139d565b60405180910390f35b61014860048036038101906101439190611458565b610406565b60405161015591906114b3565b60405180910390f35b610166610424565b60405161017391906114dd565b60405180910390f35b610196600480360381019061019191906114f8565b61042e565b6040516101a391906114b3565b60405180910390f35b6101b4610526565b6040516101c19190611567565b60405180910390f35b6101d261052f565b6040516101df91906114dd565b60405180910390f35b61020260048036038101906101fd9190611458565b610557565b60405161020f91906114b3565b60405180910390f35b610220610603565b60405161022d91906114b3565b60405180910390f35b610250600480360381019061024b9190611582565b61061a565b60405161025d91906114dd565b60405180910390f35b61026e610662565b005b61028a60048036038101906102859190611458565b6106ea565b005b610294610765565b6040516102a191906115be565b60405180910390f35b6102b261078f565b6040516102bf919061139d565b60405180910390f35b6102e260048036038101906102dd9190611458565b610821565b6040516102ef91906114b3565b60405180910390f35b610312600480360381019061030d9190611458565b61090c565b60405161031f91906114b3565b60405180910390f35b610342600480360381019061033d91906115d9565b61092a565b60405161034f91906114dd565b60405180910390f35b610372600480360381019061036d9190611582565b6109b1565b005b60606003805461038390611648565b80601f01602080910402602001604051908101604052809291908181526020018280546103af90611648565b80156103fc5780601f106103d1576101008083540402835291602001916103fc565b820191906000526020600020905b8154815290600101906020018083116103df57829003601f168201915b5050505050905090565b600061041a610413610c09565b8484610c11565b6001905092915050565b6000600254905090565b600061043b848484610ddc565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610486610c09565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610506576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104fd906116ec565b60405180910390fd5b61051a85610512610c09565b858403610c11565b60019150509392505050565b60006012905090565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b60006105f9610564610c09565b848460016000610572610c09565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546105f4919061173b565b610c11565b6001905092915050565b6000600560149054906101000a900460ff16905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61066a610c09565b73ffffffffffffffffffffffffffffffffffffffff16610688610765565b73ffffffffffffffffffffffffffffffffffffffff16146106de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d5906117dd565b60405180910390fd5b6106e8600061105d565b565b60006106fd836106f8610c09565b61092a565b905081811015610742576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107399061186f565b60405180910390fd5b6107568361074e610c09565b848403610c11565b6107608383611123565b505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461079e90611648565b80601f01602080910402602001604051908101604052809291908181526020018280546107ca90611648565b80156108175780601f106107ec57610100808354040283529160200191610817565b820191906000526020600020905b8154815290600101906020018083116107fa57829003601f168201915b5050505050905090565b60008060016000610830610c09565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156108ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e490611901565b60405180910390fd5b6109016108f8610c09565b85858403610c11565b600191505092915050565b6000610920610919610c09565b8484610ddc565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6109b9610c09565b73ffffffffffffffffffffffffffffffffffffffff166109d7610765565b73ffffffffffffffffffffffffffffffffffffffff1614610a2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a24906117dd565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a9d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9490611993565b60405180910390fd5b610aa68161105d565b50565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b19576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b10906119ff565b60405180910390fd5b610b25600083836112fa565b8060026000828254610b37919061173b565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b8c919061173b565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610bf191906114dd565b60405180910390a3610c05600083836112ff565b5050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c81576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7890611a91565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610cf1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce890611b23565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610dcf91906114dd565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610e4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4390611bb5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ebc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb390611c47565b60405180910390fd5b610ec78383836112fa565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610f4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4490611cd9565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610fe0919061173b565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161104491906114dd565b60405180910390a36110578484846112ff565b50505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611193576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161118a90611d6b565b60405180910390fd5b61119f826000836112fa565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611225576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161121c90611dfd565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816002600082825461127c9190611e1d565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516112e191906114dd565b60405180910390a36112f5836000846112ff565b505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561133e578082015181840152602081019050611323565b8381111561134d576000848401525b50505050565b6000601f19601f8301169050919050565b600061136f82611304565b611379818561130f565b9350611389818560208601611320565b61139281611353565b840191505092915050565b600060208201905081810360008301526113b78184611364565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006113ef826113c4565b9050919050565b6113ff816113e4565b811461140a57600080fd5b50565b60008135905061141c816113f6565b92915050565b6000819050919050565b61143581611422565b811461144057600080fd5b50565b6000813590506114528161142c565b92915050565b6000806040838503121561146f5761146e6113bf565b5b600061147d8582860161140d565b925050602061148e85828601611443565b9150509250929050565b60008115159050919050565b6114ad81611498565b82525050565b60006020820190506114c860008301846114a4565b92915050565b6114d781611422565b82525050565b60006020820190506114f260008301846114ce565b92915050565b600080600060608486031215611511576115106113bf565b5b600061151f8682870161140d565b93505060206115308682870161140d565b925050604061154186828701611443565b9150509250925092565b600060ff82169050919050565b6115618161154b565b82525050565b600060208201905061157c6000830184611558565b92915050565b600060208284031215611598576115976113bf565b5b60006115a68482850161140d565b91505092915050565b6115b8816113e4565b82525050565b60006020820190506115d360008301846115af565b92915050565b600080604083850312156115f0576115ef6113bf565b5b60006115fe8582860161140d565b925050602061160f8582860161140d565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061166057607f821691505b6020821081141561167457611673611619565b5b50919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b60006116d660288361130f565b91506116e18261167a565b604082019050919050565b60006020820190508181036000830152611705816116c9565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061174682611422565b915061175183611422565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156117865761178561170c565b5b828201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006117c760208361130f565b91506117d282611791565b602082019050919050565b600060208201905081810360008301526117f6816117ba565b9050919050565b7f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f7760008201527f616e636500000000000000000000000000000000000000000000000000000000602082015250565b600061185960248361130f565b9150611864826117fd565b604082019050919050565b600060208201905081810360008301526118888161184c565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b60006118eb60258361130f565b91506118f68261188f565b604082019050919050565b6000602082019050818103600083015261191a816118de565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061197d60268361130f565b915061198882611921565b604082019050919050565b600060208201905081810360008301526119ac81611970565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006119e9601f8361130f565b91506119f4826119b3565b602082019050919050565b60006020820190508181036000830152611a18816119dc565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611a7b60248361130f565b9150611a8682611a1f565b604082019050919050565b60006020820190508181036000830152611aaa81611a6e565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611b0d60228361130f565b9150611b1882611ab1565b604082019050919050565b60006020820190508181036000830152611b3c81611b00565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611b9f60258361130f565b9150611baa82611b43565b604082019050919050565b60006020820190508181036000830152611bce81611b92565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611c3160238361130f565b9150611c3c82611bd5565b604082019050919050565b60006020820190508181036000830152611c6081611c24565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611cc360268361130f565b9150611cce82611c67565b604082019050919050565b60006020820190508181036000830152611cf281611cb6565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611d5560218361130f565b9150611d6082611cf9565b604082019050919050565b60006020820190508181036000830152611d8481611d48565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000611de760228361130f565b9150611df282611d8b565b604082019050919050565b60006020820190508181036000830152611e1681611dda565b9050919050565b6000611e2882611422565b9150611e3383611422565b925082821015611e4657611e4561170c565b5b82820390509291505056fea26469706673582212201c0d1ec64c55e640fc65d14d03d602ec236146b1e0552f5b21b07e6dc2bb663664736f6c634300080b0033";

export class BCTFuture__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    cap: BigNumberish,
    balances: { account: string; amount: BigNumberish }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BCTFuture> {
    return super.deploy(cap, balances, overrides || {}) as Promise<BCTFuture>;
  }
  getDeployTransaction(
    cap: BigNumberish,
    balances: { account: string; amount: BigNumberish }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(cap, balances, overrides || {});
  }
  attach(address: string): BCTFuture {
    return super.attach(address) as BCTFuture;
  }
  connect(signer: Signer): BCTFuture__factory {
    return super.connect(signer) as BCTFuture__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BCTFutureInterface {
    return new utils.Interface(_abi) as BCTFutureInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BCTFuture {
    return new Contract(address, _abi, signerOrProvider) as BCTFuture;
  }
}
