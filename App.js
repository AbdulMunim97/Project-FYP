import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import DrawerStack from "./app/navigation/DrawerStack";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerStack />
      {/* <AppNavigator /> */}
      {/* <AuthNavigator /> */}
    </NavigationContainer>
  );
}
