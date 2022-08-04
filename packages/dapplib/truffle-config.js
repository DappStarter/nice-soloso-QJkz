require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun foot dad renew saddle hospital coral light army general'; 
let testAccounts = [
"0x973e9fa2a4d0f6a4bd271fb27871423af385d4df830af7dda4190dd3c71a9893",
"0x6cca5a70b4ce7a6a84544ac5e00313aa6f539e2cea1a7e9ddb4292745d152b9c",
"0x5638ccfd44b59727ab7b14ded700e406d9d3b7456bb9483605111b94c23a1fd9",
"0xce321229f0b2dd785f272b8f2ee9daa4e09c3a60f698f67e0beb498e410fba0e",
"0xdb159d849719727c89fb3fd91ccfd1e44001ce1f2cda7ec55a35bf69f5a02024",
"0x4a3f6a1c16df8bdddf3892c5303ebf99bb4e71287cee5d9f19b15dcc7eb787d2",
"0xe1cfc6280bf5319e5a8d6a3f2a4d72bcec59c4f3b2ca71745e94fc50115ef49d",
"0xe2def594e8be350998cd8fe4a9c748668c90f9c6411f859f58a44a723a6d3c54",
"0x81984b16346c7d3423f5d2c56849f76bf268808193f9f7f47c9840774bea152c",
"0x0ead8526effb21814ac604205553869a74963d245653381ca7adee9a3f3e9fd0"
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

