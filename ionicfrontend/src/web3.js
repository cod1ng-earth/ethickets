
const Web3 = require('web3')
const contractAbi = require('./abi')

const gethNode = 'wss://ropsten.infura.io/ws/v3/f29d0befbacb497f9cb9d18e23212d4e';

const web3 = new Web3(gethNode);

async function getBalance(account) {
    const balance = await web3.eth.getBalance(account.address);
    return balance
}

async function addAccountToWallet(privateKey) {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    return await web3.eth.accounts.wallet.add(account)
}

async function getTicketCount(account, hostAddress, contractAddress) {
    
    const contractInstance = new web3.eth.Contract(contractAbi, contractAddress);
    const gasPrice = web3.utils.toWei('100','gwei')

     const result = await contractInstance.methods.getMyTicketCount(account.address).call({
        from: hostAddress,
        gas: 30000,
        gasPrice: gasPrice
    });
    return result;
}

async function attend(account, contractAddress, ticketPriceWei) {
    
    const contractInstance = new web3.eth.Contract(contractAbi, contractAddress);
    const gasPrice = web3.utils.toWei('100','gwei')
    const txhash = await contractInstance.methods.requestTicket(account.address).send({
        from: account.address,
        gas: 300000,
        gasPrice: gasPrice,
        value: ticketPriceWei
    });
    return txhash;
}

export {
    web3,
    getBalance,
    addAccountToWallet,
    attend,
    getTicketCount
}
