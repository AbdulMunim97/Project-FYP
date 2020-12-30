import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, ScrollView } from "react-native";

import AppButton from "../components/AppButton";
import Card from "../components/Card";

function ProductsScreen({ navigation }) {
  const [skin, setSkin] = useState([]);
  const [hair, setHair] = useState([]);
  const [beard, setBeard] = useState([]);

  useEffect(() => {
    fetch("http://192.168.100.13:5000/allskincare")
      .then((res) => res.json())
      .then((result) => {
        setSkin(result);
      })
      .catch((error) => console.log(error));
    fetch("http://192.168.100.13:5000/allhaircare")
      .then((res) => res.json())
      .then((result) => {
        setHair(result);
      })
      .catch((error) => console.log(error));
    fetch("http://192.168.100.13:5000/allbeardcare")
      .then((res) => res.json())
      .then((result) => {
        setBeard(result);
      })
      .catch((error) => console.log(error));
  }, []);
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
        {skin.map((item) => {
          return (
            <Card
              key={item._id}
              title={item.title}
              description={item.body}
              price={item.price}
              image={{ uri: item.photo }}
            />
          );
        })}
        {hair.map((item) => {
          return (
            <Card
              key={item._id}
              title={item.title}
              description={item.body}
              price={item.price}
              image={{ uri: item.photo }}
            />
          );
        })}
        {beard.map((item) => {
          return (
            <Card
              key={item._id}
              title={item.title}
              description={item.body}
              price={item.price}
              image={{ uri: item.photo }}
            />
          );
        })}
        {/* <Card
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
        /> */}
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
