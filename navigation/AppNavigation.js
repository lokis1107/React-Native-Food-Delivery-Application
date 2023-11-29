import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Restaurant from "../screens/Restaurant";
import Cart from "../screens/Cart";
import OrderPrepare from "../screens/OrderPrepare";
import Delivery from "../screens/Delivery";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Restaurant"
          component={Restaurant}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false, presentation: "modal" }}
        />
        <Stack.Screen
          name="Prepare"
          component={OrderPrepare}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Delivery"
          component={Delivery}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
