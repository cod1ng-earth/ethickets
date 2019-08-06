import React from 'react';

import { Text, View, StyleSheet, Button } from 'react-native';

export default class EventListItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
          <View>
              <Text style={styles.eventTitle}>{this.props.title}bar</Text>
              <Button style={styles.buyButton} onPress title="Event Kaufen"/>
              <Text style={styles.eventDescription}>{this.props.description}</Text>
          </View>

        );
    }

}

const styles = StyleSheet.create({
    eventTitle : {
        fontSize : 22,
    },
    eventDescription : {
        fontSize : 10,
    },
    eventButton : {
        color: '#008000',
        backgroundColor:  '#212f3d',
}
})