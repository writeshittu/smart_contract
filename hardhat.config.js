//https://eth-goerli.alchemyapi.io/v2/zC7zMGGuaVAyjz2ePq5aWThJ4flcoHmQ

require("@nomiclabs/hardhat-waffle");
// module.exports = {
//   solidity: "^0.8.0",
//   networks: {
//     goerli: {
//       url: "https://eth-goerli.alchemyapi.io/v2/zC7zMGGuaVAyjz2ePq5aWThJ4flcoHmQ",
//       accounts: [
//         "c681cd6edde3ce3f1c4abaf6bb8745fc817160b59ae2d876d0bdfd380b1d741b",
//       ],
//     },
//   },
// };

module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/zC7zMGGuaVAyjz2ePq5aWThJ4flcoHmQ",
      accounts: [
        "c681cd6edde3ce3f1c4abaf6bb8745fc817160b59ae2d876d0bdfd380b1d741b",
      ],
    },
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
