/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from './common'

export declare namespace Types {
  export type ChallengeStruct = {
    turn: BigNumberish
    timeoutAt: BigNumberish
    asserter: string
    challenger: string
    segments: BytesLike[]
    segSize: BigNumberish
    segStart: BigNumberish
  }

  export type ChallengeStructOutput = [
    number,
    BigNumber,
    string,
    string,
    string[],
    BigNumber,
    BigNumber,
  ] & {
    turn: number
    timeoutAt: BigNumber
    asserter: string
    challenger: string
    segments: string[]
    segSize: BigNumber
    segStart: BigNumber
  }

  export type OutputRootProofStruct = {
    version: BytesLike
    stateRoot: BytesLike
    messagePasserStorageRoot: BytesLike
    blockHash: BytesLike
    nextBlockHash: BytesLike
  }

  export type OutputRootProofStructOutput = [
    string,
    string,
    string,
    string,
    string,
  ] & {
    version: string
    stateRoot: string
    messagePasserStorageRoot: string
    blockHash: string
    nextBlockHash: string
  }

  export type PublicInputStruct = {
    blockHash: BytesLike
    parentHash: BytesLike
    timestamp: BigNumberish
    number: BigNumberish
    gasLimit: BigNumberish
    baseFee: BigNumberish
    transactionsRoot: BytesLike
    stateRoot: BytesLike
    withdrawalsRoot: BytesLike
    txHashes: BytesLike[]
  }

  export type PublicInputStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string,
    string,
    string[],
  ] & {
    blockHash: string
    parentHash: string
    timestamp: BigNumber
    number: BigNumber
    gasLimit: BigNumber
    baseFee: BigNumber
    transactionsRoot: string
    stateRoot: string
    withdrawalsRoot: string
    txHashes: string[]
  }

  export type BlockHeaderRLPStruct = {
    uncleHash: BytesLike
    coinbase: BytesLike
    receiptsRoot: BytesLike
    logsBloom: BytesLike
    difficulty: BytesLike
    gasUsed: BytesLike
    extraData: BytesLike
    mixHash: BytesLike
    nonce: BytesLike
  }

  export type BlockHeaderRLPStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
  ] & {
    uncleHash: string
    coinbase: string
    receiptsRoot: string
    logsBloom: string
    difficulty: string
    gasUsed: string
    extraData: string
    mixHash: string
    nonce: string
  }

  export type PublicInputProofStruct = {
    srcOutputRootProof: Types.OutputRootProofStruct
    dstOutputRootProof: Types.OutputRootProofStruct
    publicInput: Types.PublicInputStruct
    rlps: Types.BlockHeaderRLPStruct
    l2ToL1MessagePasserBalance: BytesLike
    l2ToL1MessagePasserCodeHash: BytesLike
    merkleProof: BytesLike[]
  }

  export type PublicInputProofStructOutput = [
    Types.OutputRootProofStructOutput,
    Types.OutputRootProofStructOutput,
    Types.PublicInputStructOutput,
    Types.BlockHeaderRLPStructOutput,
    string,
    string,
    string[],
  ] & {
    srcOutputRootProof: Types.OutputRootProofStructOutput
    dstOutputRootProof: Types.OutputRootProofStructOutput
    publicInput: Types.PublicInputStructOutput
    rlps: Types.BlockHeaderRLPStructOutput
    l2ToL1MessagePasserBalance: string
    l2ToL1MessagePasserCodeHash: string
    merkleProof: string[]
  }
}

