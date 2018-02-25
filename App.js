import React, {Component} from 'react';
import {Text, Button, View, StyleSheet, TextInput} from 'react-native';

import ListItem from './src/components/listItem'

export default class HelloWorldApp extends Component {
    state = {
        placeName: '',
        places: []
    }

    placeNameChaneHandler = val => {
        this.setState({
            placeName: val
        })
    }

    buttonPress = () => {
        if (this.state.placeName.trim() === '') {
            return;
        }

        this.setState(prev => {
            return {
                places: prev.places.concat(prev.placeName)
            }
        })
    }

    render() {
        const placesOutput = this.state.places.map(( place, i ) => (
            <ListItem
                key={i}
                placeName={place}
                onItemPress={() => alert('Item Pressed: ' + i)}/>
        ))

        return (
            <View style={styles.container}>
                <View>
                    <TextInput
                        value={this.state.placeName}
                        style={styles.textInput}
                        onChangeText = {this.placeNameChaneHandler}
                        placeholder="Type here to enter place"
                    />

                    <Button
                        onPress={this.buttonPress}
                        title="Add place"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
                <View style={styles.placeOutput}>
                    {placesOutput}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    textInput: {
        //flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    placeOutput: {
        flex: 1
    }
})

