const MyContract = artifacts.require('MyContract')

/*
  This script makes it easy to read a swapContract's info.
*/

module.exports = async callback => {
  const mc = await MyContract.deployed()
  const swapContractInfo = await mc.getSwapContract.call("mYbTcAdDrEsS")

  console.log("Reading the info of a swap contract");
  console.log("====================================");

  if (swapContractInfo[0]) {
    console.log("Exists                   : ", "Yes");
    console.log("Offered ETH              : ", swapContractInfo[1].toString());
    console.log("Requested BTC            : ", swapContractInfo[2].toString());
    console.log("Requested ETH collateral : ", swapContractInfo[3].toString());
    console.log("Ends at                  : ", swapContractInfo[4].toString());
    console.log("ETH giver Eth address    : ", swapContractInfo[5].toString());
    console.log("ETH giver Btc address    : ", swapContractInfo[6].toString());
    console.log("BTC giver Eth address    : ", swapContractInfo[7].toString());
  } else {
    console.log("Exists                : ", "No");
  }

  console.log("====================================");
  console.log("");

  callback(swapContractInfo);
}
