import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './app/screens/LoginScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import VerifyScreen from './app/screens/VerifyScreen';
import HomeScreen from './app/screens/HomeScreen';
import ScanScreen from './app/screens/ScanScreen';
import CartScreen from './app/screens/CartScreen';
import TabBar from './app/screens/TabBar';

const Stack = createStackNavigator();

function Home() {
  return (
    <TabBar />
  );
}

function App() {  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="PhoneVerify" component={VerifyScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;