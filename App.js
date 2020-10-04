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
      <View 
        style={{ 
          flexDirection: 'row',
          width: '80%', 
          height: 300,
          justifyContent: 'space-between',
          alignItems: 'stretch' }}
          >
        <View
          style={{
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
          }}
        >
          <Text>1</Text>
        </View>
              <View
          style={{
            backgroundColor: 'orange',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 2
          }}
        >
          <Text>2</Text>
        </View>
              <View
          style={{
            backgroundColor: 'red',
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
