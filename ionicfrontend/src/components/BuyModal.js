import React, { Component } from 'react';

import {
    IonContent,
    IonChip,
    IonLabel,
  IonModal
} from '@ionic/react';
const Web3 = require('web3')
const contractAbi = require('../abi')

const gethNode = 'wss://ropsten.infura.io/ws/v3/f29d0befbacb497f9cb9d18e23212d4e';
const attendeePrivateKey = '0x8C9CE3B02B07E7F546F88CC6BA676E5A2C6322125B09F71EFCC7D368F8376EE2';

const web3 = new Web3(gethNode);

export default class Modal extends React.Component {
  
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    

    render() {
       
    }
    
}