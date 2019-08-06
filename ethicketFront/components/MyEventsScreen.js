import React from 'react';
import {Text, View} from 'react-native';

export default class MyEventsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>My Events!</Text>
            </View>
        );
    }
}