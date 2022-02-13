/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Signature, SignatureInterface } from "../Signature";

const _abi = [
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610df6806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806397aba7f914610051578063cffc18eb14610081578063d2b0737b146100b1578063fa540801146100e1575b600080fd5b61006b600480360381019061006691906108aa565b610111565b6040516100789190610947565b60405180910390f35b61009b60048036038101906100969190610a24565b61025d565b6040516100a89190610ad9565b60405180910390f35b6100cb60048036038101906100c69190610af4565b610439565b6040516100d89190610b56565b60405180910390f35b6100fb60048036038101906100f69190610b71565b6104f3565b6040516101089190610b56565b60405180910390f35b600061013f7fc2360db0ef734cb3dbe4d5255e4d48d1d4273f77b70fc3ffaf5d973fb851666260001b6105a7565b61016b7f42b15436841aa5b6d263ea982dfa145d8724cdff5ac39622c4c7c5403e033b3a60001b6105a7565b6101977f157b4622f6925a8b1394a1c2633409cda990e840aebb232cfbffe4628a1c5ace60001b6105a7565b60008060006101a5856105aa565b9250925092506101d77f3765940d7bf5be27471cedcfb349a2f8d6c0e5950da1fd1d5775469ab1e0775560001b6105a7565b6102037fc330b26336e4dcd718e22dd62cd6cfa39dfa7a706838258276746b88a935103160001b6105a7565b600186828585604051600081526020016040526040516102269493929190610bba565b6020604051602081039080840390855afa158015610248573d6000803e3d6000fd5b50505060206040510351935050505092915050565b600061028b7f115078700334c7aba3003b25211a19dbea726cc85951c921932f18558f93538a60001b6105a7565b6102b77f80bc6e23186c4857a2c0172d8579c015c8c9c1b361206343758fe7613c46e1d860001b6105a7565b6102e37f5b8baf0adf3270ea59387113026a663dcfc22309a6337c31de661037c7e688bd60001b6105a7565b60006102f0878787610439565b905061031e7f74653362295f534641b9c84cf5b8e1e729c98dfd32787d2006304067dec6984c60001b6105a7565b61034a7f520c108d4a6d7b97ecc480e50e268fb1e444996cf16a3b01e75f50cca5b6dc6560001b6105a7565b6000610355826104f3565b90506103837f255c65f2df439bd0d49a7971fc9b5bf71420bd97668386a4421385d6e762a34e60001b6105a7565b6103af7fc372f6a0dbda16acffd439ebbd8e176de9563dbb8cc02286181f3caff72b5ce860001b6105a7565b8873ffffffffffffffffffffffffffffffffffffffff166104148287878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610111565b73ffffffffffffffffffffffffffffffffffffffff1614925050509695505050505050565b60006104677f7252eae9be3c42b5d66f6cb20159a31449e5db4b2b42828de04999f8d111b83860001b6105a7565b6104937fda5ec1d0c60d3130a1e53bd24f66849d4fb0879217dd1d07f9e95bcf1d3f136f60001b6105a7565b6104bf7fdc032b7cde97e177e5794aad996d43cfd45b563d14333cac03f187b874451fe360001b6105a7565b8383836040516020016104d493929190610c68565b6040516020818303038152906040528051906020012090509392505050565b60006105217f343b3b76002dadc842f376b73eade46f8a55300839a5d500520bb1803e5041b960001b6105a7565b61054d7f410a2ec84acb388dd7f56401abce8ba0ebf58089fb9a204673bf0d235dcd966d60001b6105a7565b6105797fcfb49e80c3da6f7218ac8479c10b45a88c43d4267770a7698c8f4e1a8e39350760001b6105a7565b8160405160200161058a9190610d1d565b604051602081830303815290604052805190602001209050919050565b50565b60008060006105db7f1f4029faae94f44befa6dead4468dc4b90aaa85b8a8807d6be2e023ba67f8ab360001b6105a7565b6106077f5307a6478608760186b541551ca3117b7a9f495e1affaec2c6ac408abfff165660001b6105a7565b6106337f92a2d5f3900bbfcec13fdee88dc835eea52672f3142cee7205f5382e5c00683060001b6105a7565b61065f7fa1ac4f65788c8bb9dd626c0afab31a665cbadf5f25c7d3b9d2dbb000a7e41b3a60001b6105a7565b60418451146106a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069a90610da0565b60405180910390fd5b6106cf7f98a3ad9744d82a8717169c9d4d26f1c535564a4082d9a626d901d1db0e45f5cf60001b6105a7565b6106fb7f5e1aaf5e4fb5e303a2f15d4ebd046de84bde325a529f30df5fa74abed505068060001b6105a7565b6020840151925060408401519150606084015160001a90509193909250565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6107418161072e565b811461074c57600080fd5b50565b60008135905061075e81610738565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6107b78261076e565b810181811067ffffffffffffffff821117156107d6576107d561077f565b5b80604052505050565b60006107e961071a565b90506107f582826107ae565b919050565b600067ffffffffffffffff8211156108155761081461077f565b5b61081e8261076e565b9050602081019050919050565b82818337600083830152505050565b600061084d610848846107fa565b6107df565b90508281526020810184848401111561086957610868610769565b5b61087484828561082b565b509392505050565b600082601f83011261089157610890610764565b5b81356108a184826020860161083a565b91505092915050565b600080604083850312156108c1576108c0610724565b5b60006108cf8582860161074f565b925050602083013567ffffffffffffffff8111156108f0576108ef610729565b5b6108fc8582860161087c565b9150509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061093182610906565b9050919050565b61094181610926565b82525050565b600060208201905061095c6000830184610938565b92915050565b61096b81610926565b811461097657600080fd5b50565b60008135905061098881610962565b92915050565b6000819050919050565b6109a18161098e565b81146109ac57600080fd5b50565b6000813590506109be81610998565b92915050565b600080fd5b600080fd5b60008083601f8401126109e4576109e3610764565b5b8235905067ffffffffffffffff811115610a0157610a006109c4565b5b602083019150836001820283011115610a1d57610a1c6109c9565b5b9250929050565b60008060008060008060a08789031215610a4157610a40610724565b5b6000610a4f89828a01610979565b9650506020610a6089828a01610979565b9550506040610a7189828a016109af565b9450506060610a8289828a016109af565b935050608087013567ffffffffffffffff811115610aa357610aa2610729565b5b610aaf89828a016109ce565b92509250509295509295509295565b60008115159050919050565b610ad381610abe565b82525050565b6000602082019050610aee6000830184610aca565b92915050565b600080600060608486031215610b0d57610b0c610724565b5b6000610b1b86828701610979565b9350506020610b2c868287016109af565b9250506040610b3d868287016109af565b9150509250925092565b610b508161072e565b82525050565b6000602082019050610b6b6000830184610b47565b92915050565b600060208284031215610b8757610b86610724565b5b6000610b958482850161074f565b91505092915050565b600060ff82169050919050565b610bb481610b9e565b82525050565b6000608082019050610bcf6000830187610b47565b610bdc6020830186610bab565b610be96040830185610b47565b610bf66060830184610b47565b95945050505050565b60008160601b9050919050565b6000610c1782610bff565b9050919050565b6000610c2982610c0c565b9050919050565b610c41610c3c82610926565b610c1e565b82525050565b6000819050919050565b610c62610c5d8261098e565b610c47565b82525050565b6000610c748286610c30565b601482019150610c848285610c51565b602082019150610c948284610c51565b602082019150819050949350505050565b600081905092915050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000600082015250565b6000610ce6601c83610ca5565b9150610cf182610cb0565b601c82019050919050565b6000819050919050565b610d17610d128261072e565b610cfc565b82525050565b6000610d2882610cd9565b9150610d348284610d06565b60208201915081905092915050565b600082825260208201905092915050565b7f496e76616c6964207369676e6174757265206c656e6774680000000000000000600082015250565b6000610d8a601883610d43565b9150610d9582610d54565b602082019050919050565b60006020820190508181036000830152610db981610d7d565b905091905056fea2646970667358221220d21826122980f9adfa9b74711fa21a83eddb8e2732bf36fd7ed2a5602ed8135f64736f6c634300080b0033";

export class Signature__factory extends ContractFactory {
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
  ): Promise<Signature> {
    return super.deploy(overrides || {}) as Promise<Signature>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Signature {
    return super.attach(address) as Signature;
  }
  connect(signer: Signer): Signature__factory {
    return super.connect(signer) as Signature__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SignatureInterface {
    return new utils.Interface(_abi) as SignatureInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Signature {
    return new Contract(address, _abi, signerOrProvider) as Signature;
  }
}
