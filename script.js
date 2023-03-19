const { ethers } = require("ethers");
require("dotenv").config({ path: ".env" });

async function main() {

    // Entered contract address should be verified :)
  const response = await fetch(
    "https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=ENTER YOUR CONTRACT ADDRESS&apikey=ENTER YOUR API KEY"
  );
  const data = await response.json();
  let abi = data.result;
  console.log(abi);

  const node =
    "ENTER YOUR SEPOLIA RPC ";
  const provider = new ethers.providers.JsonRpcProvider(node);

  let privateKey =
    "ENTER YOUR PRIVATE KEY";
  let wallet = new ethers.Wallet(privateKey, provider);

  console.log("using Wallet address " + wallet.address);

  let contractAddress = "ENTER YOUR CONTRACT ADDRESS";

  let contract = new ethers.Contract(contractAddress, abi, wallet);

  let read = await contract.read();
  console.log("Value stored in contract  is " + read.toString());
}
main();
