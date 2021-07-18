import { StyleSheet } from 'react-native'
import colors from '../config/colors';

const globalStyles = StyleSheet.create({
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

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: colors.background
  },

  topContainer: {
    position: "absolute",
    width: "100%",
    height: Platform.OS === 'ios' ? "38%" : "40%",
  },

  text: {
    //alignSelf: 'center',
    fontSize:40,
  },

  background: {
    flex: 1,
    backgroundColor: colors.background,
  },

  cardContainer: {
    height: 200,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    //backgroundColor: "green"
  },

  card: {
    flex: 1,
    width: "100%",
    height: "100%",
    top: 20,
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

export default globalStyles;