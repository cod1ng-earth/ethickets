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
         
          <EventScreen />
          
        </IonContent>
      </IonApp>
    );
  }
}

export default App;