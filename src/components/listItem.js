import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native'

const listItem = (props) => (
    <View style={styles.listItem}>
        <Text>{props.placeName}</Text>
    </View>
);

const styles = StyleSheet.create(
    {
        listItem: {
            color: '#FFF',
            borderColor: 'white',
            width: "100%",
            padding: 10,
            backgroundColor: 'grey'
        }
    }
)
export default listItem