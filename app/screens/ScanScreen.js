import React from 'react';
import { 
  View, 
  Text,
  StyleSheet, 
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground
} from 'react-native';
import Video from 'react-native-video';

import colors from '../config/colors';
import globalStyles from '../config/styles';
import { CameraScreen } from 'react-native-camera-kit';

const ScanScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.topContainer}>
      
      </View>

      <View style={styles.header}>

        <Image style={styles.sandwhichMenu} source={require('../assets/icons/menu.png')}/>
        <Image style={styles.logo} source={require('../assets/icons/lightning-black.png')}/>
        
        <View style={styles.gemsContainer}>
          <TouchableOpacity style={styles.gemsButton}>
            <Image style={styles.gemIcon} source={require('../assets/icons/gem.png')}/>
            <Text style={styles.gemsText}> +45 | $10</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={globalStyles.cardContainer}>
        <View style={globalStyles.card}>
        </View>
      </View>

      <View style={styles.body}>
     
      </View>
    </SafeAreaView> 
  );
};


const styles = StyleSheet.create({
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

  topContainer: {
    position: "absolute",
    width: "100%",
    height: 297,
    //backgroundColor: "#000000",
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
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  header: {
    marginTop: 10,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
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

export default ScanScreen;