import React, { useState, useEffect } from "react";
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
import Header from "../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Icon from "react-native-vector-icons/Ionicons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import AppButton from "../components/AppButton";

const { width: WIDTH } = Dimensions.get("window");

function EditProfileScreen({ navigation }) {
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

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [contactErr, setContactErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("jwt").then((res) => {
      fetch("https://sar-server.herokuapp.com/userdata", {
        method: "get",
        headers: {
          Authorization: "Bearer " + res,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setId(result[0]._id);
          setName(result[0].name);
          setEmail(result[0].email);
          setContact("0" + result[0].contact);
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);

  const updateProfile = () => {
    if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name)) {
      setNameErr("Invalid Name");
    }

    if (!/^-?\d+\.?\d*$/.test(contact)) {
      setContactErr("Invalid Number");
    }

    if (!password) {
      setPasswordErr("Please Enter your Password");
      return;
    } else {
      AsyncStorage.getItem("jwt").then((res) => {
        fetch("https://sar-server.herokuapp.com/updateprofile", {
          method: "put",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + res,
          },
          body: JSON.stringify({
            id,
            name,
            email,
            contact,
            password,
          }),
        })
          .then((res) => res.json())
          .then((result) => {
            // localStorage.clear();
            // dispatch({ type: "CLEAR" });
            // history.push("/signin");

            console.log(result);
            navigation.navigate("Home");
          })

          .catch((err) => {
            console.log(err);
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
        <Header title={"Edit Profile"} />
      </View>
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
          ></TextInput>
          <Icon
            style={styles.inputIcons}
            name={"ios-mail"}
            size={28}
            color={"rgba(255,255,255,0.7) "}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "red" }}>{}</Text>
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
        {/* <View style={styles.inputContainer}>
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
        </View> */}
        {/* <View style={styles.signupBtn}>
          <AppButton
            // change={() => {
            //   navigation.navigate("Login");
            // }}
            title=""
            color="Primary"
          />
        </View> */}
        <View style={styles.loginBtn}>
          <AppButton
            title="Edit Profile"
            color="primary"
            change={() => {
              updateProfile();
              // navigation.navigate("Login");
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
    paddingTop: 60,
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
export default EditProfileScreen;
