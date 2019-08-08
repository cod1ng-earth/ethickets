import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
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
import Header from "./Header";

export default class EventView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { walletId: '' };
  }

  static navigationOptions = {
    headerTitle: <Header title={'Event'} />,
  };

  render() {
    const chosenEvent = this.props.navigation.getParam('chosenEvent');
    return (
      <View style={styles.modalViewCart}>
        <TouchableHighlight onPress={() => this.props.hideModal()}>
          <Text>Back</Text>
        </TouchableHighlight>
        <Text>{chosenEvent.title}</Text>
        <DateList date={chosenEvent.startDate} />
        <Text>{chosenEvent.description}</Text>

        <Text style={styles.title}>{chosenEvent.contractId}</Text>
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
