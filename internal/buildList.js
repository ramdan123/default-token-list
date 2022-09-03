const { version } = require("../package.json");

const dogechain = require("../tokens/dogechain.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "DogMoney Menu",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://raw.githubusercontent.com/dogmoneyswap/art/master/dogmoney/logo-256x256.png",
    keywords: ["dogmoney", "default"],
    tokens: [
      ...dogechain,
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
