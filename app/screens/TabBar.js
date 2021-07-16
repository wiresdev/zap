import React from 'react';
import { 
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image, 
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreen from './CartScreen';
import HomeScreen from './HomeScreen';
import ScanScreen from './ScanScreen';

import colors from '../config/colors';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: styles.tabBar
      }}  
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image 
                source={focused ? require("../assets/home.png") : require("../assets/home-empty.png")}
                style={styles.home}
              />
            </View>
          ),
      }}/>
      <Tab.Screen name="Scan" component={ScanScreen} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image 
                source={focused ? require("../assets/scan.png") : require("../assets/scan-empty.png")}
                style={styles.scan}
              />
            </View>
          ),
      }}/>
      <Tab.Screen name="Cart" component={CartScreen} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image 
                source={focused ? require("../assets/cart.png") : require("../assets/cart-empty.png")}
                style={styles.cart}
              />
            </View>
          ),
      }}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
      backgroundColor: colors.background,
      height: 90
  },

  home: {
    width: 30,
    resizeMode: "contain",
  },

  scan: {
    width: 32,
    resizeMode: "contain",
  },

  cart: {
    width: 34,
    resizeMode: "contain",
  },

})

export default TabBar;