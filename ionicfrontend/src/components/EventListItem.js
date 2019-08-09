import React, {Component} from 'react';

import { IonList, IonItem, IonLabel, IonButton, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import Header from './Header';

export default class EventListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <IonItem>
                <IonLabel>{this.props.name}</IonLabel>
                <IonLabel>
                    {this.props.description.toString().slice(0, 80)}
                </IonLabel>
                <IonButton onClick={() => this.props.onBuy()}>Buy</IonButton>
            </IonItem>
        );
    }
}
