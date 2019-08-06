import React from 'react';

import { Text, FlatList, SectionList, View, StyleSheet } from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";
import EventListItem from "./EventListItem";

export default class EventsScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {fetchList : [
            {id: 1 ,eventTitle: 'DevDay 2020', eventDescription: "Crazy Turbine Kreuzberg guys will be as famous as Berghain"},
            {id: 2 ,eventTitle: 'KubeCon Clifornia 2020', eventDescription: "The K8S at it's best"},
            {id: 3 ,eventTitle: 'Pearl Jam Berlin 2020', eventDescription: "Seattle guys are Back with all the hits"},
            {id: 4 ,eventTitle: 'Tool 2019', eventDescription: "Industrial/Psychodelic Rock will see it's great come back"},
        ]};
    }

    async componentDidMount(){
        return;
        //const fetchList = await this.fetchListsFromServer();
        if(fetchLists){
            this.setState({fetchList});
            alert('fetching lists');
        }
    }

    async fetchListsFromServer() {
        try {
            const response = await fetch('https://url-of-your-server.com/example/json'); // 1
            return await response.json(); // 2
        } catch (error) {
            // ... gracefully handle error
        }
    }


    render() {
        console.log(this.state.fetchList);
        return (
            <View containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                <FlatList
                    data={this.state.fetchList}
                    renderItem={({item}) => (
                        <EventListItem
                            title={item.eventTitle}
                            description={item.eventDescription}
                        />
                        )}
                    keyExtractor={item => item.id}
                />

            </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 30,
        fontSize: 18,
        height: 44,
    },
})