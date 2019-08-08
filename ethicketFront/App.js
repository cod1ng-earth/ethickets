import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import EventsScreen from './components/EventsScreen';
import MyEventsScreen from './components/MyEventsScreen';
import SettingsScreen from './components/SettingsScreen';

const TabNavigator = createBottomTabNavigator({
  Events: EventsScreen,
  'My Event': MyEventsScreen,
  Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);
