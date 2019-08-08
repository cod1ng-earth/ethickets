import React from "react";
import { StyleSheet, Text, View } from "react-native";
import moment from "moment";

export default class DateList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new moment(this.props.date.toString().slice(0, 19)) };
    this.state.loading = true;
  }

  render() {
    return (
      <View style={styles.datecontainer}>
        <Text style={styles.dateDayMonth}>
          {this.state.date.format("DD")} / {this.state.date.format("MM")}
        </Text>
        <Text style={styles.dateYear}>{this.state.date.format("YYYY")}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  datecontainer: {
    flex: 1
  }
});
