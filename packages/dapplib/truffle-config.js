require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift response ridge exchange hover entire army gentle'; 
let testAccounts = [
"0x4b7c5d8db74ff4aa8b8569b4f50684f55c8bac5ab700f7f04e11968f9e44929c",
"0xfd0fcc22a2fdfb20c5130e13967cf5b949bd12c17542e5b2b6f5d416592fedf2",
"0xdf6deca79220eb09750533d68dd914c9594e1fe924536c060c0fce059a84b74b",
"0xfab7d2b0d874b6e2c32ea39c70d8c7b027dee9f621f5404e4964eae29394cf38",
"0xa05362aa19ab4a8415db8a787d3c5ab6bb091f0a9b313033b7204d7dbf7a3579",
"0x3b8b167411429a8c1e863c16ea0ceb43e2cb53f824b0b2064a653201c08fa090",
"0xa6f59f87cb43467f997bd3d87086d9dc8efe069c1ad53faef4ecae581b91c1c0",
"0x0deeb3cc32ab3ba31296c6c5cc06fe0d2cb1c51bf815ebf09c6f379849061bac",
"0x9579c91d8998d9cf12c355bfc9d6aefa75353fb828d3c179c1b50b1f6087b416",
"0xa5126fda00431eec0cf17e36270be8226c88fd8a554e5cd873d70820cf96eb12"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

