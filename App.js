import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  TouchableOpacity 
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.lightning} source={require('./assets/lightning.png')}/>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightning: {
    width: 60,
    resizeMode: 'contain'
  }
});