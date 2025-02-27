/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "CCIPReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CCIPReceiver__factory>;
    getContractFactory(
      name: "IAny2EVMMessageReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAny2EVMMessageReceiver__factory>;
    getContractFactory(
      name: "IRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRouter__factory>;
    getContractFactory(
      name: "IRouterClient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRouterClient__factory>;
    getContractFactory(
      name: "Client",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Client__factory>;
    getContractFactory(
      name: "Internal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Internal__factory>;
    getContractFactory(
      name: "MerkleMultiProof",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MerkleMultiProof__factory>;
    getContractFactory(
      name: "MockCCIPRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockCCIPRouter__factory>;
    getContractFactory(
      name: "ConfirmedOwner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmedOwner__factory>;
    getContractFactory(
      name: "ConfirmedOwnerWithProposal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmedOwnerWithProposal__factory>;
    getContractFactory(
      name: "OwnerIsCreator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnerIsCreator__factory>;
    getContractFactory(
      name: "CallWithExactGas",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CallWithExactGas__factory>;
    getContractFactory(
      name: "IERC677Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC677Receiver__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "IBurnMintERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBurnMintERC20__factory>;
    getContractFactory(
      name: "BurnMintERC677",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BurnMintERC677__factory>;
    getContractFactory(
      name: "ERC677",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC677__factory>;
    getContractFactory(
      name: "IERC677",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC677__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "ERC20Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Burnable__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Receiver__factory>;
    getContractFactory(
      name: "Sender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Sender__factory>;
    getContractFactory(
      name: "TransferUSDC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TransferUSDC__factory>;

    getContractAt(
      name: "CCIPReceiver",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.CCIPReceiver>;
    getContractAt(
      name: "IAny2EVMMessageReceiver",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IAny2EVMMessageReceiver>;
    getContractAt(
      name: "IRouter",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IRouter>;
    getContractAt(
      name: "IRouterClient",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IRouterClient>;
    getContractAt(
      name: "Client",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Client>;
    getContractAt(
      name: "Internal",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Internal>;
    getContractAt(
      name: "MerkleMultiProof",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MerkleMultiProof>;
    getContractAt(
      name: "MockCCIPRouter",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MockCCIPRouter>;
    getContractAt(
      name: "ConfirmedOwner",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ConfirmedOwner>;
    getContractAt(
      name: "ConfirmedOwnerWithProposal",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ConfirmedOwnerWithProposal>;
    getContractAt(
      name: "OwnerIsCreator",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnerIsCreator>;
    getContractAt(
      name: "CallWithExactGas",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.CallWithExactGas>;
    getContractAt(
      name: "IERC677Receiver",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC677Receiver>;
    getContractAt(
      name: "IOwnable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "IBurnMintERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IBurnMintERC20>;
    getContractAt(
      name: "BurnMintERC677",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.BurnMintERC677>;
    getContractAt(
      name: "ERC677",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC677>;
    getContractAt(
      name: "IERC677",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC677>;
    getContractAt(
      name: "ERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Permit",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "ERC20Burnable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Burnable>;
    getContractAt(
      name: "IERC20Metadata",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC165",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "Receiver",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Receiver>;
    getContractAt(
      name: "Sender",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Sender>;
    getContractAt(
      name: "TransferUSDC",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.TransferUSDC>;

    deployContract(
      name: "CCIPReceiver",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.CCIPReceiver>;
    deployContract(
      name: "IAny2EVMMessageReceiver",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IAny2EVMMessageReceiver>;
    deployContract(
      name: "IRouter",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IRouter>;
    deployContract(
      name: "IRouterClient",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IRouterClient>;
    deployContract(
      name: "Client",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Client>;
    deployContract(
      name: "Internal",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Internal>;
    deployContract(
      name: "MerkleMultiProof",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MerkleMultiProof>;
    deployContract(
      name: "MockCCIPRouter",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockCCIPRouter>;
    deployContract(
      name: "ConfirmedOwner",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConfirmedOwner>;
    deployContract(
      name: "ConfirmedOwnerWithProposal",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConfirmedOwnerWithProposal>;
    deployContract(
      name: "OwnerIsCreator",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.OwnerIsCreator>;
    deployContract(
      name: "CallWithExactGas",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.CallWithExactGas>;
    deployContract(
      name: "IERC677Receiver",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC677Receiver>;
    deployContract(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IOwnable>;
    deployContract(
      name: "IBurnMintERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IBurnMintERC20>;
    deployContract(
      name: "BurnMintERC677",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BurnMintERC677>;
    deployContract(
      name: "ERC677",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC677>;
    deployContract(
      name: "IERC677",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC677>;
    deployContract(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Permit>;
    deployContract(
      name: "ERC20Burnable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20Burnable>;
    deployContract(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC165>;
    deployContract(
      name: "Receiver",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Receiver>;
    deployContract(
      name: "Sender",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Sender>;
    deployContract(
      name: "TransferUSDC",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.TransferUSDC>;

    deployContract(
      name: "CCIPReceiver",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.CCIPReceiver>;
    deployContract(
      name: "IAny2EVMMessageReceiver",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IAny2EVMMessageReceiver>;
    deployContract(
      name: "IRouter",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IRouter>;
    deployContract(
      name: "IRouterClient",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IRouterClient>;
    deployContract(
      name: "Client",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Client>;
    deployContract(
      name: "Internal",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Internal>;
    deployContract(
      name: "MerkleMultiProof",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MerkleMultiProof>;
    deployContract(
      name: "MockCCIPRouter",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockCCIPRouter>;
    deployContract(
      name: "ConfirmedOwner",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConfirmedOwner>;
    deployContract(
      name: "ConfirmedOwnerWithProposal",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConfirmedOwnerWithProposal>;
    deployContract(
      name: "OwnerIsCreator",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.OwnerIsCreator>;
    deployContract(
      name: "CallWithExactGas",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.CallWithExactGas>;
    deployContract(
      name: "IERC677Receiver",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC677Receiver>;
    deployContract(
      name: "IOwnable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IOwnable>;
    deployContract(
      name: "IBurnMintERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IBurnMintERC20>;
    deployContract(
      name: "BurnMintERC677",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BurnMintERC677>;
    deployContract(
      name: "ERC677",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC677>;
    deployContract(
      name: "IERC677",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC677>;
    deployContract(
      name: "ERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "IERC20Permit",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Permit>;
    deployContract(
      name: "ERC20Burnable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20Burnable>;
    deployContract(
      name: "IERC20Metadata",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "IERC165",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC165>;
    deployContract(
      name: "Receiver",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Receiver>;
    deployContract(
      name: "Sender",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Sender>;
    deployContract(
      name: "TransferUSDC",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.TransferUSDC>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
