import React from 'react';

import { Text, View, Image, StyleSheet, Modal, TouchableHighlight } from 'react-native';

export default class EventListItem extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
          <View style={styles.container}>
              <View style={styles.innerContainer}>
                  <Text style={styles.title}>{this.props.title}bar</Text>
                  <Text style={styles.description}>{this.props.description}</Text>
              </View>
              <TouchableHighlight onPress={() => this.props.onCart(this.props)}>
                                      <Image
                  source={require('../images/Shopping-Basket.png')}
                  style={styles.imageButton}
                  title="buy"
                                      /></TouchableHighlight>
          </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        flexDirection: 'row'
    },
    innerContainer :{
        flex: 1,
    },
    imageButton : {
      width: 50,
      height: 50,
    },
    title : {
        fontSize : 22,
    },
    description : {
        fontSize : 15,
    },
    buyButton : {
        color: '#008000',
        backgroundColor:  '#212f3d',
}
})