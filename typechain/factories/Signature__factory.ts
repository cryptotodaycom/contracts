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
  "0x608060405234801561001057600080fd5b50610df6806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806397aba7f914610051578063cffc18eb14610081578063d2b0737b146100b1578063fa540801146100e1575b600080fd5b61006b600480360381019061006691906108aa565b610111565b6040516100789190610947565b60405180910390f35b61009b60048036038101906100969190610a24565b61025d565b6040516100a89190610ad9565b60405180910390f35b6100cb60048036038101906100c69190610af4565b610439565b6040516100d89190610b56565b60405180910390f35b6100fb60048036038101906100f69190610b71565b6104f3565b6040516101089190610b56565b60405180910390f35b600061013f7f2ab282728e61f4118783dd1b55a63417b4394bf6426d84e18a9980c6938133d260001b6105a7565b61016b7f2e5216a0a26ea8deba04392c613179067924fb1e86cbd37589e54a9f5079c84f60001b6105a7565b6101977f4001a9d21adb6df2a40d754423a0696b6b770fd14842925dd8fa3e2ac476de0760001b6105a7565b60008060006101a5856105aa565b9250925092506101d77fbe6cd7aaecd3507dda07743a310cefa38161953737ca152445b6894c5b9fe33060001b6105a7565b6102037fae7e7aa85d5d8e409ae8e728d5f6867b4849e861f2a18f8ad68c98210556c7ac60001b6105a7565b600186828585604051600081526020016040526040516102269493929190610bba565b6020604051602081039080840390855afa158015610248573d6000803e3d6000fd5b50505060206040510351935050505092915050565b600061028b7fa6ba53668207d3ac539576e3e8e820b6f8e54ac0663f416df975720e83dea6ae60001b6105a7565b6102b77f47ea19af58894d857a7863a4aa3322d736dda7ad9cfd145dfc1b12f7bf0f1c8a60001b6105a7565b6102e37f8ac8a8dd4c1e62f460931b415db877e5b10571f9daf4ce2faaf20513213f423c60001b6105a7565b60006102f0878787610439565b905061031e7f8916fa001f92908e55ac6c2da79b3c4883759c2afc64b1533d3f635ff811bbfb60001b6105a7565b61034a7f94b8539807566016d9b461f110dffe06d04c97935e792d0350251b02ddf4231d60001b6105a7565b6000610355826104f3565b90506103837f0230a256e0db4a5c1ea48100190551aa1ae5d8cd4e4fbe559783b967d45d8ede60001b6105a7565b6103af7f8d2cf54ae96d54d9112f8169567227760f2257879f0e5dea225387ab1b983b4c60001b6105a7565b8873ffffffffffffffffffffffffffffffffffffffff166104148287878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610111565b73ffffffffffffffffffffffffffffffffffffffff1614925050509695505050505050565b60006104677f450eb67f477290721ed40e2d2d917cf63741312bb1189509cb279c80b42793c560001b6105a7565b6104937f8a0c60270a1b27f5ecf65e5aa2b040dadb1b794e7c00c876e1c5fb9f0a61969560001b6105a7565b6104bf7f7dbef08a7108b4700484d65d23e2b7037e06eddfba2ccc957549ee5f6d20717160001b6105a7565b8383836040516020016104d493929190610c68565b6040516020818303038152906040528051906020012090509392505050565b60006105217f9d9d5ef39e044116f29f1e92d2b50cf6e694ac497554fe9a7bbee01df869a1ba60001b6105a7565b61054d7f50a864b04a9e47571c72e8ce1c95b1791a0fbac25268a019770877e0e3d97b1360001b6105a7565b6105797f25e75fd5beb69655f044828a78f063348f3f45559af8fff7ed5e8f2db5d7ebb260001b6105a7565b8160405160200161058a9190610d1d565b604051602081830303815290604052805190602001209050919050565b50565b60008060006105db7fcf616768c392a7e56ddef1b040df9d77e7141e8ae7429373c358a7584297932260001b6105a7565b6106077f044ce21a4c15c3325b34d273298611171720e84979ddf35ea56a964ba136ac5760001b6105a7565b6106337fa4f46cd631a7f9e8a94e22a09de608606d0a65561e3689e30b61d5c97797664660001b6105a7565b61065f7f06f03c2658b97854f05d266320cb222e6e3b97000e51e9255d4ff12dabf40db160001b6105a7565b60418451146106a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069a90610da0565b60405180910390fd5b6106cf7f24f6a0d0a6cc42668b43ba98f3ff4ca0dbefd9dc5fbec0a53d501319ce7846be60001b6105a7565b6106fb7fea6d5808c09c12529b08d268330761b18010a477da0419f86c0069bece91c81a60001b6105a7565b6020840151925060408401519150606084015160001a90509193909250565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6107418161072e565b811461074c57600080fd5b50565b60008135905061075e81610738565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6107b78261076e565b810181811067ffffffffffffffff821117156107d6576107d561077f565b5b80604052505050565b60006107e961071a565b90506107f582826107ae565b919050565b600067ffffffffffffffff8211156108155761081461077f565b5b61081e8261076e565b9050602081019050919050565b82818337600083830152505050565b600061084d610848846107fa565b6107df565b90508281526020810184848401111561086957610868610769565b5b61087484828561082b565b509392505050565b600082601f83011261089157610890610764565b5b81356108a184826020860161083a565b91505092915050565b600080604083850312156108c1576108c0610724565b5b60006108cf8582860161074f565b925050602083013567ffffffffffffffff8111156108f0576108ef610729565b5b6108fc8582860161087c565b9150509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061093182610906565b9050919050565b61094181610926565b82525050565b600060208201905061095c6000830184610938565b92915050565b61096b81610926565b811461097657600080fd5b50565b60008135905061098881610962565b92915050565b6000819050919050565b6109a18161098e565b81146109ac57600080fd5b50565b6000813590506109be81610998565b92915050565b600080fd5b600080fd5b60008083601f8401126109e4576109e3610764565b5b8235905067ffffffffffffffff811115610a0157610a006109c4565b5b602083019150836001820283011115610a1d57610a1c6109c9565b5b9250929050565b60008060008060008060a08789031215610a4157610a40610724565b5b6000610a4f89828a01610979565b9650506020610a6089828a01610979565b9550506040610a7189828a016109af565b9450506060610a8289828a016109af565b935050608087013567ffffffffffffffff811115610aa357610aa2610729565b5b610aaf89828a016109ce565b92509250509295509295509295565b60008115159050919050565b610ad381610abe565b82525050565b6000602082019050610aee6000830184610aca565b92915050565b600080600060608486031215610b0d57610b0c610724565b5b6000610b1b86828701610979565b9350506020610b2c868287016109af565b9250506040610b3d868287016109af565b9150509250925092565b610b508161072e565b82525050565b6000602082019050610b6b6000830184610b47565b92915050565b600060208284031215610b8757610b86610724565b5b6000610b958482850161074f565b91505092915050565b600060ff82169050919050565b610bb481610b9e565b82525050565b6000608082019050610bcf6000830187610b47565b610bdc6020830186610bab565b610be96040830185610b47565b610bf66060830184610b47565b95945050505050565b60008160601b9050919050565b6000610c1782610bff565b9050919050565b6000610c2982610c0c565b9050919050565b610c41610c3c82610926565b610c1e565b82525050565b6000819050919050565b610c62610c5d8261098e565b610c47565b82525050565b6000610c748286610c30565b601482019150610c848285610c51565b602082019150610c948284610c51565b602082019150819050949350505050565b600081905092915050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000600082015250565b6000610ce6601c83610ca5565b9150610cf182610cb0565b601c82019050919050565b6000819050919050565b610d17610d128261072e565b610cfc565b82525050565b6000610d2882610cd9565b9150610d348284610d06565b60208201915081905092915050565b600082825260208201905092915050565b7f496e76616c6964207369676e6174757265206c656e6774680000000000000000600082015250565b6000610d8a601883610d43565b9150610d9582610d54565b602082019050919050565b60006020820190508181036000830152610db981610d7d565b905091905056fea264697066735822122011c436a00cdce9e7c227143a61822428faa872fbed46ae61cd55b2078f56d4f564736f6c634300080b0033";

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
