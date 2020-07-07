import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function AddNote() {
    return(
        <View style={styles.notesContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.addText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    notesContainer: {
        width: '100%',
        paddingTop: '10%',
    },
    addNoteContainer: {
       
        backgroundColor: '#262626',
      
    },
    addText: {
        color: 'white',
        fontSize: 32,
    },
    button: {
        backgroundColor: '#262626',
        height: '60%',
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    }
});



