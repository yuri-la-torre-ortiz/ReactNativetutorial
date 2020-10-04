import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const GoalInput = (props) => {
  return (
    <TextInput
      placeholder="Course Goals"
      style={styles.input}
      onChangeText={props.goalInputHandler}
      value={props.enteredGoal}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "75%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
