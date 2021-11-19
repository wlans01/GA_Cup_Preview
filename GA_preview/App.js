import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Cards from "./Screen/Cards";
import Drag_Drop from "./Screen/Drag_Drop";
import Home from "./Screen/Home";
import Main from "./Screen/Main";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00a8ff",
    alignItems: "center",
    justifyContent: "center",
  },
});
