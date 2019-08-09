import React, { useState, Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonContent,
  IonModal,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle
} from '@ionic/react';
import EventScreen from "./components/EventScreen";

import Modal from './components/Modal'

class App extends Component {
  render() {
      return (
          <IonApp>
            <IonContent>
                <Modal show={true} />
              <EventScreen />
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>Welcome to Ionic</IonCardSubtitle>
                  <IonCardTitle>Running on React</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonContent>
          </IonApp>
      );

  }
}

export default App;