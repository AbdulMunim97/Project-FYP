import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../config/colors";
import AppText from "../components/AppText";

function Header({ title, navigation }) {
  return (
    <View style={styles.background}>
      <View>
        <TouchableOpacity>
          <Icon
            style={styles.icon}
            name={"menu"}
            size={30}
            color={colors.black}
            onPress={() => navigation.openDrawer()}
          />
        </TouchableOpacity>
      </View>
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
    fontWeight: "600",
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
