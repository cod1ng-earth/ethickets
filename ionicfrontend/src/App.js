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

const Modal = () => {
  
  const [show, setShow] = useState(true);
  
  return <IonModal
    isOpen={show}
    onDidDismiss={() => this.setState(() => ({ showModal: false}))}
  >
    Some content to display in the modal.
  </IonModal>
}

class App extends Component {
  render() {
    return (
      <IonApp>
        <IonContent>
          <Modal />
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