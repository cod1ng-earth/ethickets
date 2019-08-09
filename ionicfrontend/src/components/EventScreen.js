import React, {Component} from "react";
import {IonApp, IonChip, IonLabel, IonContent, IonList, IonSpinner} from "@ionic/react";
import EventListItem from "./EventListItem";
import Header from "./Header";
import BuyModal from './BuyModal'

import * as w3 from '../web3';

const attendeePrivateKey = '0x8C9CE3B02B07E7F546F88CC6BA676E5A2C6322125B09F71EFCC7D368F8376EE2';

export default class EventScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchList: [],
            buyItem: null,
            loading: true,
            account: null,
            balance: 0
        }
        this.bought = this.bought.bind(this)
    }

    async componentDidMount() {
        const response = await fetch("https://ethickets.herokuapp.com/v1/events")
        const responseJson = await response.json()

        const account = await w3.addAccountToWallet(attendeePrivateKey);
        const balance = await w3.getBalance(account);

        this.setState({
            account: account,
            balance: balance,
            loading: false,
            fetchList: responseJson
        });
    }

    bought() {
        this.setState({buyItem: null})
    }
    render() {
        if (this.state.loading) {
            return (
                <IonContent>
                    {/*-- Default Spinner --*/}
                    Loading events list ... hang tight <IonSpinner />
                </IonContent>
            );
        } else {
            
            return (
                <IonContent>
                    <Header title={'Event List'}/>
                    <IonChip>
                        <IonLabel>{this.state.balance}</IonLabel>
                    </IonChip>

                    <BuyModal item={this.state.buyItem} account={this.state.account} closed={this.bought}></BuyModal>
                    <IonContent>

                        <IonList>
                        {this.state.fetchList.map(item => (
                            <EventListItem key={item.id} account={this.state.account} {...item} onBuy={() => this.setState({buyItem: item})} />
                        ))}
                        </IonList>
                    </IonContent>
                </IonContent>
            );
        }
    }
}