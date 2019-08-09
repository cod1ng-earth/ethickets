import React from 'react';
import Web3 from 'web3'
import contractAbi from '../abi/abi';

const gethNode="wss://ropsten.infura.io/ws/v3/f29d0befbacb497f9cb9d18e23212d4e";
const attendeePrivateKey="0x8C9CE3B02B07E7F546F88CC6BA676E5A2C6322125B09F71EFCC7D368F8376EE2";

const web3 = new Web3(gethNode);

import { Text, View, TextInput, Button } from 'react-native';

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      address: 'not loaded yet',
      balance: ''
    };
  }

  async getBalance(account) {
    const balance = await web3.eth.getBalance(account.address);
    return balance
  }

  async addAccountToWallet(privateKey) {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    return await web3.eth.accounts.wallet.add(account)
  }

  async componentDidMount() {
    const account = await this.addAccountToWallet(attendeePrivateKey);
    const balance = await this.getBalance(account)
    this.setState({
      address: account.address,
      balance 
    })
  }

  //onChangeText={address => this.setState({ address })}

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>

        {this.state.balance && <Text>{this.state.balance}</Text>}

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          value={this.state.address}
        />
        <Button
          onPress={this.props.save}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
