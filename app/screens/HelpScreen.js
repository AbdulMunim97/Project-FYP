import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";

import AppText from "../components/AppText";
import Header from "../components/Header";
import colors from "../config/colors";

function HelpScreen({ navigation }) {
  return (
    <ImageBackground
      //blurRadius={5}
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <View>
        <Header title={"Help"} />
      </View>
      <View style={styles.textContainer}>
        <AppText style={styles.textContact}>Contact Us</AppText>
        <AppText>Email: scissorsandrazors@gmail.com</AppText>
        <AppText>Phone#: 0300-1234567</AppText>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    //alignItems: "center",
  },
  textContainer: {
    padding: 20,
    backgroundColor: colors.backgroundColor,
  },
  textContact: {
    fontSize: 25,
  },
});
export default HelpScreen;
