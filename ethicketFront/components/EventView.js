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
import DateList from "./DateList";
import Header from "./Header";

export default class EventView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { walletId: '' };
  }

  static navigationOptions = {
    headerTitle: <Header title={''} />,
  };

  render() {
    const chosenEvent = this.props.navigation.getParam('chosenEvent');
    return (
      <View style={styles.modalViewCart}>
          <View style={styles.container}>
              <View>
                  <DateList date={chosenEvent.startDate} />
              </View>
              <View style={styles.innerContainer}>
                  <Text style={styles.title}>{chosenEvent.title}</Text>
                  <Text style={styles.description}>
                      {chosenEvent.description}
                  </Text>
              </View>
          </View>

        <Text style={styles.title}>{chosenEvent.contractAddress}</Text>
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
    modalViewCart:{
      padding:10,
    },
    title: {
        fontSize: 22
    },
    description: {
        fontSize: 15,
        marginTop: 10,
    },
});
