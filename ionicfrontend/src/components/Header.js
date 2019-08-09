import React from "react";

import { IonHeader, IonContent, IonToolbar, IonButtons, IonBackButton, IonTitle, IonImg } from '@ionic/react';


export default class Header extends React.Component {

  render() {
    return (
        <IonHeader>
            <IonToolbar>
                <IonImg src={'ethicket_logo_name.png'} style={{width: 200}} />
                <IonTitle>{this.props.title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
  }
}
