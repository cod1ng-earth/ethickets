import React, {Component} from 'react';

import { IonChip, IonItem, IonLabel, IonButton, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';

import * as w3 from '../web3'

export default class EventListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ticketCount: 0
        }
    }

    async componentDidMount() {
        const ticketCount = await w3.getTicketCount(
            this.props.account,
            this.props.ethOrganizerAddress,
            this.props.ethContractAddress
        )
        console.log(ticketCount)
        this.setState({
            ticketCount
        })
    }

    render() {
        return (
            <IonItem>
                <IonLabel>{this.props.name}</IonLabel>
                <IonLabel>
                    {this.props.description.toString().slice(0, 80)}
                </IonLabel>
                <IonButton onClick={() => this.props.onBuy()}>Count me in</IonButton>
                
                {this.props.account && <IonChip>
                    <IonLabel color="secondary">{this.state.ticketCount}</IonLabel>
                </IonChip>
                }
            </IonItem>
        );
    }
}
