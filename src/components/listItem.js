import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPress}>
        <View style={styles.listItem} >
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create(
    {
        listItem: {
            margin: 1,
            borderColor: 'white',
            width: "100%",
            padding: 10,
            backgroundColor: '#efefef'
        }
    }
)
export default listItem