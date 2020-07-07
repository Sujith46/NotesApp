import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import {AddNote} from '../components/index'
export default function Search() {
    const [value, currVal] = useState('Search');
  
    return (
      <View style={styles.container}>  
        <TextInput 
          style={styles.textField} 
          value={value}
          onChangeText = {text=> currVal(text)}
          
        />
        <View style={styles.boxWrapper}> 
          <AddNote />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      paddingVertical: 50,
      paddingHorizontal: 20,
      
      color: 'white',
    },
    textColor: {
      color: 'white',
      fontSize: 24,
      marginVertical: 30,
    },
    textField : {
      height: 40, 
      color: '#858585',
      backgroundColor: '#262626', 
      width: '100%', 
      borderWidth: 1,
      borderRadius: 10,
      textAlign: 'center',
    },
    boxWrapper: { 
      flex: 1,
      width: '100%',
      height: '100%',
    }
  });
  