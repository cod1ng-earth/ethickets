import React, {Component} from "react";
import {IonApp, IonContent, IonList, IonSpinner} from "@ionic/react";
import EventListItem from "./EventListItem";
import Header from "./Header";
import BuyModal from './BuyModal'

export default class EventScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchList: [],
            buyItem: null,
            loading: true
        }
        this.bought = this.bought.bind(this)
    }

    async componentDidMount() {
        const response = await fetch("https://ethickets.herokuapp.com/v1/events")
        const responseJson = await response.json()

        this.setState({
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
                    <BuyModal item={this.state.buyItem} closed={this.bought}></BuyModal>
                    <IonContent>
                        <IonList>
                        {this.state.fetchList.map(item => (
                            <EventListItem {...item} onBuy={() => this.setState({buyItem: item})} />
                        ))}
                        </IonList>
                    </IonContent>
                </IonContent>
            );
        }
    }
}