import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Text,
  ImageBackground,
} from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";
import Header from "../components/Header";
import AppNavigator from "../navigation/AppNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width: WIDTH } = Dimensions.get("window");

function AddReviewScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [titleErr, setTitleErr] = useState("");
  const [bodyErr, setBodyErr] = useState("");

  const postReview = () => {
    if (!title) {
      setTitleErr("Add Title");
    }
    if (!body) {
      setBodyErr("Add Body");
      return;
    } else {
      AsyncStorage.getItem("jwt").then((res) => {
        fetch("https://sar-server.herokuapp.com/addreview", {
          method: "post",
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + res,
          },
          body: JSON.stringify({
            title,
            body,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.error) {
              alert(data.error);
            } else {
              navigation.navigate("My Reviews");
              setTitle("");
              setBody("");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }
  };

  return (
    <ImageBackground
      //blurRadius={5}
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <View width={"100%"}>
        <Header title={"Review"} />
      </View>
      <View style={{ marginTop: "17%" }}>
        <TextInput
          style={styles.inputTitle}
          autoCapitalize="sentences"
          autoCorrect={true}
          placeholder={"Title"}
          placeholderTextColor={"rgba(255,255,255,0.7)"}
          underlineColorAndroid="transparent"
          value={title}
          onChange={(e) => {
            setTitle(e.nativeEvent.text);
            setTitleErr("");
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={{ color: "red" }}>{titleErr}</Text>
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
          value={body}
          onChange={(e) => {
            setBody(e.nativeEvent.text);
            setBodyErr("");
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={{ color: "red" }}>{bodyErr}</Text>
      </View>
      <View style={styles.AddBtn}>
        <AppButton
          title="ADD"
          color="primary"
          change={() => {
            postReview();
          }}
        />
      </View>
      <View>
        <AppNavigator />
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
    // marginTop: 25,
  },
  AddBtn: {
    width: "98%",
    padding: 20,
  },
});

export default AddReviewScreen;
