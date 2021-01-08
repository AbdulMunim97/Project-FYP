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
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [dateOfBirthErr, setDateOfBirthErr] = useState("");
  const [contactErr, setContactErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [invalidErr, setInvalidErr] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    setDateOfBirthErr("");
  };

  const handleDateConfirm = (date) => {
    hideDatePicker();
    setDateOfBirth(date);
    console.log(date);
  };

  const PostData = () => {
    if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name)) {
      setNameErr("Invalid Name");
    }
    if (!dateOfBirth) {
      setDateOfBirthErr("Date Of Birth Is empty");
    }
    if (!/^-?\d+\.?\d*$/.test(contact)) {
      setContactErr("Invalid Number");
    }

    if (!password) {
      setPasswordErr("Please Enter your Password");
    }
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      setEmailErr("Invalid Email");
      return;
    } else {
      fetch("https://sar-server.herokuapp.com/signup", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          dateOfBirth,
          contact,
          password,
          email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setInvalidErr(data.error);
          } else {
            navigation.navigate("Login");
          }
        });
    }
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
            value={name}
            onChange={(event) => {
              setName(event.nativeEvent.text);
              setNameErr("");
            }}
          ></TextInput>
          <Icon
            style={styles.inputIcons}
            name={"ios-person"}
            size={28}
            color={"rgba(255,255,255,0.7) "}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "red" }}>{nameErr}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Email"}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
            value={email}
            onChange={(event) => {
              setEmail(event.nativeEvent.text);
              setEmailErr("");
              setInvalidErr("");
            }}
          ></TextInput>
          <Icon
            style={styles.inputIcons}
            name={"ios-mail"}
            size={28}
            color={"rgba(255,255,255,0.7) "}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "red" }}>{emailErr}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Password"}
            secureTextEntry={true}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
            value={password}
            onChange={(event) => {
              setPassword(event.nativeEvent.text);
              setPasswordErr("");
            }}
          ></TextInput>
          <Icon
            style={styles.inputIcons}
            name={"ios-lock"}
            size={28}
            color={"rgba(255,255,255,0.7) "}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "red" }}>{passwordErr}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Phone Number"}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
            value={contact}
            onChange={(event) => {
              setContact(event.nativeEvent.text);
              setContactErr("");
            }}
          ></TextInput>
          <Icon
            style={styles.inputIcons}
            name={"ios-contact"}
            size={28}
            color={"rgba(255,255,255,0.7) "}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "red" }}>{contactErr}</Text>
        </View>
        <View style={styles.inputContainer}>
          <Pressable
            style={styles.input}
            placeholder={"Date of Birth"}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
            value={dateOfBirth}
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
        <View style={styles.inputContainer}>
          <Text style={{ color: "red" }}>{dateOfBirthErr}</Text>
        </View>

        <View style={styles.signupBtn}>
          <AppButton
            change={() => {
              PostData();
            }}
            title="SignUP"
            color="secondary"
          />
        </View>
        <View>
          <Text style={{ color: "red" }}>{invalidErr}</Text>
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
    // marginTop: 15,
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
