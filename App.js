import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import DrawerStack from "./app/navigation/DrawerStack";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Routing = () => {
  const [token, setToken] = useState("");

  AsyncStorage.getItem("jwt").then((res) => {
    setToken(res);
    console.log(res);
  });

  if (token) {
    return <DrawerStack />;
  } else {
    return <AuthNavigator />;
  }
};

export default function App() {
  return (
    <NavigationContainer>
      <Routing />
      {/* <DrawerStack /> */}
      {/* <AppNavigator /> */}
      {/* <AuthNavigator /> */}
    </NavigationContainer>
  );
}
