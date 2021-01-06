import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  ScrollView,
  View,
  TextInput,
  Dimensions,
  Text,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import AppButton from "../components/AppButton";

const { width: WIDTH } = Dimensions.get("window");

function RegisterScreen({ navigation }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  return (
    <ImageBackground
      //blurRadius={5}
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Username"}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
          ></TextInput>
          <Icon
            style={styles.inputIcons}
            name={"ios-person"}
            size={28}
            color={"rgba(255,255,255,0.7) "}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Email"}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
          ></TextInput>
          <Icon
            style={styles.inputIcons}
            name={"ios-mail"}
            size={28}
            color={"rgba(255,255,255,0.7) "}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Password"}
            secureTextEntry={true}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
          ></TextInput>
          <Icon
            style={styles.inputIcons}
            name={"ios-lock"}
            size={28}
            color={"rgba(255,255,255,0.7) "}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Phone Number"}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
          ></TextInput>
          <Icon
            style={styles.inputIcons}
            name={"ios-contact"}
            size={28}
            color={"rgba(255,255,255,0.7) "}
          />
        </View>
        <View style={styles.inputContainer}>
          <Pressable
            style={styles.input}
            placeholder={"Date of Birth"}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
            onPress={showDatePicker}
          >
            <Text style={styles.text}>Date Of Birth</Text>
          </Pressable>
          <Icon
            style={styles.inputIcons}
            name={"ios-calendar"}
            size={28}
            color={"rgba(255,255,255,0.7) "}
          />
        </View>
        <View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            datePickerModeAndroid={"spinner"}
            minimumDate={new Date(1965, 1, 1)}
            maximumDate={new Date(2011, 1, 1)}
            date={new Date()}
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
          />
        </View>
        <View style={styles.signupBtn}>
          <AppButton
            change={() => {
              navigation.navigate("Login");
            }}
            title="SignUP"
            color="secondary"
          />
        </View>
        {/* <AppText style={{ paddingLeft: 65, marginBottom: -10}}>Already have an Account?</AppText> */}
        <View style={styles.loginBtn}>
          <AppButton
            title="Login"
            color="primary"
            change={() => {
              navigation.navigate("Login");
            }}
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
    //alignItems: "center",
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
  inputContainer: {
    marginTop: 15,
    top: 30,
  },
  btnEye: {
    position: "absolute",
    top: 8,
    right: 37,
  },
  loginBtn: {
    width: WIDTH - 15,
    //paddingTop: -100
  },
  signupBtn: {
    marginTop: 50,
    width: WIDTH - 15,
    //paddingLeft: 10,
  },
  text: {
    fontSize: 16,
    color: "rgba(255,255,255,0.7)",
    paddingTop: 10,
  },
});
export default RegisterScreen;
