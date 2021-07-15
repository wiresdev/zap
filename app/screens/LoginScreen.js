import React from 'react';
import { 
  View, 
  Text,
  StyleSheet, 
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
  SafeAreaView
} from 'react-native';

import colors from '../config/colors';

const LoginScreen = ({ navigation, route }) => {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.background}>
        <View style={styles.header}>
          <Image style={styles.logo} source={require('../assets/lightning-black.png')}/>
        </View>
        <View style={styles.body}>
          <Text style={styles.headingText}>Enter your mobile number</Text>
          <View style={styles.inputContainer}>
            <TouchableOpacity 
              style={styles.countrySelector}
            >
              <Image style={styles.leftArrow} source={require('../assets/left-arrow-black.png')}/>
            </TouchableOpacity>
            <TextInput
              style={styles.phoneInput}
              onChangeText={text => setText(text)}
              value={text}
              placeholder="(205) 555-0123"
            />
          </View>
          <Text style={styles.termsText}>By proceeding, you are consenting to receive calls or SMS messages, including by automated diialer, from Zap and its affiliates to the number you provide. You understand that you may opt out by texting "STOP" to 87203.</Text>
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

  header: {
    justifyContent: "center",
    flex: 1,
  },

  body: {
    justifyContent: "center",
    flex: 8,
  },

  logo: {
    width: "100%",
    height: 60,
    resizeMode: "contain",
  },

  headingText: {
    color: colors.foreground,
    paddingLeft: 20,
    paddingBottom: 20,
    fontSize: 20,
    fontFamily: "OpenSans-Regular",
  },

  termsText: {
    color: colors.termsText,
    paddingLeft: 20,
    paddingTop: 32,
    fontSize: 12,
    fontFamily: "OpenSans-Regular",
  },

  countrySelector: {
    flex: 3,
    height: 60,
    backgroundColor: colors.accentButton,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 12,
  },

  phoneInput: {
    flexDirection: "row",
    flex: 6,
    height: 60,
    backgroundColor: colors.textInput,
    borderRadius: 9,
    borderWidth: 2,
    alignItems: "flex-start",
    marginRight: 20,
    paddingLeft: 32,
    fontSize: 18,
    fontFamily: "OpenSans-Regular",
  },

  buttonBg: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "flex-end"
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",

  },
  
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",

  },

  backButton: {
    flex: 1,
    height: 60,
    backgroundColor: colors.accentButton,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 12
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