import React from 'react';
import { 
  View, 
  Text,
  StyleSheet, 
  Image,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground
} from 'react-native';

import colors from '../config/colors';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.background}>
        <SafeAreaView style={styles.background}>
        <View style={styles.header}>
          </View>
          <View style={styles.body}>
            <Image style={styles.logo} source={require('../assets/icons/logo-black.png')}/>
            <Image style={styles.welcomeImage} source={require('../assets/images/welcome-image-noborder.png')}/>
            <Image style={styles.welcomeDesc} source={require('../assets/images/welcome-desc.png')}/>
          </View>

          <View style={styles.buttonBg}>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.buttonText}>Get Started</Text>
              <Image style={styles.arrow} source={require('../assets/icons/right-arrow-white.png')}/>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },

  imageBackground: {
    flex: 1,
    //backgroundColor: colors.background,
  },

  header: {
    justifyContent: "center",
    flex: 1,
  },

  body: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -70
  },

  logo: {
    width: "100%",
    height: 60,
    resizeMode: "contain"
  },

  welcomeImage: {
    width: 300,
    height: 300,
    marginTop: 20,
    marginBottom: 40
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
    flexDirection: "row",
    width: '100%',
    height: 60,
    backgroundColor: colors.button,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: colors.buttonText,
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: "OpenSans-SemiBold",
    //fontWeight: "600"
  },

  arrow: {
    position: "absolute",
    right: 20,
    width: 24,
    height: 18
  }

})

export default WelcomeScreen;