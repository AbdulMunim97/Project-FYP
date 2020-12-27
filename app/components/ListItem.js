import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({ title, subTitle, name }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subTitle}>{subTitle}</AppText>
      <AppText style={styles.subTitle}>{name}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 5,
    marginBottom: 5,
    flexDirection: "row",
    padding: 20,
    backgroundColor: colors.backgroundColor,
    justifyContent: "center",
    alignItems: "center",
  },
  // image: {
  //   width: 70,
  //   height: 70,
  //   borderRadius: 35,
  //   marginRight: 10,
  // },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    padding: 5,
    color: colors.color,
  },
});

export default ListItem;
