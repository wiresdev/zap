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

import colors from '../config/colors';

const LoginScreen = ({ navigation, route }) => {
  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.background}>
        <View style={styles.body}>
          <Image style={styles.logo} source={require('../assets/logo-black.png')}/>
          
        </View>

        <View style={styles.buttonBg}>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => navigation.navigate('Welcome')}
            >
              <Image style={styles.leftArrow} source={require('../assets/left-arrow-black.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Next</Text>
              <Image style={styles.rightArrow} source={require('../assets/right-arrow-white.png')}/>
            </TouchableOpacity>
          </View>
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

  body: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: "100%",
    height: 75,
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
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "flex-end"
  },
  
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",

  },

  backButton: {
    flex: 1,
    height: 60,
    backgroundColor: colors.backButton,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 16
  },

  button: {
    flexDirection: "row",
    flex: 3,
    height: 60,
    backgroundColor: colors.button,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  },

  buttonText: {
    color: colors.buttonText,
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: "OpenSans-SemiBold",
    //fontWeight: "600"
  },

  rightArrow: {
    position: "absolute",
    right: 20,
    width: 24,
    height: 18
  },

  leftArrow: {
    width: 24,
    height: 18
  }
})

export default LoginScreen;