import React from "react";

import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import DateList from "./dateList";

export default class EventListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={() =>
            this.props.navigation.navigate("EventView", {
              chosenEvent: this.props
            })
          }
        >
          <View style={styles.container}>
            <View>
              <DateList date={this.props.startDate.date} />
            </View>
            <View style={styles.innerContainer}>
              <Text style={styles.title}>{this.props.title}</Text>
              <Text style={styles.description}>
                {this.props.description.toString().slice(0, 50)}
              </Text>
            </View>
            <Image
              source={require('../images/Shopping-Basket.png')}
              style={styles.imageButton}
              title="buy"
            />
          </View>
        </TouchableHighlight>
        <View style={styles.separator} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row"
  },
  datecontainer: {
    flex: 1
  },
  innerContainer: {
    flex: 3,
    padding: 2
  },
  imageButton: {
    width: 50,
    height: 50,
    flex: 1
  },
  title: {
    fontSize: 22
  },
  description: {
    fontSize: 15
  },
  buyButton: {
    color: "#008000",
    backgroundColor: "#212f3d"
  },
  separator: {
    height: 0.5,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)"
  }
});
