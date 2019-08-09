import React, { Component } from 'react';

import {
    IonContent,
    IonChip,
    IonLabel,
    IonButton,
  IonModal,
  IonText
} from '@ionic/react';
import * as w3 from '../web3';

export default class BuyModal extends React.Component {
  
    constructor(props) {
        super(props)
        this.state = {
            transaction: null
        }
    }
    
    async buy() {
        console.log()
        const transaction = await w3.attend(this.props.account, this.props.item.ethContractAddress, this.props.item.ticketPrice)
        console.log(transaction)
        this.setState({
            transaction
        })
    }

    render() {
        return <IonModal 
        isOpen={this.props.item !== null}
        onDidDismiss={
            () => this.props.closed()
          }
      >
           <IonContent>
            
            {this.props.item &&
                <>
                <IonText>
                    {this.props.item.name}
                </IonText>

                {this.state.transaction ?
                <IonText>you're in!! {this.state.transaction.transactionHash} </IonText>
                : <IonButton onClick={() => this.buy()}>
                pay {this.props.item.ticketPrice}wei to {this.props.item.ethContractAddress}
            </IonButton>

                }
                
                </>
            }
                
            </IonContent>
        
      </IonModal>
    }
    
}