
//connecting to node
const alchemy = "https://eth-goerli.g.alchemy.com/v2/h_Yci2S6utW1IK8XRuJMMhq4Gs5QYLs6";
const node = new ethers.providers.JsonRpcProvider(alchemy);

// contract address
const contractaddr = "0xC3f09a26f3e66181B7C592112f94E55c998CdC12";

// abi code
const ABI = {
  "_format": "hh-sol-artifact-1",
  "contractName": "voting",
  "sourceName": "contracts/voting.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "candidate",
          "type": "address"
        }
      ],
      "name": "GetTotalFunds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "candidate",
          "type": "address"
        }
      ],
      "name": "SendEth",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "candidate",
          "type": "address"
        }
      ],
      "name": "getVoteCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "candidate",
          "type": "address"
        }
      ],
      "name": "vote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506105f2806100206000396000f3fe60806040526004361061003f5760003560e01c80636dd7d8ea146100445780637e690cbc1461006d578063e652f4cc146100aa578063fd89bf02146100e7575b600080fd5b34801561005057600080fd5b5061006b60048036038101906100669190610382565b610103565b005b34801561007957600080fd5b50610094600480360381019061008f9190610382565b610221565b6040516100a191906103c8565b60405180910390f35b3480156100b657600080fd5b506100d160048036038101906100cc9190610382565b610242565b6040516100de91906103c8565b60405180910390f35b61010160048036038101906100fc9190610421565b61028b565b005b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610184576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017b906104ab565b60405180910390fd5b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461021791906104fa565b9250508190555050565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b66b1a2bc2ec500003410156102d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102cc9061059c565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015801561031b573d6000803e3d6000fd5b5050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061034f82610324565b9050919050565b61035f81610344565b811461036a57600080fd5b50565b60008135905061037c81610356565b92915050565b6000602082840312156103985761039761031f565b5b60006103a68482850161036d565b91505092915050565b6000819050919050565b6103c2816103af565b82525050565b60006020820190506103dd60008301846103b9565b92915050565b60006103ee82610324565b9050919050565b6103fe816103e3565b811461040957600080fd5b50565b60008135905061041b816103f5565b92915050565b6000602082840312156104375761043661031f565b5b60006104458482850161040c565b91505092915050565b600082825260208201905092915050565b7f596f75206861766520616c726561647920766f74656400000000000000000000600082015250565b600061049560168361044e565b91506104a08261045f565b602082019050919050565b600060208201905081810360008301526104c481610488565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610505826103af565b9150610510836103af565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610545576105446104cb565b5b828201905092915050565b7f73686f756c642062652061746c65617374203120657468657200000000000000600082015250565b600061058660198361044e565b915061059182610550565b602082019050919050565b600060208201905081810360008301526105b581610579565b905091905056fea26469706673582212206d7554a2fccf5292c7b1a0657223e7a6ff1b921c034df64b87587b0e8fac08ba64736f6c63430008090033",
  "deployedBytecode": "0x60806040526004361061003f5760003560e01c80636dd7d8ea146100445780637e690cbc1461006d578063e652f4cc146100aa578063fd89bf02146100e7575b600080fd5b34801561005057600080fd5b5061006b60048036038101906100669190610382565b610103565b005b34801561007957600080fd5b50610094600480360381019061008f9190610382565b610221565b6040516100a191906103c8565b60405180910390f35b3480156100b657600080fd5b506100d160048036038101906100cc9190610382565b610242565b6040516100de91906103c8565b60405180910390f35b61010160048036038101906100fc9190610421565b61028b565b005b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610184576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017b906104ab565b60405180910390fd5b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461021791906104fa565b9250508190555050565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b66b1a2bc2ec500003410156102d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102cc9061059c565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015801561031b573d6000803e3d6000fd5b5050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061034f82610324565b9050919050565b61035f81610344565b811461036a57600080fd5b50565b60008135905061037c81610356565b92915050565b6000602082840312156103985761039761031f565b5b60006103a68482850161036d565b91505092915050565b6000819050919050565b6103c2816103af565b82525050565b60006020820190506103dd60008301846103b9565b92915050565b60006103ee82610324565b9050919050565b6103fe816103e3565b811461040957600080fd5b50565b60008135905061041b816103f5565b92915050565b6000602082840312156104375761043661031f565b5b60006104458482850161040c565b91505092915050565b600082825260208201905092915050565b7f596f75206861766520616c726561647920766f74656400000000000000000000600082015250565b600061049560168361044e565b91506104a08261045f565b602082019050919050565b600060208201905081810360008301526104c481610488565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610505826103af565b9150610510836103af565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610545576105446104cb565b5b828201905092915050565b7f73686f756c642062652061746c65617374203120657468657200000000000000600082015250565b600061058660198361044e565b915061059182610550565b602082019050919050565b600060208201905081810360008301526105b581610579565b905091905056fea26469706673582212206d7554a2fccf5292c7b1a0657223e7a6ff1b921c034df64b87587b0e8fac08ba64736f6c63430008090033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

const code = ABI.abi;

let VoteForElon = () => {
  
  const addr = "0x859d3D6EB57AB05C2cd38a9c3c596e9dD46D60B4";
  main(addr,0);
 
}

let VoteForMark = () => {
  
  const addr = "0xef220A905D028AA635185C7eFe961A00a74F5Dab";
  main(addr,2);
 
}

let VoteForOsho = () => {
  
  const addr = "0x2a0B4Ed087890B7C31348597E54cFb0fac6Ed09f";
  main(addr,4);
 
}

let VoteForJeff = () => {
  
  const addr = "0x7557F0bDab72f86Ce30E5b80780003ce223EEf19";
  main(addr,6);
 
}

