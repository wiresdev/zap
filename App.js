import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  console.log("App executed2")


  return (
    <View style={styles.container}>
      <Text>Hello React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});