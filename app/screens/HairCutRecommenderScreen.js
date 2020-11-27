import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import HomeCard from "../components/HomeCard";

function HairCutRecommenderScreen(props) {
  return (
    <ImageBackground
      //blurRadius={5}
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <HomeCard title="COMING SOON" />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    //alignItems: "center",
  },
});

export default HairCutRecommenderScreen;
