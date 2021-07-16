import React from 'react';
import { 
  View, 
  Text,
  StyleSheet, 
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView
} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import colors from '../config/colors';

const CELL_COUNT = 4;

const PhoneVerifyScreen = ({ navigation, route }) => {
  const [text, setText] = React.useState("");
  const [value, setValue] = React.useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.background}>
        <View style={styles.header}>
          <Image style={styles.logo} source={require('../assets/lightning-black.png')}/>
        </View>
        <View style={styles.body}>
          <Text style={styles.headingText}>Enter the 4-digit code sent to you at (480) 302-1113.</Text>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          <View style={styles.codeErrorContainer}>
            <TouchableOpacity style={styles.codeErrorButton}>
              <Text style={styles.codeErrorText}>I didn't receive a code</Text>
            </TouchableOpacity>
          </View>
          
        </View>

        <View style={styles.buttonBg}>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => navigation.navigate('Login')}
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
  root: {flex: 1, padding: 0},

  codeFieldRoot: {
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
  
  cell: {
    width: 60,
    height: 60,
    lineHeight: 50,
    fontSize: 32,
    borderWidth: 2,
    borderColor: '#00000030',
    backgroundColor: colors.textInput,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    marginRight: 8
  },

  focusCell: {
    borderColor: '#000',
  },

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

  inputContainer: {
    flex: 7,
    flexDirection: 'row',
    height: 60,
    backgroundColor: colors.textInput,
    borderRadius: 9,
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 12,
    fontSize: 18,
    fontFamily: "OpenSans-Regular",
  },

  phoneInput: {
    backgroundColor: colors.textInput,
    marginRight: 20,
    paddingLeft: 8,
    fontSize: 18,
    fontFamily: "OpenSans-Regular",
  },

  codeErrorContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  codeErrorButton: {
    flexDirection: "row",
    height: 32,
    backgroundColor: colors.accentButton,
    borderRadius: 32,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 14,
    paddingRight: 14,
    marginTop: 32,
    marginLeft: 20,
    marginRight: 20
  },

  codeErrorText: {
    color: colors.codeErrorText,
    fontSize: 13,
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: "OpenSans-SemiBold",
  },

  buttonBg: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "flex-end"
  },

  phoneContainer: {
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

export default PhoneVerifyScreen;