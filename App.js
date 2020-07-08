import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from 'expo-status-bar';

import Homelogo from './src/assests/images/home.svg';
import Home from "./src/screens/home";
import Search from "./src/screens/search"
import Note from './src/screens/notes';
import Sign from './src/screens/sign';
import { createStackNavigator } from "@react-navigation/stack";
import { TextInput } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent={false} backgroundColor={'transparent'} />
      <View style={styles.textContainer}>
        <Text style={styles.textColor}>__Write__.</Text>
      </View>
      <View style={styles.signUpContainer}>
        <TextInput style={styles.textField} value="Email"></TextInput>
        <TextInput style={styles.textField} value="Password"></TextInput>
        <View style={styles.orContainer}>
          <View style={styles.dividerView}></View>
           <Text>or</Text>
          <View style={styles.dividerView}></View>
       </View>
       <View style={styles.buttonContainer}>
         <View style={styles.socialContainer}>
           <TouchableOpacity></TouchableOpacity>
         </View>
         <TouchableOpacity style={styles.mainButton}>
          <Text style={styles.signText}>Sign in</Text>
         </TouchableOpacity>
       </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    
    justifyContent: 'space-between',
    // paddingHorizontal: 20,
    
    color: 'white',
  },
  textContainer: {
    flex: 1,
    paddingTop: 50,
  },
  textColor: {
    color: 'white',
    fontSize: 24,
    marginVertical: 30,
  },
  textField : {
    height: 60, 
    color: '#858585',
    backgroundColor: 'white', 
    width: '100%', 
    // borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
  },
  boxWrapper: { 
    flex: 2,
    width: '100%',
    height: '100%',
  },
  signUpContainer: {
    backgroundColor: '#E6E6E6',
    width: '100%',
    height: '100%',
    flex: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  orContainer: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  dividerView: {
    height: 1,
    width: '45%',
    backgroundColor: 'grey',
  
  },
  buttonContainer: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'blue'
  },
  mainButton: {
    backgroundColor:'black',
    borderRadius: 10,
    padding: 20,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signText: {
    color: 'white',
  }
});

// export default function App() {
//   return (
//     <NavigationContainer>
//       <StatusBar backgroundColor = "white" />
//       <MyTabs />
//       <Stack.Screen name="Note" component={Note}></Stack.Screen>   
//       </NavigationContainer>
//   );
// }

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen 
//         name="Home" 
//         component={Home} 
//         navigationOptions={{
//           tabBarIcon: ({tintColor}) => (
//             <Homelogo /> )
//         }} 
//       />
//       <Tab.Screen name="Search" component={Search} />
//     </Tab.Navigator>
//   );
// }
