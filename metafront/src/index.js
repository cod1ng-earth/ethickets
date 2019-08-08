const contractAbi = require('./abi')

async function start(web3) {
    const accounts = web3.eth.accounts
    const account = accounts[0]

    debugger
    
    const contract = web3.eth.contract(contractAbi);
    
    const contractAddress = '0x575a50b88c368a78ec5ab775c05f6aa87b15bae6'; 
    //0xd582c3bc0e2c8040a0490d7d318995a1f5609bc1
    // '0x4F614f3eD604eBfDaa0766e50d351cDf89E37956';
    const contractInstance = contract.at(contractAddress);

    const gasPrice = web3.toWei(100,'gwei')
    //const ticketPrice = web3.toWei(100,'gwei')
    
    //returns a state variable (hoster)
    const txhash = await contractInstance.getHosterAddress({
        from: account,
        gas: 30000,
        gasPrice: gasPrice,
        //value: ticketPrice
    }, (err, result) => { 
        console.log(err)
        console.log(result)
    })        

    //just returns a number
    const txhash2 = await contractInstance.getAUselessConstantValue({
        from: account,
        gas: 30000,
        gasPrice: gasPrice,
        //value: ticketPrice
    }, (err, result) => { 
        console.log(err)
        console.log(result.toJSON())
    })        

}
window.addEventListener('load', async function() {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      window.web3 = new Web3(web3.currentProvider);
    }
    await start(web3);
  });
