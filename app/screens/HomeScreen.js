import React, { useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  Alert,
} from "react-native";

import HomeCard from "../components/HomeCard";

function HomeScreen({ navigation }) {
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
        <TouchableOpacity onPress={() => navigation.navigate("Deals")}>
          <HomeCard title="Deals" image={require("../assets/deals.jpg")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Products")}>
          <HomeCard title="Products" image={require("../assets/product.jpg")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Services")}>
          <HomeCard
            title="Services"
            image={require("../assets/services-.jpg")}
          />
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "80%",
  },
});
export default HomeScreen;