export interface ColosseumInterface extends utils.Interface {
  functions: {
    'BISECTION_TIMEOUT()': FunctionFragment
    'CREATION_PERIOD_SECONDS()': FunctionFragment
    'DUMMY_HASH()': FunctionFragment
    'L2_ORACLE()': FunctionFragment
    'L2_ORACLE_SUBMISSION_INTERVAL()': FunctionFragment
    'MAX_TXS()': FunctionFragment
    'PROVING_TIMEOUT()': FunctionFragment
    'SECURITY_COUNCIL()': FunctionFragment
    'ZK_MERKLE_TRIE()': FunctionFragment
    'ZK_VERIFIER()': FunctionFragment
    'bisect(uint256,address,uint256,bytes32[])': FunctionFragment
    'cancelChallenge(uint256)': FunctionFragment
    'challengerTimeout(uint256,address)': FunctionFragment
    'challenges(uint256,address)': FunctionFragment
    'createChallenge(uint256,bytes32,uint256,bytes32[])': FunctionFragment
    'dismissChallenge(uint256,address,address,bytes32,bytes32)': FunctionFragment
    'forceDeleteOutput(uint256)': FunctionFragment
    'getChallenge(uint256,address)': FunctionFragment
    'getSegmentsLength(uint8)': FunctionFragment
    'getStatus(uint256,address)': FunctionFragment
    'initialize(uint256[])': FunctionFragment
    'isAbleToBisect(uint256,address)': FunctionFragment
    'isInCreationPeriod(uint256)': FunctionFragment
    'proveFault(uint256,uint256,((bytes32,bytes32,bytes32,bytes32,bytes32),(bytes32,bytes32,bytes32,bytes32,bytes32),(bytes32,bytes32,uint64,uint64,uint64,uint256,bytes32,bytes32,bytes32,bytes32[]),(bytes,bytes,bytes,bytes,bytes,bytes,bytes,bytes,bytes),bytes32,bytes32,bytes[]),uint256[],uint256[])': FunctionFragment
    'verifiedPublicInputs(bytes32)': FunctionFragment
    'version()': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'BISECTION_TIMEOUT'
      | 'CREATION_PERIOD_SECONDS'
      | 'DUMMY_HASH'
      | 'L2_ORACLE'
      | 'L2_ORACLE_SUBMISSION_INTERVAL'
      | 'MAX_TXS'
      | 'PROVING_TIMEOUT'
      | 'SECURITY_COUNCIL'
      | 'ZK_MERKLE_TRIE'
      | 'ZK_VERIFIER'
      | 'bisect'
      | 'cancelChallenge'
      | 'challengerTimeout'
      | 'challenges'
      | 'createChallenge'
      | 'dismissChallenge'
      | 'forceDeleteOutput'
      | 'getChallenge'
      | 'getSegmentsLength'
      | 'getStatus'
      | 'initialize'
      | 'isAbleToBisect'
      | 'isInCreationPeriod'
      | 'proveFault'
      | 'verifiedPublicInputs'
      | 'version',
  ): FunctionFragment

