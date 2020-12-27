import React from "react";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import ServiceCard from "../components/ServiceCard";
import Header from "../components/Header";

function MyReviewsScreen(props) {
  return (
    <ImageBackground
      //blurRadius={5}
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <Header title={"My Reviews"} />
      <ScrollView
        style={{
          padding: 20,
          paddingTop: 20,
          marginBottom: 5,
        }}
      >
        <ServiceCard
          title="Service: Haircut"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price="Review:"
        />
        <ServiceCard
          title="Beard Trimming"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price="Review:"
        />
        <ServiceCard
          title="Service: Facial"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price="Review:"
        />
        <ServiceCard
          title="Service: Clean shave"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price="Review:"
        />
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyReviewsScreen;
