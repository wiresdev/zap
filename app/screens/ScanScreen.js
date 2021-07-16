import React from 'react';
import { 
  View, 
  Text,
  StyleSheet, 
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

import colors from '../config/colors';

const ScanScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.background}>
        <View style={styles.header}>

          <Image style={styles.sandwhichMenu} source={require('../assets/icons/menu.png')}/>
          <Image style={styles.logo} source={require('../assets/icons/lightning-black.png')}/>
          
          <View style={styles.gemsContainer}>
            <TouchableOpacity style={styles.gemsButton}>
              <Image style={styles.gemIcon} source={require('../assets/icons/gem.png')}/>
              <Text style={styles.gemsText}> +450 | $10</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.body}>
          <Text style={styles.text}>SCAN</Text>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => navigation.navigate('PhoneVerify')}
            >
              <Image style={styles.leftArrow} source={require('../assets/icons/left-arrow-black.png')}/>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView> 
  );
};


const styles = StyleSheet.create({
  header: {
    //flex: 1,
    marginTop: 10,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    //backgroundColor: "#dddddd"
  },

  logo: {
    width: "100%",
    height: 32,
    resizeMode: "contain",
  },

  sandwhichMenu: {
    position: "absolute",
    left: 20,
    width: 22,
    height: 18
  },

  gemsContainer: {
    position: "absolute",
    right: 20,
    resizeMode: "contain",
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  gemsButton: {
    flexDirection: "row",
    height: 40,
    backgroundColor: colors.accentButton,
    borderRadius: 32,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 12,
    paddingRight: 14,
  },

  gemIcon: {
    //left: 14,
    width: 22,
    height: 20
  },

  gemsText: {
    color: colors.foreground,
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: "OpenSans-Bold",
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: colors.background
  },

  text: {
    //alignSelf: 'center',
    fontSize:40,
  },

  background: {
    flex: 1,
    backgroundColor: colors.background,
  },

  body: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  buttonBg: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "flex-end"
  },

  headingText: {
    color: colors.foreground,
    paddingLeft: 20,
    paddingBottom: 20,
    fontSize: 20,
    fontFamily: "OpenSans-Regular",
  },
  
  buttonsContainer: {
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
    marginRight: 20
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
  },
})

export default ScanScreen;