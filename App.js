import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './app/screens/LoginScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import VerifyScreen from './app/screens/VerifyScreen';
import HomeScreen from './app/screens/HomeScreen';
import ScanScreen from './app/screens/ScanScreen';
import CartScreen from './app/screens/CartScreen';
import TabBar from './app/components/TabBar';

const Stack = createStackNavigator();

function TabHome({navigation}) {
  return (
    <TabBar />
  );
}

const Drawer = createDrawerNavigator();

function DrawerHome({navigation}) {
  return (
    <Drawer.Navigator initialRouteName="DrawerHome">
      <Drawer.Screen name="Test" component={TabHome} />
    </Drawer.Navigator>
  );
}

function App() {  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="PhoneVerify" component={VerifyScreen} />
        <Stack.Screen name="Home" component={DrawerHome}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;