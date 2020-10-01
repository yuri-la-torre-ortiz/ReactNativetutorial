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
      <View style={{ flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: 'red',
            height: 100,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>1</Text>
        </View>
              <View
          style={{
            backgroundColor: 'blue',
            height: 100,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>2</Text>
        </View>
              <View
          style={{
            backgroundColor: 'magenta',
            height: 100,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>3</Text>
        </View>
      </View>
    </View>
  );
}
