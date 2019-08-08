require('dotenv').config()
const Web3 = require('web3')
const contractAbi = require('../abi')

const gethNode = process.env.GETH_NODE
const hostAddress = process.env.HOST_ADDRESS;
const contractAddress = process.env.CONTRACT_ADDRESS;
const attendeePrivateKey = process.env.ATTENDEE_PRIVATEKEY;

const web3 = new Web3(gethNode);

async function addAccountToWallet(privateKey) {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    return await web3.eth.accounts.wallet.add(account)
}

async function getBalance(web3, account) {
    const balance = await web3.eth.getBalance(account.address);
    return balance

}
async function callSimpleMethods(web3, account) {
    const contractInstance = new web3.eth.Contract(contractAbi, contractAddress);
    const gasPrice = web3.utils.toWei('100','gwei')

    const txhash = await contractInstance.methods.getHosterAddress().call({
        from: hostAddress,
        gas: 30000,
        gasPrice: gasPrice,
        //value: ticketPrice
    }, (err, result) => { 
        console.log(err)
        console.log(result)
    })        

    //just returns a number
    const txhash2 = await contractInstance.methods.getAUselessConstantValue().call({
        from: hostAddress,
        gas: 30000,
        gasPrice: gasPrice,
        //value: ticketPrice
    }, (err, result) => { 
        console.log(err)
        console.log(result)
    })        
}
async function getTicketCount(attendeeAddress, contractAddress) {
    
    const contractInstance = new web3.eth.Contract(contractAbi, contractAddress);
    const gasPrice = web3.utils.toWei('100','gwei')

     const result = await contractInstance.methods.getMyTicketCount(attendeeAddress).call({
        from: hostAddress,
        gas: 30000,
        gasPrice: gasPrice
    });
    return result;
}

async function attend(account, contractAddress) {
    
    const contractInstance = new web3.eth.Contract(contractAbi, contractAddress);
    const gasPrice = web3.utils.toWei('100','gwei')
    const ticketPrice = '10000000'; 
    const txhash = await contractInstance.methods.requestTicket(account.address).send({
        from: account.address,
        gas: 300000,
        gasPrice: gasPrice,
        value: ticketPrice
    });
    return txhash;
}

(async function() {
        
    const account = awaitaddAccountToWallet(attendeePrivateKey);
    //console.log(account)
    
    //const tx = await attend(account, contractAddress);
    //console.log(tx) //tx.transactionHash

    const ticketCount = await getTicketCount(account.address, contractAddress)
    //console.log(ticketCount);

    return true;
})()

  //https://ropsten.infura.io/v3/f29d0befbacb497f9cb9d18e23212d4e
  //ropsten.infura.io/v3/f29d0befbacb497f9cb9d18e23212d4e
