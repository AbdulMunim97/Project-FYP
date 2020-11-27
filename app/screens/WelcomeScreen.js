import React from "react";
import { ImageBackground, StyleSheet, View, Image } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
        blurRadius={5}
        style={styles.background}
        source={require("../assets/background.jpg")}
    >
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <View style={styles.buttonContainer}>
        <AppButton
          change={() => {
            navigation.navigate("Login");
          }}
          title="Login"
          color="primary"
        />
      </View>
      <AppText style={styles.noAccount}>Don't have an Account?</AppText>
      <View style={styles.buttonContainer} >
        <AppButton
          change={() => navigation.navigate("Register")}
          title="signup"
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  buttonContainer: {
    //padding: 20,
    width: "95%",
    marginVertical: 5,
  },
  logo: {
    width: 175,
    height: 175,
    position: "absolute",
    top: 30,
  },
});
export default WelcomeScreen;
