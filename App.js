import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor = "white" />
      <Text style={styles.textColor}>__Write__.</Text>
      <TextInput style={styles.textField} value={'search'}/>
      <View style={styles.boxWrapper}> 

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
    borderRadius: 5,
    textAlign: 'center',
  },
  boxWrapper: { 
    flex: 1,
    width: '100%',
    height: '100%',
  }
});
