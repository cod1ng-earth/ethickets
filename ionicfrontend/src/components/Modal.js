import React, { Component } from 'react';

import {
  IonModal,  
} from '@ionic/react';

export default class Modal extends React.Component {
  
    constructor(props) {
        super(props)
        this.state = {
            show: props.show
        }
    }
    
    render() {
        return <IonModal isOpen={this.state.show}
        onDidDismiss={
            () => this.setState({ show: false})
          }
      >
        Some content to display in the modal.
      </IonModal>
    }
    
}