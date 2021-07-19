import React from 'react';
import { 
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
  Platform,
  SafeAreaView
} from 'react-native';

import colors from '../config/colors';


const CardHeading = () => {
  return (
    <SafeAreaView>
      <View style={styles.backgroundImage}>
        <ImageBackground source={require('../assets/images/gradient.png')} resizeMode="cover" style={styles.image}></ImageBackground>
      </View>
      <View style={styles.cardHeadingContainer}>
      <StatusBar
        translucent={true}
        backgroundColor={colors.fullyTranslucent} 
        barStyle="dark-content"/>

      <SafeAreaView>
        <View style={styles.header}>
          <Image style={styles.sandwhichMenu} source={require('../assets/icons/menu.png')}/>
          <Image style={styles.logo} source={require('../assets/icons/lightning-black.png')}/>
        </View>
      </SafeAreaView>

      <View style={styles.cardContainer}>
        <View style={styles.card} />
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardHeadingContainer: {
  },

  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: Platform.OS === 'ios' ? 256 : 236,
  },

  header: {
    marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },

  cardContainer: {
    height: 200,
    paddingTop: 10,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  card: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 32,

    elevation: 1,
    backgroundColor: "#ffffff",
    //backgroundColor: "green",
  },

  image: {
    flex: 1,
    justifyContent: "center"
  },

  backgroundVideo: {
    flex: 1,
    justifyContent: "center",
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  bodyHeader: {
    //color: colors.foreground,
    paddingLeft: 20,
    paddingBottom: 12,
    fontSize: 24,
    alignSelf: "flex-start",
    fontFamily: "OpenSans-Regular",
  },

  bodyText: {
    color: colors.termsText,
    paddingLeft: 20,
    paddingBottom: 150,
    fontSize: 14,
    alignSelf: "flex-start",
    fontFamily: "OpenSans-Regular",
  },

  body: {
    flex: 1,
    paddingTop: 60,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
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
    backgroundColor: colors.gemButton,
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

  buttonBg: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "flex-end"
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

export default CardHeading;