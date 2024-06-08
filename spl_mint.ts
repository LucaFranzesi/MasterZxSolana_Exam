//Importing Keypair module to import a known KeyPair from secretKey
//Importing Connection to create a new connection to a Solana network
//Importing getOrCreateAssociatedTokenAccount to create a new token address
//Importing mintTo to mint new tokens
import { Keypair, Connection, PublicKey } from '@solana/web3.js'
import { getOrCreateAssociatedTokenAccount, mintTo } from '@solana/spl-token'

//Import our secretKey
import priv from './secrets/private-key.json';
import tokenAddr from './secrets/mintaddress.json'

//Generate curresponding KeyPair
const keypair = Keypair.fromSecretKey(new Uint8Array(priv));

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

        //Get token account public key
        const accountPubkey = tokenAccount.address;

        //Define amount to be minted
        const amountToMint = 10e6;

        await mintTo(
            connection,                 //connection for the transaction 
            keypair,                    //fee payer
            mintAddr,                   //token address
            accountPubkey,              //destination address (token account)
            keypair.publicKey,          //mint authority
            amountToMint                //amount of tokens to be minted
        );

        console.log(`Success! Token Account Address: ${accountPubkey.toBase58()}`)
    } catch(error) {
        console.log(`Error in getting token account - Error: ${error}`)
    }
})();