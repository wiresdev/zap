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
  const [text, onChangeText] = React.useState("(205) 555-0123");

  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.background}>
        <View style={styles.body}>
          <Text style={styles.headingText}>Enter you mobile number</Text>
          <View style={styles.inputContainer}>
            <TouchableOpacity 
              style={styles.countrySelector}
            >
              <Image style={styles.leftArrow} source={require('../assets/left-arrow-black.png')}/>
            </TouchableOpacity>
            <TextInput
              style={styles.phoneInput}
              value={text}
              placeholder="(205) 555-0123"
            />
          </View>
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
    justifyContent: "center",
    flex: 8,
  },

  headingText: {
    color: colors.foreground,
    paddingLeft: 20,
    paddingBottom: 12,
    fontSize: 20,
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
    paddingLeft: 12,
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