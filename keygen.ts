//Importing Keypair module to generate a new KeyPair
import { Keypair } from '@solana/web3.js'

const keypair = Keypair.generate();

//Print public and private key
console.log('Public Key: ',keypair.publicKey.toBase58());
console.log('Private Key: ', keypair.secretKey.toString());