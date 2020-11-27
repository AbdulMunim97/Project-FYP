import React from "react";
import { View, ImageBackground, StyleSheet, ScrollView } from "react-native";

import AppButton from "../components/AppButton";
import Card from "../components/Card";

function ProductsScreen({ navigation }) {
  return (
    <ImageBackground
      //blurRadius={5}
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <ScrollView
        style={{
          padding: 20,
          paddingTop: 20,
          marginBottom: 5,
        }}
      >
        <Card
          title="Shampoo"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price="500\-"
          image={require("../assets/product.jpg")}
        />
        <Card
          title="Shampoo"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price="500\-"
          image={require("../assets/product.jpg")}
        />
        {/* <View style={styles.background} style={styles.buttonContainer}>
          <AppButton
            change={() => navigation.navigate("Hair Care")}
            title="Hair Care"
            color="secondary"
          />
          <AppButton
            change={() => navigation.navigate("Skin Care")}
            title="Skin Care"
            color="primary"
          />
          <AppButton
            change={() => navigation.navigate("Beard Care")}
            title="Beard Care"
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
export default ProductsScreen;
