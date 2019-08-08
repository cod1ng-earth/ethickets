import React from 'react';

import {
  FlatList,
  View,
  StyleSheet,
  Modal,
  ActivityIndicator, Button,
} from 'react-native';
import EventListItem from "./EventListItem";
import EventView from "./EventView";
import Header from "./Header";

export default class EventsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetchList: null };
    this.state.modalVisible = false;
    this.state.chosenEvent = null;
    this.state.loading = true;
    this.onCart = this.onCart.bind(this);
    this.buyTicket = this.buyTicket.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  static navigationOptions = {
    headerTitle: <Header title={'Events'}/>,
  };

  async componentDidMount() {
    fetch("https://ethickets.herokuapp.com/v1/events")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
          fetchList: responseJson
        });
      })

      .catch(error => console.log(error)); //to catch the errors if any
  }

  onCart(chosenEvent) {
    this.setState({ modalVisible: true, chosenEvent });
  }
  hideModal() {
    this.setState({ modalVisible: false });
  }
  buyTicket() {
    //check wallet
    //get ethereums
    //call contract to add ticket
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator style={styles.activityIndicator} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.fetchList}
            renderItem={({ item }) => (
              <EventListItem
                id={item.id}
                title={item.name}
                description={item.description}
                contractId={item.ethContractId}
                startDate={item.startDate}
                navigation={this.props.navigation}
                endDate={item.startDate}
              />
            )}
            keyExtractor={item => item.id}
          />
          <Button
              title="Settings"
              onPress={() => this.props.navigation.navigate('Settings')}
          />
        </View>

      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)'
  },
  item: {
    padding: 30,
    fontSize: 18,
    height: 44,
    backgroundColor: 'rgba(247,247,247,1.0)'
  },
  activityIndicator: {}
});

function getParsedDate(date) {
  date = String(date).split(' ');
  var days = String(date[0]).split('-');
  var hours = String(date[1]).split(':');
  return [
    parseInt(days[0]),
    parseInt(days[1]) - 1,
    parseInt(days[2]),
    parseInt(hours[0]),
    parseInt(hours[1]),
    parseInt(hours[2]),
  ];
}
