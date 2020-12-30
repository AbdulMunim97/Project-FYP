import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../config/colors";

import { useLinkProps } from "@react-navigation/native";

function Header({ title, navigation }) {
  return (
    <View style={styles.background}>
      <TouchableOpacity>
        <Icon
          style={styles.icon}
          name={"menu"}
          size={30}
          color={colors.black}
          //onPress={props.navigation.navigate.openDrawer()}
        />
      </TouchableOpacity>
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
    flexDirection: "row",
    position: "relative",
    top: 35,
    right: 165,
  },
});

export default Header;
