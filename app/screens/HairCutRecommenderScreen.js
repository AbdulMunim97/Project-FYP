import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import Header from "../components/Header";

function HairCutRecommenderScreen(props) {
  return (
    <ImageBackground
      //blurRadius={5}
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <View width={"100%"}>
        <Header title={"Haircut Recommender"} />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          // change={() => {
          //   navigation.navigate("Login");
          // }}
          title="Upload an Image"
          color="primary"
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    //padding: 20,
    width: "95%",
    marginVertical: 5,
  },
});

export default HairCutRecommenderScreen;
