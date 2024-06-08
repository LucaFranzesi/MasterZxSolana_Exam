//Importing Keypair module to import a known KeyPair from secretKey
//Importing Connection to create a new connection to a Solana network
//Importing getOrCreateAssociatedTokenAccount to get a token account
//Importing transfer to transfer tokens
import { Keypair, Connection, PublicKey } from '@solana/web3.js'
import { getOrCreateAssociatedTokenAccount, transfer } from '@solana/spl-token'

//Import our secretKey
import priv from './secrets/private-key.json';

//Import a second secretKey
import priv2 from './secrets/private-key2.json';

//Import token address
import tokenAddr from './secrets/mintaddress.json'

//Generate corresponding KeyPairs
const keypair = Keypair.fromSecretKey(new Uint8Array(priv));
const keypair2 = Keypair.fromSecretKey(new Uint8Array(priv2));

//Get token address
const mintAddr = new PublicKey(tokenAddr);

//Create a connection to devnet
const connection = new Connection('https://api.devnet.solana.com', 'finalized');

//Create a new token account
(async () => {
    try {

        //Create or get a token account for selected token
        const tokenAccount = await getOrCreateAssociatedTokenAccount(
            connection,             //connection for the transaction 
            keypair,                //fee payer
            mintAddr,               //token address
            keypair.publicKey       //account owner
        );

        const tokenAccount2 = await getOrCreateAssociatedTokenAccount(
            connection,             //connection for the transaction 
            keypair2,               //fee payer
            mintAddr,               //token address
            keypair2.publicKey      //account owner
        );

        //Define amount to be transfered
        const amount = 10e6 / 2;

        //Transfer tokens
        const transferTokens = await transfer(
            connection,
            keypair,
            tokenAccount.address,
            tokenAccount2.address,
            keypair.publicKey,
            amount
        );

        console.log(`Success! Transfered ${amount} tokens from ${tokenAccount.address.toBase58()} to ${tokenAccount2.address.toBase58()} - Transaction hash: ${transferTokens}`);
    } catch(error) {
        console.log(`Error in getting token account - Error: ${error}`);
    }
})();