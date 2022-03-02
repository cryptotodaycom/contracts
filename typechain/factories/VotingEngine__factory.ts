/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VotingEngine, VotingEngineInterface } from "../VotingEngine";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposited",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "proposal",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewards",
        type: "uint256",
      },
    ],
    name: "VoteProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "proposal",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ipfs",
        type: "string",
      },
    ],
    name: "VoteResolved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "messageHash",
        type: "bytes32",
      },
    ],
    name: "getEthSignedMessageHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "getMessageHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getVoteState",
    outputs: [
      {
        internalType: "string",
        name: "ipfs",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "listContractAddress_",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "list",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonceMap",
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
    inputs: [
      {
        internalType: "uint256",
        name: "rewardAmount",
        type: "uint256",
      },
    ],
    name: "proposeVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ethSignedMessageHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "recoverSigner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
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
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "ipfs",
        type: "string",
      },
    ],
    name: "resolveVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "togglePause",
    outputs: [],
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
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "withdrawFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "withdrawn",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506126ba806100206000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806397aba7f9116100a2578063c4d66de811610071578063c4d66de8146102b9578063cffc18eb146102d5578063d2b0737b14610305578063f2fde38b14610335578063fa5408011461035157610116565b806397aba7f914610247578063b0d8372c14610277578063b6b55f2514610293578063c4ae3168146102af57610116565b80635c975abb116100e95780635c975abb146101a15780636e978d77146101bf5780636ef61092146101ef578063715018a61461021f5780638da5cb5b1461022957610116565b80630f560cd71461011b5780630fde938b146101395780633e4300841461015557806355c6fbd114610171575b600080fd5b610123610381565b60405161013091906115f9565b60405180910390f35b610153600480360381019061014e9190611701565b6103a7565b005b61016f600480360381019061016a91906118ca565b6106c2565b005b61018b60048036038101906101869190611926565b610821565b60405161019891906119db565b60405180910390f35b6101a96108c6565b6040516101b69190611a18565b60405180910390f35b6101d960048036038101906101d49190611a33565b6108dd565b6040516101e69190611a6f565b60405180910390f35b61020960048036038101906102049190611a33565b6108f5565b6040516102169190611a6f565b60405180910390f35b61022761090d565b005b610231610995565b60405161023e9190611a99565b60405180910390f35b610261600480360381019061025c9190611b8b565b6109bf565b60405161026e9190611a99565b60405180910390f35b610291600480360381019061028c9190611926565b610a2e565b005b6102ad60048036038101906102a89190611926565b610b7b565b005b6102b7610cc5565b005b6102d360048036038101906102ce9190611a33565b610d66565b005b6102ef60048036038101906102ea9190611be7565b610ebc565b6040516102fc9190611a18565b60405180910390f35b61031f600480360381019061031a9190611c81565b610f63565b60405161032c9190611ce3565b60405180910390f35b61034f600480360381019061034a9190611a33565b610f99565b005b61036b60048036038101906103669190611cfe565b611091565b6040516103789190611ce3565b60405180910390f35b60c960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6103af6108c6565b156103ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e690611d77565b60405180910390fd5b60026065541415610435576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042c90611de3565b60405180910390fd5b6002606581905550610452610448610995565b8487878686610ebc565b610491576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048890611e4f565b60405180910390fd5b8360ca60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610512576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050990611ebb565b60405180910390fd5b60ca60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919061056290611f0a565b91905055508460cb60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105b69190611f53565b925050819055506105c56110c1565b73ffffffffffffffffffffffffffffffffffffffff167f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d58660405161060a9190611a6f565b60405180910390a260c960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84876040518363ffffffff1660e01b815260040161066f929190611fa9565b6020604051808303816000875af115801561068e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b29190611ffe565b5060016065819055505050505050565b6106ca6110c1565b73ffffffffffffffffffffffffffffffffffffffff166106e8610995565b73ffffffffffffffffffffffffffffffffffffffff161461073e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073590612077565b60405180910390fd5b604051806020016040528060008152508051906020012060cd60008481526020019081526020016000206040516107759190612197565b6040518091039020146107bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b4906121fa565b60405180910390fd5b8060cd600084815260200190815260200160002090805190602001906107e49291906114d7565b50817f8872f238824f299917ca25c8183c2a8a370af18e23913587ae2687e0adf5e2df8260405161081591906119db565b60405180910390a25050565b606060cd60008381526020019081526020016000208054610841906120c6565b80601f016020809104026020016040519081016040528092919081815260200182805461086d906120c6565b80156108ba5780601f1061088f576101008083540402835291602001916108ba565b820191906000526020600020905b81548152906001019060200180831161089d57829003601f168201915b50505050509050919050565b6000603360009054906101000a900460ff16905090565b60ca6020528060005260406000206000915090505481565b60cb6020528060005260406000206000915090505481565b6109156110c1565b73ffffffffffffffffffffffffffffffffffffffff16610933610995565b73ffffffffffffffffffffffffffffffffffffffff1614610989576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098090612077565b60405180910390fd5b61099360006110c9565b565b6000609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000806000806109ce8561118f565b925092509250600186828585604051600081526020016040526040516109f79493929190612236565b6020604051602081039080840390855afa158015610a19573d6000803e3d6000fd5b50505060206040510351935050505092915050565b610a366108c6565b15610a76576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6d90611d77565b60405180910390fd5b600060cc54905060c960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd610ac36110c1565b30856040518463ffffffff1660e01b8152600401610ae39392919061227b565b6020604051808303816000875af1158015610b02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b269190611ffe565b5060cc6000815480929190610b3a90611f0a565b9190505550807f5d414e449097c12a612015cfda21b7bbb3116b455bf92455702f490be10047da83604051610b6f9190611a6f565b60405180910390a25050565b610b836108c6565b15610bc3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bba90611d77565b60405180910390fd5b60c960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd610c096110c1565b30846040518463ffffffff1660e01b8152600401610c299392919061227b565b6020604051808303816000875af1158015610c48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6c9190611ffe565b50610c756110c1565b73ffffffffffffffffffffffffffffffffffffffff167f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c482604051610cba9190611a6f565b60405180910390a250565b610ccd6110c1565b73ffffffffffffffffffffffffffffffffffffffff16610ceb610995565b73ffffffffffffffffffffffffffffffffffffffff1614610d41576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3890612077565b60405180910390fd5b610d496108c6565b15610d5b57610d566111f7565b610d64565b610d63611299565b5b565b600060019054906101000a900460ff16610d8e5760008054906101000a900460ff1615610d97565b610d9661133c565b5b610dd6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dcd90612324565b60405180910390fd5b60008060019054906101000a900460ff161590508015610e26576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b610e2e61134d565b610e3661139e565b610e3e61140a565b610e4661146b565b8160c960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060cc81905550610e97611299565b8015610eb85760008060016101000a81548160ff0219169083151502179055505b5050565b600080610eca878787610f63565b90506000610ed782611091565b90508873ffffffffffffffffffffffffffffffffffffffff16610f3e8287878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506109bf565b73ffffffffffffffffffffffffffffffffffffffff1614925050509695505050505050565b6000838383604051602001610f7a939291906123ad565b6040516020818303038152906040528051906020012090509392505050565b610fa16110c1565b73ffffffffffffffffffffffffffffffffffffffff16610fbf610995565b73ffffffffffffffffffffffffffffffffffffffff1614611015576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100c90612077565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611085576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161107c9061245c565b60405180910390fd5b61108e816110c9565b50565b6000816040516020016110a491906124f4565b604051602081830303815290604052805190602001209050919050565b600033905090565b6000609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081609760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080600060418451146111d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111cf90612566565b60405180910390fd5b6020840151925060408401519150606084015160001a90509193909250565b6111ff6108c6565b61123e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611235906125d2565b60405180910390fd5b6000603360006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6112826110c1565b60405161128f9190611a99565b60405180910390a1565b6112a16108c6565b156112e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112d890611d77565b60405180910390fd5b6001603360006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586113256110c1565b6040516113329190611a99565b60405180910390a1565b6000611347306114c4565b15905090565b600060019054906101000a900460ff1661139c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161139390612664565b60405180910390fd5b565b600060019054906101000a900460ff166113ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113e490612664565b60405180910390fd5b6000603360006101000a81548160ff021916908315150217905550565b600060019054906101000a900460ff16611459576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161145090612664565b60405180910390fd5b6114696114646110c1565b6110c9565b565b600060019054906101000a900460ff166114ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114b190612664565b60405180910390fd5b6001606581905550565b600080823b905060008111915050919050565b8280546114e3906120c6565b90600052602060002090601f016020900481019282611505576000855561154c565b82601f1061151e57805160ff191683800117855561154c565b8280016001018555821561154c579182015b8281111561154b578251825591602001919060010190611530565b5b509050611559919061155d565b5090565b5b8082111561157657600081600090555060010161155e565b5090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006115bf6115ba6115b58461157a565b61159a565b61157a565b9050919050565b60006115d1826115a4565b9050919050565b60006115e3826115c6565b9050919050565b6115f3816115d8565b82525050565b600060208201905061160e60008301846115ea565b92915050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61163b81611628565b811461164657600080fd5b50565b60008135905061165881611632565b92915050565b60006116698261157a565b9050919050565b6116798161165e565b811461168457600080fd5b50565b60008135905061169681611670565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126116c1576116c061169c565b5b8235905067ffffffffffffffff8111156116de576116dd6116a1565b5b6020830191508360018202830111156116fa576116f96116a6565b5b9250929050565b60008060008060006080868803121561171d5761171c61161e565b5b600061172b88828901611649565b955050602061173c88828901611649565b945050604061174d88828901611687565b935050606086013567ffffffffffffffff81111561176e5761176d611623565b5b61177a888289016116ab565b92509250509295509295909350565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6117d78261178e565b810181811067ffffffffffffffff821117156117f6576117f561179f565b5b80604052505050565b6000611809611614565b905061181582826117ce565b919050565b600067ffffffffffffffff8211156118355761183461179f565b5b61183e8261178e565b9050602081019050919050565b82818337600083830152505050565b600061186d6118688461181a565b6117ff565b90508281526020810184848401111561188957611888611789565b5b61189484828561184b565b509392505050565b600082601f8301126118b1576118b061169c565b5b81356118c184826020860161185a565b91505092915050565b600080604083850312156118e1576118e061161e565b5b60006118ef85828601611649565b925050602083013567ffffffffffffffff8111156119105761190f611623565b5b61191c8582860161189c565b9150509250929050565b60006020828403121561193c5761193b61161e565b5b600061194a84828501611649565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561198d578082015181840152602081019050611972565b8381111561199c576000848401525b50505050565b60006119ad82611953565b6119b7818561195e565b93506119c781856020860161196f565b6119d08161178e565b840191505092915050565b600060208201905081810360008301526119f581846119a2565b905092915050565b60008115159050919050565b611a12816119fd565b82525050565b6000602082019050611a2d6000830184611a09565b92915050565b600060208284031215611a4957611a4861161e565b5b6000611a5784828501611687565b91505092915050565b611a6981611628565b82525050565b6000602082019050611a846000830184611a60565b92915050565b611a938161165e565b82525050565b6000602082019050611aae6000830184611a8a565b92915050565b6000819050919050565b611ac781611ab4565b8114611ad257600080fd5b50565b600081359050611ae481611abe565b92915050565b600067ffffffffffffffff821115611b0557611b0461179f565b5b611b0e8261178e565b9050602081019050919050565b6000611b2e611b2984611aea565b6117ff565b905082815260208101848484011115611b4a57611b49611789565b5b611b5584828561184b565b509392505050565b600082601f830112611b7257611b7161169c565b5b8135611b82848260208601611b1b565b91505092915050565b60008060408385031215611ba257611ba161161e565b5b6000611bb085828601611ad5565b925050602083013567ffffffffffffffff811115611bd157611bd0611623565b5b611bdd85828601611b5d565b9150509250929050565b60008060008060008060a08789031215611c0457611c0361161e565b5b6000611c1289828a01611687565b9650506020611c2389828a01611687565b9550506040611c3489828a01611649565b9450506060611c4589828a01611649565b935050608087013567ffffffffffffffff811115611c6657611c65611623565b5b611c7289828a016116ab565b92509250509295509295509295565b600080600060608486031215611c9a57611c9961161e565b5b6000611ca886828701611687565b9350506020611cb986828701611649565b9250506040611cca86828701611649565b9150509250925092565b611cdd81611ab4565b82525050565b6000602082019050611cf86000830184611cd4565b92915050565b600060208284031215611d1457611d1361161e565b5b6000611d2284828501611ad5565b91505092915050565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b6000611d6160108361195e565b9150611d6c82611d2b565b602082019050919050565b60006020820190508181036000830152611d9081611d54565b9050919050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6000611dcd601f8361195e565b9150611dd882611d97565b602082019050919050565b60006020820190508181036000830152611dfc81611dc0565b9050919050565b7f496e76616c6964207369676e6174757265000000000000000000000000000000600082015250565b6000611e3960118361195e565b9150611e4482611e03565b602082019050919050565b60006020820190508181036000830152611e6881611e2c565b9050919050565b7f496e76616c6964206e6f6e636500000000000000000000000000000000000000600082015250565b6000611ea5600d8361195e565b9150611eb082611e6f565b602082019050919050565b60006020820190508181036000830152611ed481611e98565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611f1582611628565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611f4857611f47611edb565b5b600182019050919050565b6000611f5e82611628565b9150611f6983611628565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611f9e57611f9d611edb565b5b828201905092915050565b6000604082019050611fbe6000830185611a8a565b611fcb6020830184611a60565b9392505050565b611fdb816119fd565b8114611fe657600080fd5b50565b600081519050611ff881611fd2565b92915050565b6000602082840312156120145761201361161e565b5b600061202284828501611fe9565b91505092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061206160208361195e565b915061206c8261202b565b602082019050919050565b6000602082019050818103600083015261209081612054565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806120de57607f821691505b602082108114156120f2576120f1612097565b5b50919050565b600081905092915050565b60008190508160005260206000209050919050565b60008154612125816120c6565b61212f81866120f8565b9450600182166000811461214a576001811461215b5761218e565b60ff1983168652818601935061218e565b61216485612103565b60005b8381101561218657815481890152600182019150602081019050612167565b838801955050505b50505092915050565b60006121a38284612118565b915081905092915050565b7f616c72656164795265736f6c7665640000000000000000000000000000000000600082015250565b60006121e4600f8361195e565b91506121ef826121ae565b602082019050919050565b60006020820190508181036000830152612213816121d7565b9050919050565b600060ff82169050919050565b6122308161221a565b82525050565b600060808201905061224b6000830187611cd4565b6122586020830186612227565b6122656040830185611cd4565b6122726060830184611cd4565b95945050505050565b60006060820190506122906000830186611a8a565b61229d6020830185611a8a565b6122aa6040830184611a60565b949350505050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b600061230e602e8361195e565b9150612319826122b2565b604082019050919050565b6000602082019050818103600083015261233d81612301565b9050919050565b60008160601b9050919050565b600061235c82612344565b9050919050565b600061236e82612351565b9050919050565b6123866123818261165e565b612363565b82525050565b6000819050919050565b6123a76123a282611628565b61238c565b82525050565b60006123b98286612375565b6014820191506123c98285612396565b6020820191506123d98284612396565b602082019150819050949350505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061244660268361195e565b9150612451826123ea565b604082019050919050565b6000602082019050818103600083015261247581612439565b9050919050565b600081905092915050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000600082015250565b60006124bd601c8361247c565b91506124c882612487565b601c82019050919050565b6000819050919050565b6124ee6124e982611ab4565b6124d3565b82525050565b60006124ff826124b0565b915061250b82846124dd565b60208201915081905092915050565b7f496e76616c6964207369676e6174757265206c656e6774680000000000000000600082015250565b600061255060188361195e565b915061255b8261251a565b602082019050919050565b6000602082019050818103600083015261257f81612543565b9050919050565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b60006125bc60148361195e565b91506125c782612586565b602082019050919050565b600060208201905081810360008301526125eb816125af565b9050919050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b600061264e602b8361195e565b9150612659826125f2565b604082019050919050565b6000602082019050818103600083015261267d81612641565b905091905056fea2646970667358221220157bb2e6cce7b00ecb51c4fe98dcc242d30112c6c766153b367edc6fdb80628764736f6c634300080c0033";

export class VotingEngine__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VotingEngine> {
    return super.deploy(overrides || {}) as Promise<VotingEngine>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): VotingEngine {
    return super.attach(address) as VotingEngine;
  }
  connect(signer: Signer): VotingEngine__factory {
    return super.connect(signer) as VotingEngine__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VotingEngineInterface {
    return new utils.Interface(_abi) as VotingEngineInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VotingEngine {
    return new Contract(address, _abi, signerOrProvider) as VotingEngine;
  }
}
