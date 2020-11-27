import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import AppText from "../components/AppText";

function DrawerContentScreen(props) {
  return (
    <View>
      <AppText></AppText>
    </View>
  );
}

export default DrawerContentScreen;
