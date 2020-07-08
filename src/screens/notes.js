import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Note() {
    return(
        <View style={styles.noteContainer}>

        </View>
    )
}

const styles = StyleSheet.create({
    noteContainer: {
        backgroundColor: 'white',
        color: 'black',
        flex: 1,
    }
})