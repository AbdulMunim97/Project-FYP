import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  ImageBackground,
} from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import Header from "../components/Header";

const { width: WIDTH } = Dimensions.get("window");

function AddReviewScreen({ navigation }) {
  return (
    <ImageBackground
      //blurRadius={5}
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <View width={"100%"}>
        <Header title={"Review"} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputTitle}
          autoCapitalize="sentences"
          autoCorrect={true}
          placeholder={"Title"}
          placeholderTextColor={"rgba(255,255,255,0.7)"}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          autoCapitalize="sentences"
          autoCorrect={true}
          multiline={true}
          placeholder={"Write Review"}
          placeholderTextColor={"rgba(255,255,255,0.7)"}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.AddBtn}>
        <AppButton
          title="ADD"
          color="primary"
          //change
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: "center",
    //justifyContent: "center",
  },
  inputTitle: {
    width: WIDTH - 50,
    height: 45,
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 10,
    backgroundColor: "rgba(0,0,0,0.65)",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 20,
  },
  input: {
    width: WIDTH - 50,
    height: 150,
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 10,
    backgroundColor: "rgba(0,0,0,0.65)",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 20,
  },
  inputContainer: {
    marginTop: 25,
  },
  AddBtn: {
    width: "98%",
    padding: 20,
  },
});

export default AddReviewScreen;
