//Importing Keypair module to import a known KeyPair from secretKey
//Importing Connection to create a new connection to a Solana network
//Importing LAMPORTS_PER_SOL as a constant to easily transfer SOL
import { Keypair, Connection, LAMPORTS_PER_SOL } from '@solana/web3.js'

//Import our secretKey
import priv from './secrets/private-key.json';

//Generate curresponding KeyPair
const keypair = Keypair.fromSecretKey(new Uint8Array(priv));

//Create a connection to devnet
const connection = new Connection('https://api.devnet.solana.com', 'finalized');

//Airdrop 1 SOL to our keyPair
(async () => {
    try {

        //Create a new airdrop of 1 sol to our public key
        const airdropSign = await connection.requestAirdrop(
            keypair.publicKey,
            LAMPORTS_PER_SOL
        );

        console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${airdropSign}?cluster=devnet`)
    } catch(error) {
        console.log(`Error in airdropping SOL - Error: ${error}`)
    }
})();

