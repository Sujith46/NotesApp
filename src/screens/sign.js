import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpactity } from 'react-native';

export default function Sign() {
    return(
        <View style={styles.signContainer}>
             <Text style={styles.textColor}>__Write__.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    signContainer: {
        flex: 1,
        backgroundColor: 'black',

    },
    textColor: {
        color: 'white',
        fontSize: 24,
        marginVertical: 30,
    },
})