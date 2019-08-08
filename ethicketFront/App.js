import React from 'react';
import { Button, View, Text } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import EventsScreen from './components/EventsScreen';
import MyEventsScreen from './components/MyEventsScreen';
import SettingsScreen from './components/SettingsScreen';
import EventView from "./components/EventView";
/*
const TabNavigator = createBottomTabNavigator({
  Events: EventsScreen,
  'My Event': MyEventsScreen,
  Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);


 */

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: EventsScreen,
    EventView: EventView,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
