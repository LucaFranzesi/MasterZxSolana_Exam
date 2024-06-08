# MasterZxSolana_Exam
Repository for MasterZxSolana Bootcamp Exam

Created by Luca Franzesi on 08/06/2024

## Index

- [Basic Informations](#masterzxsolana_exam)
- [Quickstart](#quickstart)
    - [Dependency Initialization](#0-dependency-initialization)
    - [Keypair Generation](#1-keypair-generation)
    - [Funding your Wallet](#2-funding-your-wallet)
    - [Initializing a new Fungible Token](#3-initializing-a-new-fungible-token)
    - [Minting Tokens](#4-minting-tokens)
    - [Transferring Tokens](#5-transferring-tokens)


## Quickstart

To jump in with the solution you can follow steps illustrated below

### 0. Dependency Initialization
To initialize the repository with all of its dependencies you can just run the command `yarn install` inside of the repository

### 1. Keypair Generation
To use blockchain functionalities we need a keypair. One can be generated with the script **keygen.ts** invoked by `yarn key-generator`

The output of this script will be something like

Public Key:  ABCD1234...6N3Nc001234 <br>
Private Key:  123,456,...,123,456

You should save the private key inside a **private-key.json** file inside **/secrets** folder to access it later in other scripts.

**NOTE:** You will need another keypair when transferring token minted, this keypair can be created in the same way of our first key. You can save the newly created private key inside a **private-key2.json** file inside **/secrets** folder.

### 2. Funding your Wallet
To interact with blockchain, we need to pay fees in SOL. Solana's DevNet allows to airdrop SOL for testing purposes.

You can airdrop 1 SOL to your wallet with `yarn airdrop`

### 3. Initializing a new Fungible Token
To initialize a new token we will interact with SPL Token program.

By invoking `yarn token-init` you will deploy a new fungible token to Solana and the output of the script will be the token address (you should save it in a string inside **mintaddress.json** in **/secrets** folder).

### 4. Minting Tokens
To create new token supply you can run `yarn token-mint`. This will create a MintAccount and will add new token supply to your account.

### 5. Transferring Tokens

To transfer your tokens you can run `yarn token-transfer`. This will transfer half of your minted tokens to another account (creating its MintAccount if not already generated).

**NOTE:** To run this passage you need to import a second keypair. For more informations follow [1. Keypair Generation](#1-keypair-generation).