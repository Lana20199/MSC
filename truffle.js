const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "df6b4862119747d7a1f802f6e5800202";
const mnemonic = "dizzy report choose possible cave hire lumber glory turtle patient casual olympic";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
,
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/df6b4862119747d7a1f802f6e5800202`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    },

  },

  compilers: {
    solc: {
      version: "0.4.24"
    }
  }  
};