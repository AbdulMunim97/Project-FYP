import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Image,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Formik } from 'formik';
import * as Yup from 'yup';
import Icon from "react-native-vector-icons/Ionicons";

import ErrorMessage from "../components/ErrorMessage";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

const { width: WIDTH } = Dimensions.get("window");

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(12).label("Password")
});

function LoginScreen({ navigation }) {
  return (
    <ImageBackground
      //blurRadius={5}
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
          { ({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
            <>
              <View style={styles.inputContainer}>
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
                />
                  <Icon
                  style={styles.inputIcons}
                  name={"ios-mail"}
                  size={28}
                  color={"rgba(255,255,255,0.7) "}
                />
              </View>
              <ErrorMessage error={errors.email} visible={touched.email}/>
              <View style={styles.inputContainer}>
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
                />
                <Icon
                  style={styles.inputIcons}
                  name={"ios-lock"}
                  size={28}
                  color={"rgba(255,255,255,0.7) "}
                />
                <TouchableOpacity style={styles.btnEye}>
                  <Icon name={"ios-eye"} size={26} color={"rgba(255,255,255,0.7) "} />
                </TouchableOpacity> 
              </View>
              <ErrorMessage error={errors.password} visible={touched.password}/>
              <View style={styles.loginBtn}>
                <AppButton
                  title="Login"
                  color="primary"
                  //change={handleSubmit}
                  change={() => {
                    navigation.navigate("Home");
                  }}
                />
              </View>
              {/* <AppText style={{ color: "#000"}}>Don't have an Account?</AppText> */}
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
    //justifyContent: "center",
    alignItems: "center",
    //backgroundColor: colors.medium,
  },
  logo: {
    width: 100,
    height: 100,
    top: 40,
    marginBottom: 60,
    backgroundColor: "rgba(0,0,0,0.65)",
    borderRadius: 10
  },
  input: {
    width: WIDTH -15,
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
  inputContainer: {
    marginTop: 15,  
  },
  btnEye: {
    position: "absolute",
    top: 8,
    right: 37,
  },
  loginBtn: {
    marginTop: 30,
    width: WIDTH -15,
    //paddingLeft: 10,
  },
  signupBtn: {
    width: WIDTH -15,
    //paddingLeft: 10
  }
});
export default LoginScreen;
