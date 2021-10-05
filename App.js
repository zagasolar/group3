import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import MapScreen from "./MapScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const globalScreenOptions = {
  headerStyle: { backgroundColor: "#18e7a4" },
  headerTitleStyle: { color: "white" },
  HeaderTintColor: "#DF1D44",
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            title: "SIGN IN",
            headerTintColor:'#fff'
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: "SIGN UP",
            headerTintColor:'#fff'
          }}
        />
        <Stack.Screen
          name="Maps"
          component={MapScreen}
          options={{
            title: "MapScreen",
            headerTintColor:'#fff'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//#29D23A
