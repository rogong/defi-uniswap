require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.7.6',
        settings: {
          evmVersion: 'istanbul',
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      forking: {
         url: "https://eth-mainnet.g.alchemy.com/v2/opB4Iw25A0nPWESS7wHxPb_JKigMmAPD",
        //url: 'https://eth-mainnet.g.alchemy.com/v2/5HqI9ui2xrDvv-divJLU9N3Fqdc2pKne',
        //url: 'https://polygon-mumbai.g.alchemy.com/v2/hh8H8l_d8WalxLa43ilSyMBc6e1k8TDV'
      },
    },
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/hh8H8l_d8WalxLa43ilSyMBc6e1k8TDV',
       accounts: ['baf267eba704fe83dfac809bb483d7e7432b39328a718add308df51c1c3e9fa7'],
    },
  },
};
