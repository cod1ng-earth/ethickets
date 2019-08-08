import React from "react";

import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Button
} from "react-native";
import DateList from "./dateList";

export default class ModalViewCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { walletId: '' };
  }

  render() {
    return (
      <View style={styles.modalViewCart}>
        <TouchableHighlight onPress={() => this.props.hideModal()}>
          <Text>Back</Text>
        </TouchableHighlight>
        <Text>{this.props.chosenEvent.title}</Text>
        <DateList date={this.props.chosenEvent.startDate} />
        <Text>{this.props.chosenEvent.description}</Text>

        <Text style={styles.title}>{this.props.chosenEvent.contractId}</Text>
        <Button
          onPress={() => this.props.buyTicket(this.state)}
          title="Buy Ticket"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalViewCart: {
    marginTop: 80,
  },
});
