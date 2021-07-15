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
        <View style={styles.body}>
          <Image style={styles.logo} source={require('../assets/logo-black.png')}/>
          <Image style={styles.welcomeImage} source={require('../assets/welcome-image.jpg')}/>
          <Image style={styles.welcomeDesc} source={require('../assets/welcome-desc.png')}/>
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
    backgroundColor: '#f4f8fb',
  },

  body: {
    flex: 8,
    //backgroundColor: '#444444',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 100,
    height: 50,
  },

  welcomeImage: {
    width: 300,
    height: 300,
    marginTop: 20,
    marginBottom: 30
  },

  welcomeDesc: {
    width: 280,
    height: 70,
  },
  
  buttonBg: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    justifyContent: 'flex-end'
  },

  button: {
    width: '100%',
    height: 60,
    backgroundColor: '#000000',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: "OpenSans-SemiBold",
    //fontWeight: "600"
  }

})

export default WelcomeScreen;