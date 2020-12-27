import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../config/colors";
import AppText from "../components/AppText";

function Header({ title }) {
  return (
    <View style={styles.background}>
      <AppText style={styles.title}>{title}</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "flex-end",
    height: 75,
    width: "100%",
  },
  title: {
    fontSize: 20,
    paddingBottom: 15,
  },
  icon: {
    flexDirection: "row",
  },
});

export default Header;
