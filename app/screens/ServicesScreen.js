import React from "react";
import { ImageBackground, StyleSheet, View, ScrollView } from "react-native";

import AppButton from "../components/AppButton";
import ServiceCard from "../components/ServiceCard";

function ServicesScreen({ navigation }) {
  return (
    <ImageBackground
      //blurRadius={5}
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <ScrollView
        style={{
          padding: 10,
          paddingTop: 10,
          marginBottom: 5,
        }}
      >
        <ServiceCard
          title="Face Polsih"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price="Rupees 500\-"
        />
        <ServiceCard
          title="Facial"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price="Rupees 2500\-"
        />
        <ServiceCard
          title="Black Mask"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price="Rupees 800\-"
        />
        <ServiceCard
          title="Threading"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price="Rupees 250\-"
        />
        {/* <View style={styles.background} style={styles.buttonContainer}>
          <AppButton
            change={() => navigation.navigate("Deals")}
            title="Deals"
            color="primary"
          />
          <AppButton
            change={() => navigation.navigate("Hair Services")}
            title="Hair Services"
            color="secondary"
          />
          <AppButton
            change={() => navigation.navigate("Skin Services")}
            title="Skin Services"
            color="primary"
          />
          <AppButton
            change={() => navigation.navigate("Beard Services")}
            title="Beard Services"
            color="secondary"
          />
        </View> */}
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
  buttonContainer: {
    padding: 20,
    width: "80%",
  },
});
export default ServicesScreen;
