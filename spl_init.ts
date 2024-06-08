//Importing Keypair module to import a known KeyPair from secretKey
//Importing Connection to create a new connection to a Solana network
//Importing createMint to create a new token
import { Keypair, Connection } from '@solana/web3.js'
import { createMint } from '@solana/spl-token'

//Import our secretKey
import priv from './secrets/private-key.json';

//Generate curresponding KeyPair
const keypair = Keypair.fromSecretKey(new Uint8Array(priv));

//Create a connection to devnet
const connection = new Connection('https://api.devnet.solana.com', 'finalized');

//Create a new token
(async () => {
    try {

        const mint = await createMint(
            connection,                     //connection for the transaction
            keypair,                        //fee payer
            keypair.publicKey,              //mint authority
            null,                           //freeze authority
            6                               //token decimals
        );

        console.log(`Success! Mint Address: ${mint.toBase58()}`)
    } catch(error) {
        console.log(`Error in initializing token - Error: ${error}`)
    }
})();