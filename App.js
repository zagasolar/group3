import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Maps from "./Home/Maps";
import SearchBar from "./Home/SearchBar";

export default function App() {
  return (
    // <SearchBar/>
    <SafeAreaView >
      {/* <SearchBar/> */}
      <Maps/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // display: "flex"
  },
});
