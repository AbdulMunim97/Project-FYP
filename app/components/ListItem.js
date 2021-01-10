import React from "react";
import { View, StyleSheet, Button, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({ title, subTitle, name, iconFunction }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subTitle}>{subTitle}</AppText>
      <AppText style={styles.subTitle}>{name}</AppText>
      <TouchableOpacity onPress={iconFunction}>
        {/* <Button style={styles.icon} title="">
          <Icon name={"delete"} size={30} color={colors.black} />
        </Button> */}
        <Icon name={"delete"} size={30} color={colors.primary} />
      </TouchableOpacity>
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
  title: {
    fontWeight: "500",
  },
  subTitle: {
    padding: 5,
    color: colors.color,
  },
  icon: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 45,
    marginVertical: 10,
    width: "15%",
  },
});

export default ListItem;
