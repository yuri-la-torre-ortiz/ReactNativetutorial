import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goals" style={styles.input} />
        <Button title="ADD" />
      </View>
    </View>
  );
}
// Use a stylesheet instead of inline styling
const styles = StyleSheet.create({
  //any object name can be utilized
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "75%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
