
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

export {
    web3,
    getBalance,
    addAccountToWallet
}
