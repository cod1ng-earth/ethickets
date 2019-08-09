import React, { useState, Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import {
  IonApp,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonFab, IonFabButton, IonIcon, IonFabList
} from '@ionic/react';
import EventScreen from "./components/EventScreen";

import SettingsModal from './components/SettingsModal'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      settingsModal: false
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    console.log(this.state.settingsModal)
    this.setState({settingsModal: !this.state.settingsModal})
  }

  render() {
    return (
      <IonApp>
        
        <IonContent>

          <IonFab vertical="top" horizontal="end" slot="fixed">
            <IonFabButton onClick={this.toggleModal}>
              <IonIcon name="add"  />
            </IonFabButton>
          </IonFab>

          <SettingsModal show={this.state.settingsModal} closed={this.toggleModal} />
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