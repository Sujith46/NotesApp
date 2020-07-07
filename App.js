import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from 'expo-status-bar';

import Homelogo from './src/assests/images/home.svg';
import Home from "./src/screens/home";
import Search from "./src/screens/search"
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor = "white" />
      <MyTabs />
    </NavigationContainer>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        navigationOptions={{
          tabBarIcon: ({tintColor}) => (
            <Homelogo name="home" size={25} color={tintColor}/>
          )
        }} 
      />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}
