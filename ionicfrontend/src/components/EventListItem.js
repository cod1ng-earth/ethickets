import React, {Component} from 'react';

import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import Header from './Header';

export default class EventListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <IonItem>
                    <IonItem>
                        <IonLabel>{this.props.title}</IonLabel>
                        <IonLabel>
                            {this.props.description.toString().slice(0, 80)}
                        </IonLabel>
                    </IonItem>
                </IonItem>
        );
    }
}