  encodeFunctionData(
    functionFragment: 'BISECTION_TIMEOUT',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'CREATION_PERIOD_SECONDS',
    values?: undefined,
  ): string
  encodeFunctionData(functionFragment: 'DUMMY_HASH', values?: undefined): string
  encodeFunctionData(functionFragment: 'L2_ORACLE', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'L2_ORACLE_SUBMISSION_INTERVAL',
    values?: undefined,
  ): string
  encodeFunctionData(functionFragment: 'MAX_TXS', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'PROVING_TIMEOUT',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'SECURITY_COUNCIL',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'ZK_MERKLE_TRIE',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'ZK_VERIFIER',
    values?: undefined,
  ): string
  encodeFunctionData(
    functionFragment: 'bisect',
    values: [BigNumberish, string, BigNumberish, BytesLike[]],
  ): string
  encodeFunctionData(
    functionFragment: 'cancelChallenge',
    values: [BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'challengerTimeout',
    values: [BigNumberish, string],
  ): string
  encodeFunctionData(
    functionFragment: 'challenges',
    values: [BigNumberish, string],
  ): string
  encodeFunctionData(
    functionFragment: 'createChallenge',
    values: [BigNumberish, BytesLike, BigNumberish, BytesLike[]],
  ): string
  encodeFunctionData(
    functionFragment: 'dismissChallenge',
    values: [BigNumberish, string, string, BytesLike, BytesLike],
  ): string
  encodeFunctionData(
    functionFragment: 'forceDeleteOutput',
    values: [BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'getChallenge',
    values: [BigNumberish, string],
  ): string
  encodeFunctionData(
    functionFragment: 'getSegmentsLength',
    values: [BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'getStatus',
    values: [BigNumberish, string],
  ): string
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [BigNumberish[]],
  ): string
  encodeFunctionData(
    functionFragment: 'isAbleToBisect',
    values: [BigNumberish, string],
  ): string
  encodeFunctionData(
    functionFragment: 'isInCreationPeriod',
    values: [BigNumberish],
  ): string
  encodeFunctionData(
    functionFragment: 'proveFault',
    values: [
      BigNumberish,
      BigNumberish,
      Types.PublicInputProofStruct,
      BigNumberish[],
      BigNumberish[],
    ],
  ): string
  encodeFunctionData(
    functionFragment: 'verifiedPublicInputs',
    values: [BytesLike],
  ): string
  encodeFunctionData(functionFragment: 'version', values?: undefined): string

  decodeFunctionResult(
    functionFragment: 'BISECTION_TIMEOUT',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'CREATION_PERIOD_SECONDS',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'DUMMY_HASH', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'L2_ORACLE', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'L2_ORACLE_SUBMISSION_INTERVAL',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'MAX_TXS', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'PROVING_TIMEOUT',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'SECURITY_COUNCIL',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'ZK_MERKLE_TRIE',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'ZK_VERIFIER', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'bisect', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'cancelChallenge',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'challengerTimeout',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'challenges', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'createChallenge',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'dismissChallenge',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'forceDeleteOutput',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'getChallenge',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'getSegmentsLength',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'getStatus', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'isAbleToBisect',
    data: BytesLike,
  ): Result
  decodeFunctionResult(
    functionFragment: 'isInCreationPeriod',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'proveFault', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'verifiedPublicInputs',
    data: BytesLike,
  ): Result
  decodeFunctionResult(functionFragment: 'version', data: BytesLike): Result

  events: {
    'Bisected(uint256,address,uint8,uint256)': EventFragment
    'ChallengeCanceled(uint256,address,uint256)': EventFragment
    'ChallengeCreated(uint256,address,address,uint256)': EventFragment
    'ChallengeDismissed(uint256,address,uint256)': EventFragment
    'ChallengerTimedOut(uint256,address,uint256)': EventFragment
    'Initialized(uint8)': EventFragment
    'Proven(uint256,address,uint256)': EventFragment
    'ReadyToProve(uint256,address)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Bisected'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'ChallengeCanceled'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'ChallengeCreated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'ChallengeDismissed'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'ChallengerTimedOut'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Proven'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'ReadyToProve'): EventFragment
}

export interface BisectedEventObject {
  outputIndex: BigNumber
  challenger: string
  turn: number
  timestamp: BigNumber
}
export type BisectedEvent = TypedEvent<
  [BigNumber, string, number, BigNumber],
  BisectedEventObject
>

export type BisectedEventFilter = TypedEventFilter<BisectedEvent>

export interface ChallengeCanceledEventObject {
  outputIndex: BigNumber
  challenger: string
  timestamp: BigNumber
}
export type ChallengeCanceledEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  ChallengeCanceledEventObject
>

export type ChallengeCanceledEventFilter =
  TypedEventFilter<ChallengeCanceledEvent>

export interface ChallengeCreatedEventObject {
  outputIndex: BigNumber
  asserter: string
  challenger: string
  timestamp: BigNumber
}
export type ChallengeCreatedEvent = TypedEvent<
  [BigNumber, string, string, BigNumber],
  ChallengeCreatedEventObject
>

export type ChallengeCreatedEventFilter =
  TypedEventFilter<ChallengeCreatedEvent>

export interface ChallengeDismissedEventObject {
  outputIndex: BigNumber
  challenger: string
  timestamp: BigNumber
}
export type ChallengeDismissedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  ChallengeDismissedEventObject
>

export type ChallengeDismissedEventFilter =
  TypedEventFilter<ChallengeDismissedEvent>

export interface ChallengerTimedOutEventObject {
  outputIndex: BigNumber
  challenger: string
  timestamp: BigNumber
}
export type ChallengerTimedOutEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  ChallengerTimedOutEventObject
>

export type ChallengerTimedOutEventFilter =
  TypedEventFilter<ChallengerTimedOutEvent>

export interface InitializedEventObject {
  version: number
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>

export interface ProvenEventObject {
  outputIndex: BigNumber
  challenger: string
  timestamp: BigNumber
}
export type ProvenEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  ProvenEventObject
>

export type ProvenEventFilter = TypedEventFilter<ProvenEvent>

export interface ReadyToProveEventObject {
  outputIndex: BigNumber
  challenger: string
}
export type ReadyToProveEvent = TypedEvent<
  [BigNumber, string],
  ReadyToProveEventObject
>

export type ReadyToProveEventFilter = TypedEventFilter<ReadyToProveEvent>

export interface Colosseum extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: ColosseumInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    BISECTION_TIMEOUT(overrides?: CallOverrides): Promise<[BigNumber]>

    CREATION_PERIOD_SECONDS(overrides?: CallOverrides): Promise<[BigNumber]>

    DUMMY_HASH(overrides?: CallOverrides): Promise<[string]>

    L2_ORACLE(overrides?: CallOverrides): Promise<[string]>

    L2_ORACLE_SUBMISSION_INTERVAL(
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>

    MAX_TXS(overrides?: CallOverrides): Promise<[BigNumber]>

    PROVING_TIMEOUT(overrides?: CallOverrides): Promise<[BigNumber]>

    SECURITY_COUNCIL(overrides?: CallOverrides): Promise<[string]>

    ZK_MERKLE_TRIE(overrides?: CallOverrides): Promise<[string]>

    ZK_VERIFIER(overrides?: CallOverrides): Promise<[string]>

    bisect(
      _outputIndex: BigNumberish,
      _challenger: string,
      _pos: BigNumberish,
      _segments: BytesLike[],
      overrides?: Overrides & { from?: string },
    ): Promise<ContractTransaction>

    cancelChallenge(
      _outputIndex: BigNumberish,
      overrides?: Overrides & { from?: string },
    ): Promise<ContractTransaction>

    challengerTimeout(
      _outputIndex: BigNumberish,
      _challenger: string,
      overrides?: Overrides & { from?: string },
    ): Promise<ContractTransaction>

    challenges(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<
      [number, BigNumber, string, string, BigNumber, BigNumber] & {
        turn: number
        timeoutAt: BigNumber
        asserter: string
        challenger: string
        segSize: BigNumber
        segStart: BigNumber
      }
    >

    createChallenge(
      _outputIndex: BigNumberish,
      _l1BlockHash: BytesLike,
      _l1BlockNumber: BigNumberish,
      _segments: BytesLike[],
      overrides?: Overrides & { from?: string },
    ): Promise<ContractTransaction>

    dismissChallenge(
      _outputIndex: BigNumberish,
      _challenger: string,
      _asserter: string,
      _outputRoot: BytesLike,
      _publicInputHash: BytesLike,
      overrides?: Overrides & { from?: string },
    ): Promise<ContractTransaction>

    forceDeleteOutput(
      _outputIndex: BigNumberish,
      overrides?: Overrides & { from?: string },
    ): Promise<ContractTransaction>

    getChallenge(
      _outputIndex: BigNumberish,
      _challenger: string,
      overrides?: CallOverrides,
    ): Promise<[Types.ChallengeStructOutput]>

    getSegmentsLength(
      _turn: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>

    getStatus(
      _outputIndex: BigNumberish,
      _challenger: string,
      overrides?: CallOverrides,
    ): Promise<[number]>

    initialize(
      _segmentsLengths: BigNumberish[],
      overrides?: Overrides & { from?: string },
    ): Promise<ContractTransaction>

    isAbleToBisect(
      _outputIndex: BigNumberish,
      _challenger: string,
      overrides?: CallOverrides,
    ): Promise<[boolean]>

    isInCreationPeriod(
      _outputIndex: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[boolean]>

    proveFault(
      _outputIndex: BigNumberish,
      _pos: BigNumberish,
      _proof: Types.PublicInputProofStruct,
      _zkproof: BigNumberish[],
      _pair: BigNumberish[],
      overrides?: Overrides & { from?: string },
    ): Promise<ContractTransaction>

    verifiedPublicInputs(
      arg0: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>

    version(overrides?: CallOverrides): Promise<[string]>
  }

  BISECTION_TIMEOUT(overrides?: CallOverrides): Promise<BigNumber>

  CREATION_PERIOD_SECONDS(overrides?: CallOverrides): Promise<BigNumber>

  DUMMY_HASH(overrides?: CallOverrides): Promise<string>

  L2_ORACLE(overrides?: CallOverrides): Promise<string>

  L2_ORACLE_SUBMISSION_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>

  MAX_TXS(overrides?: CallOverrides): Promise<BigNumber>

  PROVING_TIMEOUT(overrides?: CallOverrides): Promise<BigNumber>

  SECURITY_COUNCIL(overrides?: CallOverrides): Promise<string>

  ZK_MERKLE_TRIE(overrides?: CallOverrides): Promise<string>

  ZK_VERIFIER(overrides?: CallOverrides): Promise<string>

  bisect(
    _outputIndex: BigNumberish,
    _challenger: string,
    _pos: BigNumberish,
    _segments: BytesLike[],
    overrides?: Overrides & { from?: string },
  ): Promise<ContractTransaction>

  cancelChallenge(
    _outputIndex: BigNumberish,
    overrides?: Overrides & { from?: string },
  ): Promise<ContractTransaction>

  challengerTimeout(
    _outputIndex: BigNumberish,
    _challenger: string,
    overrides?: Overrides & { from?: string },
  ): Promise<ContractTransaction>

  challenges(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides,
  ): Promise<
    [number, BigNumber, string, string, BigNumber, BigNumber] & {
      turn: number
      timeoutAt: BigNumber
      asserter: string
      challenger: string
      segSize: BigNumber
      segStart: BigNumber
    }
  >

  createChallenge(
    _outputIndex: BigNumberish,
    _l1BlockHash: BytesLike,
    _l1BlockNumber: BigNumberish,
    _segments: BytesLike[],
    overrides?: Overrides & { from?: string },
  ): Promise<ContractTransaction>

  dismissChallenge(
    _outputIndex: BigNumberish,
    _challenger: string,
    _asserter: string,
    _outputRoot: BytesLike,
    _publicInputHash: BytesLike,
    overrides?: Overrides & { from?: string },
  ): Promise<ContractTransaction>

  forceDeleteOutput(
    _outputIndex: BigNumberish,
    overrides?: Overrides & { from?: string },
  ): Promise<ContractTransaction>

  getChallenge(
    _outputIndex: BigNumberish,
    _challenger: string,
    overrides?: CallOverrides,
  ): Promise<Types.ChallengeStructOutput>

  getSegmentsLength(
    _turn: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>

  getStatus(
    _outputIndex: BigNumberish,
    _challenger: string,
    overrides?: CallOverrides,
  ): Promise<number>

  initialize(
    _segmentsLengths: BigNumberish[],
    overrides?: Overrides & { from?: string },
  ): Promise<ContractTransaction>

  isAbleToBisect(
    _outputIndex: BigNumberish,
    _challenger: string,
    overrides?: CallOverrides,
  ): Promise<boolean>

  isInCreationPeriod(
    _outputIndex: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<boolean>

  proveFault(
    _outputIndex: BigNumberish,
    _pos: BigNumberish,
    _proof: Types.PublicInputProofStruct,
    _zkproof: BigNumberish[],
    _pair: BigNumberish[],
    overrides?: Overrides & { from?: string },
  ): Promise<ContractTransaction>

  verifiedPublicInputs(
    arg0: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>

  version(overrides?: CallOverrides): Promise<string>

  callStatic: {
    BISECTION_TIMEOUT(overrides?: CallOverrides): Promise<BigNumber>

    CREATION_PERIOD_SECONDS(overrides?: CallOverrides): Promise<BigNumber>

    DUMMY_HASH(overrides?: CallOverrides): Promise<string>

    L2_ORACLE(overrides?: CallOverrides): Promise<string>

    L2_ORACLE_SUBMISSION_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>

    MAX_TXS(overrides?: CallOverrides): Promise<BigNumber>

    PROVING_TIMEOUT(overrides?: CallOverrides): Promise<BigNumber>

    SECURITY_COUNCIL(overrides?: CallOverrides): Promise<string>

    ZK_MERKLE_TRIE(overrides?: CallOverrides): Promise<string>

    ZK_VERIFIER(overrides?: CallOverrides): Promise<string>

    bisect(
      _outputIndex: BigNumberish,
      _challenger: string,
      _pos: BigNumberish,
      _segments: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<void>

    cancelChallenge(
      _outputIndex: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>

    challengerTimeout(
      _outputIndex: BigNumberish,
      _challenger: string,
      overrides?: CallOverrides,
    ): Promise<void>

    challenges(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<
      [number, BigNumber, string, string, BigNumber, BigNumber] & {
        turn: number
        timeoutAt: BigNumber
        asserter: string
        challenger: string
        segSize: BigNumber
        segStart: BigNumber
      }
    >

    createChallenge(
      _outputIndex: BigNumberish,
      _l1BlockHash: BytesLike,
      _l1BlockNumber: BigNumberish,
      _segments: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<void>

    dismissChallenge(
      _outputIndex: BigNumberish,
      _challenger: string,
      _asserter: string,
      _outputRoot: BytesLike,
      _publicInputHash: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>

    forceDeleteOutput(
      _outputIndex: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>

    getChallenge(
      _outputIndex: BigNumberish,
      _challenger: string,
      overrides?: CallOverrides,
    ): Promise<Types.ChallengeStructOutput>

    getSegmentsLength(
      _turn: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    getStatus(
      _outputIndex: BigNumberish,
      _challenger: string,
      overrides?: CallOverrides,
    ): Promise<number>

    initialize(
      _segmentsLengths: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<void>

    isAbleToBisect(
      _outputIndex: BigNumberish,
      _challenger: string,
      overrides?: CallOverrides,
    ): Promise<boolean>

    isInCreationPeriod(
      _outputIndex: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>

    proveFault(
      _outputIndex: BigNumberish,
      _pos: BigNumberish,
      _proof: Types.PublicInputProofStruct,
      _zkproof: BigNumberish[],
      _pair: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<void>

    verifiedPublicInputs(
      arg0: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>

    version(overrides?: CallOverrides): Promise<string>
  }

  filters: {
    'Bisected(uint256,address,uint8,uint256)'(
      outputIndex?: BigNumberish | null,
      challenger?: string | null,
      turn?: null,
      timestamp?: null,
    ): BisectedEventFilter
    Bisected(
      outputIndex?: BigNumberish | null,
      challenger?: string | null,
      turn?: null,
      timestamp?: null,
    ): BisectedEventFilter

    'ChallengeCanceled(uint256,address,uint256)'(
      outputIndex?: BigNumberish | null,
      challenger?: string | null,
      timestamp?: null,
    ): ChallengeCanceledEventFilter
    ChallengeCanceled(
      outputIndex?: BigNumberish | null,
      challenger?: string | null,
      timestamp?: null,
    ): ChallengeCanceledEventFilter

    'ChallengeCreated(uint256,address,address,uint256)'(
      outputIndex?: BigNumberish | null,
      asserter?: string | null,
      challenger?: string | null,
      timestamp?: null,
    ): ChallengeCreatedEventFilter
    ChallengeCreated(
      outputIndex?: BigNumberish | null,
      asserter?: string | null,
      challenger?: string | null,
      timestamp?: null,
    ): ChallengeCreatedEventFilter

    'ChallengeDismissed(uint256,address,uint256)'(
      outputIndex?: BigNumberish | null,
      challenger?: string | null,
      timestamp?: null,
    ): ChallengeDismissedEventFilter
    ChallengeDismissed(
      outputIndex?: BigNumberish | null,
      challenger?: string | null,
      timestamp?: null,
    ): ChallengeDismissedEventFilter

    'ChallengerTimedOut(uint256,address,uint256)'(
      outputIndex?: BigNumberish | null,
      challenger?: string | null,
      timestamp?: null,
    ): ChallengerTimedOutEventFilter
    ChallengerTimedOut(
      outputIndex?: BigNumberish | null,
      challenger?: string | null,
      timestamp?: null,
    ): ChallengerTimedOutEventFilter

    'Initialized(uint8)'(version?: null): InitializedEventFilter
    Initialized(version?: null): InitializedEventFilter

    'Proven(uint256,address,uint256)'(
      outputIndex?: BigNumberish | null,
      challenger?: string | null,
      timestamp?: null,
    ): ProvenEventFilter
    Proven(
      outputIndex?: BigNumberish | null,
      challenger?: string | null,
      timestamp?: null,
    ): ProvenEventFilter

    'ReadyToProve(uint256,address)'(
      outputIndex?: BigNumberish | null,
      challenger?: string | null,
    ): ReadyToProveEventFilter
    ReadyToProve(
      outputIndex?: BigNumberish | null,
      challenger?: string | null,
    ): ReadyToProveEventFilter
  }

  estimateGas: {
    BISECTION_TIMEOUT(overrides?: CallOverrides): Promise<BigNumber>

    CREATION_PERIOD_SECONDS(overrides?: CallOverrides): Promise<BigNumber>

    DUMMY_HASH(overrides?: CallOverrides): Promise<BigNumber>

    L2_ORACLE(overrides?: CallOverrides): Promise<BigNumber>

    L2_ORACLE_SUBMISSION_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>

    MAX_TXS(overrides?: CallOverrides): Promise<BigNumber>

    PROVING_TIMEOUT(overrides?: CallOverrides): Promise<BigNumber>

    SECURITY_COUNCIL(overrides?: CallOverrides): Promise<BigNumber>

    ZK_MERKLE_TRIE(overrides?: CallOverrides): Promise<BigNumber>

    ZK_VERIFIER(overrides?: CallOverrides): Promise<BigNumber>

    bisect(
      _outputIndex: BigNumberish,
      _challenger: string,
      _pos: BigNumberish,
      _segments: BytesLike[],
      overrides?: Overrides & { from?: string },
    ): Promise<BigNumber>

    cancelChallenge(
      _outputIndex: BigNumberish,
      overrides?: Overrides & { from?: string },
    ): Promise<BigNumber>

    challengerTimeout(
      _outputIndex: BigNumberish,
      _challenger: string,
      overrides?: Overrides & { from?: string },
    ): Promise<BigNumber>

    challenges(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    createChallenge(
      _outputIndex: BigNumberish,
      _l1BlockHash: BytesLike,
      _l1BlockNumber: BigNumberish,
      _segments: BytesLike[],
      overrides?: Overrides & { from?: string },
    ): Promise<BigNumber>

    dismissChallenge(
      _outputIndex: BigNumberish,
      _challenger: string,
      _asserter: string,
      _outputRoot: BytesLike,
      _publicInputHash: BytesLike,
      overrides?: Overrides & { from?: string },
    ): Promise<BigNumber>

    forceDeleteOutput(
      _outputIndex: BigNumberish,
      overrides?: Overrides & { from?: string },
    ): Promise<BigNumber>

    getChallenge(
      _outputIndex: BigNumberish,
      _challenger: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    getSegmentsLength(
      _turn: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    getStatus(
      _outputIndex: BigNumberish,
      _challenger: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    initialize(
      _segmentsLengths: BigNumberish[],
      overrides?: Overrides & { from?: string },
    ): Promise<BigNumber>

    isAbleToBisect(
      _outputIndex: BigNumberish,
      _challenger: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    isInCreationPeriod(
      _outputIndex: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    proveFault(
      _outputIndex: BigNumberish,
      _pos: BigNumberish,
      _proof: Types.PublicInputProofStruct,
      _zkproof: BigNumberish[],
      _pair: BigNumberish[],
      overrides?: Overrides & { from?: string },
    ): Promise<BigNumber>

    verifiedPublicInputs(
      arg0: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    version(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    BISECTION_TIMEOUT(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CREATION_PERIOD_SECONDS(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    DUMMY_HASH(overrides?: CallOverrides): Promise<PopulatedTransaction>

    L2_ORACLE(overrides?: CallOverrides): Promise<PopulatedTransaction>

    L2_ORACLE_SUBMISSION_INTERVAL(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    MAX_TXS(overrides?: CallOverrides): Promise<PopulatedTransaction>

    PROVING_TIMEOUT(overrides?: CallOverrides): Promise<PopulatedTransaction>

    SECURITY_COUNCIL(overrides?: CallOverrides): Promise<PopulatedTransaction>

    ZK_MERKLE_TRIE(overrides?: CallOverrides): Promise<PopulatedTransaction>

    ZK_VERIFIER(overrides?: CallOverrides): Promise<PopulatedTransaction>

    bisect(
      _outputIndex: BigNumberish,
      _challenger: string,
      _pos: BigNumberish,
      _segments: BytesLike[],
      overrides?: Overrides & { from?: string },
    ): Promise<PopulatedTransaction>

    cancelChallenge(
      _outputIndex: BigNumberish,
      overrides?: Overrides & { from?: string },
    ): Promise<PopulatedTransaction>

    challengerTimeout(
      _outputIndex: BigNumberish,
      _challenger: string,
      overrides?: Overrides & { from?: string },
    ): Promise<PopulatedTransaction>

    challenges(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    createChallenge(
      _outputIndex: BigNumberish,
      _l1BlockHash: BytesLike,
      _l1BlockNumber: BigNumberish,
      _segments: BytesLike[],
      overrides?: Overrides & { from?: string },
    ): Promise<PopulatedTransaction>

    dismissChallenge(
      _outputIndex: BigNumberish,
      _challenger: string,
      _asserter: string,
      _outputRoot: BytesLike,
      _publicInputHash: BytesLike,
      overrides?: Overrides & { from?: string },
    ): Promise<PopulatedTransaction>

    forceDeleteOutput(
      _outputIndex: BigNumberish,
      overrides?: Overrides & { from?: string },
    ): Promise<PopulatedTransaction>

    getChallenge(
      _outputIndex: BigNumberish,
      _challenger: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    getSegmentsLength(
      _turn: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    getStatus(
      _outputIndex: BigNumberish,
      _challenger: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    initialize(
      _segmentsLengths: BigNumberish[],
      overrides?: Overrides & { from?: string },
    ): Promise<PopulatedTransaction>

    isAbleToBisect(
      _outputIndex: BigNumberish,
      _challenger: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    isInCreationPeriod(
      _outputIndex: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    proveFault(
      _outputIndex: BigNumberish,
      _pos: BigNumberish,
      _proof: Types.PublicInputProofStruct,
      _zkproof: BigNumberish[],
      _pair: BigNumberish[],
      overrides?: Overrides & { from?: string },
    ): Promise<PopulatedTransaction>

    verifiedPublicInputs(
      arg0: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
