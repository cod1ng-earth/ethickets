import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('../images/ethicket_logo_name.png')}
          style={{ width: 120, height: 30, }}
        />
        <Text style={{ width: 120, height: 30, flex: 3, marginLeft:10, marginTop:2,  fontSize:20 }}>{this.props.title}</Text>
      </View>
    );
  }
}
