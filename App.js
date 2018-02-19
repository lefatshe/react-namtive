import React, {Component} from 'react';
import {Text, Image, View, StyleSheet, Button, Alert, ActivityIndicator, ListView} from 'react-native';

export default class HelloWorldApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson.movies),
                }, function() {
                    // do something with new state
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={{flex: 1, paddingTop: 20, backGround: 'black'}}>
                <Text style={styles.bigblue}>This is App.</Text>
                <Button
                    onPress={() => {
                        Alert.alert('You tapped the button!');
                    }}
                    title="Press Me"
                />
                <Text style={styles.smallblue}>API CALLS-https://facebook.github.io/react-native/movies.json</Text>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={
                        (rowData) =>
                        <Text>{rowData.title}, {rowData.releaseYear}</Text>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigblue: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        paddingTop: 40,
        textAlign: 'center'
    },
    smallblue: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        paddingTop: 40,
        textAlign: 'center'
    }
});
