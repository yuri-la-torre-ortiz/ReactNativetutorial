import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TextInput 
          placeholder="Course Goals" 
          style={{ width: '75%', borderColor: 'black', borderWidth: 1, padding: 10 }} 

        />
        <Button title="ADD" />
      </View>
      </View>
  );
}
