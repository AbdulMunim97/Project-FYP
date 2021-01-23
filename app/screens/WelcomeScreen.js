import React from "react";
import { useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  BackHandler,
  Alert,
} from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

function WelcomeScreen({ navigation }) {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Do you want to Exit?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

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
      <View style={styles.buttonContainer}>
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
