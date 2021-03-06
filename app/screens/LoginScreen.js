import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Image,
  View,
  TextInput,
  Text,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Formik } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/Ionicons";

import ErrorMessage from "../components/ErrorMessage";
import AppButton from "../components/AppButton";

const { width: WIDTH } = Dimensions.get("window");

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(12).label("Password"),
});

function LoginScreen({ navigation }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [invalidErr, setInvalidErr] = useState("");

  const PostData = (props) => {
    if (email === "scissorsandrazorz@gmail.com") {
      setEmailErr("Admin Panel is avaliable on Web only");
      return;
    }
    if (!password) {
      setPasswordErr("Password is Required");
    }
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      setEmailErr("Invalid Email");
      return;
    } else {
      fetch("https://sar-server.herokuapp.com/signin", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          password,
          email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setInvalidErr(data.error);
          } else {
            AsyncStorage.setItem("jwt", data.token);
            AsyncStorage.setItem("user", JSON.stringify(data.user));

            navigation.navigate("home");
          }
        });
    }
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, errors, setFieldTouched, touched }) => (
          <>
            <View>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={() => setFieldTouched("email")}
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                placeholder={"Email"}
                placeholderTextColor={"rgba(255,255,255,0.7)"}
                underlineColorAndroid="transparent"
                value={email}
                onChange={(event) => {
                  setEmail(event.nativeEvent.text);
                  setEmailErr("");
                  setInvalidErr("");
                }}
              />
              <Icon
                style={styles.inputIcons}
                name={"ios-mail"}
                size={28}
                color={"rgba(255,255,255,0.7) "}
              />
            </View>
            <View>
              <Text style={{ color: "red" }}>{emailErr}</Text>
            </View>
            <ErrorMessage error={errors.email} visible={touched.email} />
            <View>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
                placeholder={"Password"}
                secureTextEntry={true}
                placeholderTextColor={"rgba(255,255,255,0.7)"}
                underlineColorAndroid="transparent"
                value={password}
                onChange={(event) => {
                  setPassword(event.nativeEvent.text);
                  setPasswordErr("");
                }}
              />
              <Icon
                style={styles.inputIcons}
                name={"ios-lock"}
                size={28}
                color={"rgba(255,255,255,0.7) "}
              />
            </View>
            <View>
              <Text style={{ color: "red" }}>{passwordErr}</Text>
            </View>
            <ErrorMessage error={errors.password} visible={touched.password} />
            <View style={styles.loginBtn}>
              <AppButton
                title="Login"
                color="primary"
                change={() => {
                  PostData();
                }}
              />
            </View>
            <View>
              <Text style={{ color: "red" }}>{invalidErr}</Text>
            </View>

            <View style={styles.signupBtn}>
              <AppButton
                title="SignUp"
                color="secondary"
                change={() => {
                  navigation.navigate("Register");
                }}
              />
            </View>
          </>
        )}
      </Formik>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,

    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    top: 40,
    marginBottom: 60,
    backgroundColor: "rgba(0,0,0,0.65)",
    borderRadius: 10,
  },
  input: {
    width: WIDTH - 15,
    height: 45,
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0,0,0,0.65)",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25,
  },
  inputIcons: {
    position: "absolute",
    top: 8,
    left: 37,
  },

  loginBtn: {
    marginTop: 30,
    width: WIDTH - 15,
  },
  signupBtn: {
    width: WIDTH - 15,
  },
});
export default LoginScreen;