let VoteForSteve = () => {
  
  const addr = "0x47DcE2c86c276aaB5E67AFC11d3d42243C324f64";
  main(addr,8);
 
}

let VoteForJack = () => {
  
  const addr = "0x516f0A21F2fAC0DB02dC199d6D71e6de01c7A8a9";
  main(addr,10);
 
}


let ElonFunding = async () => {

  const addr = "0x859d3D6EB57AB05C2cd38a9c3c596e9dD46D60B4";
  n=1;
  //connect to metamask 
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  await provider.send('eth_requestAccounts' , []);
  const signer = provider.getSigner();
  
  //instance of smart contract
  const contract = new ethers.Contract(contractaddr,code,signer);
  const contractSign = contract.connect(signer);
  
  //transferring ethers
  try {
    
    const eth = document.querySelectorAll('input')[0].value;
    const tx = await contractSign.SendEth(addr, {value: ethers.utils.parseEther(eth)});
    tx.wait();
    await TotalFunds(addr,n);

  }catch(error) {
    await TotalFunds(addr,n);
  }  
  
}

let JeffFunding = async () => {
  const addr = "0x7557F0bDab72f86Ce30E5b80780003ce223EEf19";
  n=7;
  //connect to metamask
  const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
  await provider.send("eth_requestAccounts",[]);
  const signer = provider.getSigner();

  //instance of contract;
  const contract = new ethers.Contract(contractaddr,code,signer);
  const contractSign = contract.connect(signer);

   //transferring ethers
   try {
    
    const eth = document.querySelectorAll('input')[0].value;
    const tx = await contractSign.SendEth(addr, {value: ethers.utils.parseEther(eth)});
    tx.wait();
    await TotalFunds(addr,n);

  }catch(error) {
    await TotalFunds(addr,n);
  }  


}

let MarkFunding = async () => {
  const addr = "0x7557F0bDab72f86Ce30E5b80780003ce223EEf19";
  n=3;
  //connect to metamask
  const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
  await provider.send("eth_requestAccounts",[]);
  const signer = provider.getSigner();

  //instance of contract;
  const contract = new ethers.Contract(contractaddr,code,signer);
  const contractSign = contract.connect(signer);

   //transferring ethers
   try {
    
    const eth = document.querySelectorAll('input')[0].value;
    const tx = await contractSign.SendEth(addr, {value: ethers.utils.parseEther(eth)});
    tx.wait();
    await TotalFunds(addr,n);

  }catch(error) {
    await TotalFunds(addr,n);
  }  
}

let JackFunding = async () =>{
  const addr = "0x7557F0bDab72f86Ce30E5b80780003ce223EEf19";
  n=11;
  //connect to metamask
  const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
  await provider.send("eth_requestAccounts",[]);
  const signer = provider.getSigner();

  //instance of contract;
  const contract = new ethers.Contract(contractaddr,code,signer);
  const contractSign = contract.connect(signer);

   //transferring ethers
   try {
    
    const eth = document.querySelectorAll('input')[0].value;
    const tx = await contractSign.SendEth(addr, {value: ethers.utils.parseEther(eth)});
    tx.wait();
    await TotalFunds(addr,n);

  }catch(error) {
    await TotalFunds(addr,n);
  }    
}

let OshoFunding = async () =>{
  const addr = "0x7557F0bDab72f86Ce30E5b80780003ce223EEf19";
  n=5;
  //connect to metamask
  const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
  await provider.send("eth_requestAccounts",[]);
  const signer = provider.getSigner();

  //instance of contract;
  const contract = new ethers.Contract(contractaddr,code,signer);
  const contractSign = contract.connect(signer);

   //transferring ethers
   try {
    
    const eth = document.querySelectorAll('input')[0].value;
    const tx = await contractSign.SendEth(addr, {value: ethers.utils.parseEther(eth)});
    tx.wait();
    await TotalFunds(addr,n);

  }catch(error) {
    await TotalFunds(addr,n);
  }    
}

let SteveFunding = async () =>{
  const addr = "0x7557F0bDab72f86Ce30E5b80780003ce223EEf19";
  n=9;
  //connect to metamask
  const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
  await provider.send("eth_requestAccounts",[]);
  const signer = provider.getSigner();

  //instance of contract;
  const contract = new ethers.Contract(contractaddr,code,signer);
  const contractSign = contract.connect(signer);

   //transferring ethers
   try {
    
    const eth = document.querySelectorAll('input')[0].value;
    const tx = await contractSign.SendEth(addr, {value: ethers.utils.parseEther(eth)});
    tx.wait();
    await TotalFunds(addr,n);

  }catch(error) {
    await TotalFunds(addr,n);
  }    
}

let TotalVotes = async (addr,n) => {

  //reading contract (getting total votes)
  const contract = new ethers.Contract(contractaddr,code,node);
  const totalvotes = await contract.getVoteCount(addr);
  
  document.querySelectorAll('h5')[n].innerHTML = "Total Votes : " + totalvotes;

}

let TotalFunds = async (addr,n) => {

  const contract = new ethers.Contract(contractaddr,code,node);
  const total = await contract.GetTotalFunds(addr);
  total.toString();
  
  document.querySelectorAll('h5')[n].innerHTML = "Total Funds: " + ethers.utils.formatEther(total) + "ethers"; 

}

let main = async (addr,n) => {

  //connecting metamask
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
 
  
  
  //contract instance
  const contract = new ethers.Contract(contractaddr,code,signer);
  const contractSign = contract.connect(signer);

  
  //using contract functions
  try {
    const tx = await contractSign.vote(addr);
    tx.wait();
    await TotalVotes(addr,n);
  }
  catch(error){
    alert("you have already voted");
    await TotalVotes(addr,n);
  }
  

}
