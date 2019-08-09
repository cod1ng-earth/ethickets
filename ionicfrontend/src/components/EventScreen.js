import React, {Component} from "react";
import {IonApp, IonContent, IonList, IonSpinner} from "@ionic/react";
import EventListItem from "./EventListItem";
import Header from "./Header";

export default class EventScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchList: null,
            chosenEvent: false,
            loading: true
        }
    }

    async componentDidMount() {
        const response = await fetch("https://ethickets.herokuapp.com/v1/events")
        const responseJson = await response.json()

        this.setState({
            loading: false,
            fetchList: responseJson
        });
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
            console.log(this.state.fetchList);
            return (
                <IonContent>
                    <Header title={'Event List'}/>
                    <IonContent>
                        <IonList>
                        {this.state.fetchList.map(item => (
                            <EventListItem title={item.title} description={item.description}/>
                        ))}
                        </IonList>
                    </IonContent>
                </IonContent>
            );
        }
    }
}