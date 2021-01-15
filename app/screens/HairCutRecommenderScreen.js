import React, { useState, useEffect } from "react";

import {
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";

import AppButton from "../components/AppButton";
import Header from "../components/Header";

function HairCutRecommenderScreen(props) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <ImageBackground
      //blurRadius={5}
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <View width={"100%"}>
        <Header title={"Haircut Recommender"} />
      </View>
      <ScrollView
        style={{
          padding: 20,
          paddingTop: 20,
          marginBottom: 5,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              padding: 10,
            }}
          >
            Find Hairstyles
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton title="Pick Image" color="primary" change={pickImage} />
        </View>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <View style={{ width: "60%", alignItems: "center", left: 50 }}>
          <AppButton title="Find Now" color="primary" />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              padding: 10,
            }}
          >
            Your Face shape is:
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              padding: 10,
            }}
          >
            Triangle
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#000",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              padding: 5,
              height: 35,
              marginVertical: 10,
              width: "70%",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 15,
                fontFamily: "Roboto",
                textTransform: "uppercase",
                fontWeight: "normal",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Pick another Image
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "normal",
              padding: 10,
            }}
          >
            Recommended Hairstyles for you:
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/background.jpg")}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/background.jpg")}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/background.jpg")}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/background.jpg")}
          />
        </View>
      </ScrollView>
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
    //marginVertical: 5,
  },
  imageContainer: {
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.65)",
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});

export default HairCutRecommenderScreen;
