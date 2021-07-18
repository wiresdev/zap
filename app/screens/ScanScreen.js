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
import { Camera, CameraScreen, CameraType } from 'react-native-camera-kit';

const ScanScreen = ({ navigation, route }) => {
  
  return (
    <SafeAreaView style={styles.background}>
      <View style={globalStyles.topContainer}>
        <ImageBackground source={require('../assets/images/gradient.png')} resizeMode="cover" style={styles.image}></ImageBackground>
      </View>

      <View style={styles.header}>

        <Image style={styles.sandwhichMenu} source={require('../assets/icons/menu.png')}/>
        <Image style={styles.logo} source={require('../assets/icons/lightning-black.png')}/>
        
        <View style={styles.gemsContainer}>
          
        </View>

      </View>

      <View style={globalStyles.cardContainer}>
        <View style={globalStyles.card}>
        </View>
      </View>

      <View style={styles.body}>
        <Camera
          style={styles.scanner}
          hideControls={false} // (default false) optional, hides camera controls
          showCapturedImageCount={false} // (default false) optional, show count for photos taken during that capture session
          // Barcode props
          scanBarcode={true}
          cameraType={CameraType.Back}
          onReadCode={(event) => Alert.alert('QR code found')} // optional
          showFrame={false} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
          laserColor='red' // (default red) optional, color of laser in scanner frame
          frameColor='white' // (default white) optional, color of border of scanner frame
        />
      </View>
    </SafeAreaView> 
  );
};


const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 60,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 40
    //backgroundColor: "#444444"
  },

  scanner: {
    height: "100%",
    width: "100%",
    alignSelf: "center"
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