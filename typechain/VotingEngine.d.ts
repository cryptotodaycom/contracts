/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface VotingEngineInterface extends ethers.utils.Interface {
  functions: {
    "bct()": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "getEthSignedMessageHash(bytes32)": FunctionFragment;
    "getMessageHash(address,uint256,uint256)": FunctionFragment;
    "getVoteState(uint256)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "nonceMap(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "paused()": FunctionFragment;
    "proposeVote(uint256)": FunctionFragment;
    "recoverSigner(bytes32,bytes)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "resolveVote(uint256,string)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "verify(address,address,uint256,uint256,bytes)": FunctionFragment;
    "withdraw(uint256,uint256,bytes)": FunctionFragment;
    "withdrawn(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "bct", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getEthSignedMessageHash",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getMessageHash",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVoteState",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(functionFragment: "nonceMap", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposeVote",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "recoverSigner",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "resolveVote",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "withdrawn", values: [string]): string;

  decodeFunctionResult(functionFragment: "bct", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getEthSignedMessageHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMessageHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVoteState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonceMap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposeVote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recoverSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resolveVote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdrawn", data: BytesLike): Result;

  events: {
    "Deposited(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
    "VoteProposed(uint256,uint256)": EventFragment;
    "VoteResolved(uint256,string)": EventFragment;
    "Withdrawn(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VoteProposed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VoteResolved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export type DepositedEvent = TypedEvent<
  [string, BigNumber] & { user: string; amount: BigNumber }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export type VoteProposedEvent = TypedEvent<
  [BigNumber, BigNumber] & { proposal: BigNumber; rewards: BigNumber }
>;

export type VoteResolvedEvent = TypedEvent<
  [BigNumber, string] & { proposal: BigNumber; ipfs: string }
>;

export type WithdrawnEvent = TypedEvent<
  [string, BigNumber] & { user: string; amount: BigNumber }
>;

export class VotingEngine extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: VotingEngineInterface;

  functions: {
    bct(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getEthSignedMessageHash(
      messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getMessageHash(
      to: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getVoteState(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { ipfs: string }>;

    initialize(
      bctContractAddress_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nonceMap(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    proposeVote(
      rewardAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    recoverSigner(
      ethSignedMessageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    resolveVote(
      id: BigNumberish,
      ipfs: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    verify(
      signer: string,
      to: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    withdraw(
      amount: BigNumberish,
      nonce: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawn(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  bct(overrides?: CallOverrides): Promise<string>;

  deposit(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getEthSignedMessageHash(
    messageHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getMessageHash(
    to: string,
    amount: BigNumberish,
    nonce: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getVoteState(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  initialize(
    bctContractAddress_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nonceMap(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  proposeVote(
    rewardAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  recoverSigner(
    ethSignedMessageHash: BytesLike,
    signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  resolveVote(
    id: BigNumberish,
    ipfs: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  verify(
    signer: string,
    to: string,
    amount: BigNumberish,
    nonce: BigNumberish,
    signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  withdraw(
    amount: BigNumberish,
    nonce: BigNumberish,
    signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawn(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    bct(overrides?: CallOverrides): Promise<string>;

    deposit(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    getEthSignedMessageHash(
      messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getMessageHash(
      to: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getVoteState(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

    initialize(
      bctContractAddress_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    nonceMap(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    proposeVote(
      rewardAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    recoverSigner(
      ethSignedMessageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    resolveVote(
      id: BigNumberish,
      ipfs: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    verify(
      signer: string,
      to: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    withdraw(
      amount: BigNumberish,
      nonce: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawn(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Deposited(address,uint256)"(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;

    Deposited(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "Paused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;

    "VoteProposed(uint256,uint256)"(
      proposal?: BigNumberish | null,
      rewards?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { proposal: BigNumber; rewards: BigNumber }
    >;

    VoteProposed(
      proposal?: BigNumberish | null,
      rewards?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { proposal: BigNumber; rewards: BigNumber }
    >;

    "VoteResolved(uint256,string)"(
      proposal?: BigNumberish | null,
      ipfs?: null
    ): TypedEventFilter<
      [BigNumber, string],
      { proposal: BigNumber; ipfs: string }
    >;

    VoteResolved(
      proposal?: BigNumberish | null,
      ipfs?: null
    ): TypedEventFilter<
      [BigNumber, string],
      { proposal: BigNumber; ipfs: string }
    >;

    "Withdrawn(address,uint256)"(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;

    Withdrawn(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    bct(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getEthSignedMessageHash(
      messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMessageHash(
      to: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVoteState(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      bctContractAddress_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nonceMap(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    proposeVote(
      rewardAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    recoverSigner(
      ethSignedMessageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    resolveVote(
      id: BigNumberish,
      ipfs: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    verify(
      signer: string,
      to: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      amount: BigNumberish,
      nonce: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawn(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    bct(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getEthSignedMessageHash(
      messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMessageHash(
      to: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVoteState(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      bctContractAddress_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nonceMap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposeVote(
      rewardAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    recoverSigner(
      ethSignedMessageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    resolveVote(
      id: BigNumberish,
      ipfs: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    verify(
      signer: string,
      to: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      nonce: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawn(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}