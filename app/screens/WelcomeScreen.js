import React from 'react';
import { 
  View, 
  Text,
  StyleSheet, 
  Image,
  StatusBar,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

function WelcomeScreen(props) {
  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.background}>
        <View style={styles.logoBg}>
            <Image style={styles.logo} source={require('../assets/lightning.png')}/>
        </View>

        <View style={styles.buttonBg}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fbfbfb',
  },

  logoBg: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },

  logo: {
    width: 60,
    resizeMode: 'contain'
  },
  
  buttonBg: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },

  button: {
    width: '100%',
    height: 68,
    backgroundColor: '#121113',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 22,
    textAlign: 'center',
    justifyContent: 'center',
  }

})

export default WelcomeScreen;