import React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../config/colors";

function Header({ title, change }) {
  return (
    <View style={styles.background}>
      <Pressable
        style={styles.icon}
        // onPress={change}
      >
        <Icon name={"menu"} size={30} color={colors.black} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
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
    color: colors.white,
    fontSize: 20,
    fontWeight: "700",
    paddingBottom: 13,
    flexDirection: "column",
  },
  icon: {
    top: "45%",
    right: "46%",
  },
});

export default Header;
