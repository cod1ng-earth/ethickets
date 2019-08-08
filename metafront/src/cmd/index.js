require('dotenv').config()
const Web3 = require('web3')
const contractAbi = require('../abi')

const account = '0xE231B4e55fE1D0Afb3e746e64E78eEffB5b599d1';
/*
    //0xd582c3bc0e2c8040a0490d7d318995a1f5609bc1
    // '0x4F614f3eD604eBfDaa0766e50d351cDf89E37956';
    */
const contractAddress = '0x575a50b88c368a78ec5ab775c05f6aa87b15bae6'; 

async function start(web3) {
    //const accounts = web3.eth.accounts
    //const account = accounts[0]

    //debugger
    
    const contractInstance = new web3.eth.Contract(contractAbi, contractAddress);
    

    //const contractInstance = contract.at(contractAddress);

    const gasPrice = web3.utils.toWei('100','gwei')
    
    const txhash = await contractInstance.methods.getHosterAddress().call({
        from: account,
        gas: 30000,
        gasPrice: gasPrice,
        //value: ticketPrice
    }, (err, result) => { 
        console.log(err)
        console.log(result)
    })        

    //just returns a number
    const txhash2 = await contractInstance.methods.getAUselessConstantValue().call({
        from: account,
        gas: 30000,
        gasPrice: gasPrice,
        //value: ticketPrice
    }, (err, result) => { 
        console.log(err)
        console.log(result)
    })        

}

const host = process.env.GETH_NODE
const web3 = new Web3(host);

start(web3)

  //https://ropsten.infura.io/v3/f29d0befbacb497f9cb9d18e23212d4e
  //ropsten.infura.io/v3/f29d0befbacb497f9cb9d18e23212d4e
