import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { ExampleOne } from './src/components';

export default function App() {
  const { width, height } = Dimensions.get('window')

  return (
    <View style={styles.container}>
      <Image 
      source={{uri: 'https://images.unsplash.com/photo-1574724713425-fee7e2eacf84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1312&q=80'}}
      style={{width, height}}/>
      <ExampleOne/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
