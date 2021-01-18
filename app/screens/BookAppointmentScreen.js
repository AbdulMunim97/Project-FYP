import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";

import { Picker } from "@react-native-picker/picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppButton from "../components/AppButton";
import Header from "../components/Header";
import { useIsFocused } from "@react-navigation/native";

function BookAppointmentScreen({ navigation }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [employees, setEmployees] = useState([]);
  const [barber, setBarber] = useState("");
  const [dateErr, setDateErr] = useState("");
  const [timeErr, setTimeErr] = useState("");
  const [barberErr, setBarberErr] = useState("");
  const [bookedErr, setBookedErr] = useState("");
  const isFocused = useIsFocused();
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    hideDatePicker();
    setDate(date);
    setDateErr("");
  };
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    // console.warn("A Time has been picked: ", time);
    hideTimePicker();
  };

  const timeArray = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
  ];
  // const array2 = ["9:00 AM", "10:00 AM", "11:00 AM"];
  // const barberArray = ["Nomi (Signature)", "Zeeshan", "Ali", "Munim"];

  // const printDate = () => {
  //   let difference = time.filter((x) => !timeArray.includes(x));
  //   setTime(difference);
  // };

  async function getEmployees(token) {
    await fetch("https://sar-server.herokuapp.com/allemployee", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setEmployees(result);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    AsyncStorage.getItem("jwt").then((res) => {
      getEmployees(res);
    });
  }, [isFocused]);

  const bookAppointment = () => {
    if (!date) {
      setDateErr("Kindly select a date");
    }
    if (!time) {
      setTimeErr("Select a Time slot");
    }
    if (!barber) {
      setBarberErr("kindly Select a Barber");
      return;
    } else {
      AsyncStorage.getItem("jwt").then((res) => {
        fetch("https://sar-server.herokuapp.com/bookappointment", {
          method: "post",
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + res,
          },
          body: JSON.stringify({
            date,
            time,
            barber,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.error) {
              setBookedErr(data.error);
            } else {
              setDate("");
              setTime("");
              setBarber("");
              alert(
                "Appointment Booked.. You can check your appointments in My Appointment Page"
              );
              navigation.navigate("Home");
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
        <Header title={"Book Appointment"} />
      </View>
      <View style={{ alignItems: "center", padding: 15 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 22,
          }}
        >
          Select a Date
        </Text>
      </View>
      <View style={styles.pickerContainer}>
        <TouchableOpacity style={styles.input} onPress={showDatePicker}>
          <Text style={styles.text}>
            {date ? date.toString().slice(0, 15) : " Select a Date"}
          </Text>
        </TouchableOpacity>
        <Icon
          style={styles.inputIcons}
          name={"ios-calendar"}
          size={28}
          color={"rgba(255,255,255,0.7) "}
        />
      </View>
      <View>
        <Text style={{ color: "red" }}>{dateErr}</Text>
      </View>
      <View style={{ alignItems: "center", padding: 15 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 22,
          }}
        >
          Select a Barber
        </Text>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={barber}
          style={{ color: "rgba(255,255,255,0.7)" }}
          onValueChange={(itemValue, itemIndex) => {
            setBarber(itemValue);
            setBarberErr("");
          }}
        >
          <Picker.Item label="Select a barber" value="" />

          {employees.map((item) => {
            return (
              <Picker.Item key={item._id} label={item.name} value={item.name} />
            );
          })}
        </Picker>
      </View>
      <View>
        <Text style={{ color: "red" }}>{barberErr}</Text>
      </View>
      <View style={{ alignItems: "center", padding: 15 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 22,
          }}
        >
          Select a TimeSlot
        </Text>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={time}
          style={{ color: "rgba(255,255,255,0.7)" }}
          onValueChange={(itemValue, itemIndex) => {
            setTime(itemValue);
            setTimeErr("");
          }}
        >
          <Picker.Item label="Select Time" value="" />

          {timeArray.map((item) => {
            return <Picker.Item key={item} label={item} value={item} />;
          })}
        </Picker>
      </View>
      <View>
        <Text style={{ color: "red" }}>{timeErr}</Text>
      </View>

      <View style={{ alignItems: "center", width: "60%", top: 20 }}>
        <AppButton
          color="primary"
          title="Book Now"
          change={() => {
            bookAppointment();
          }}
        />
      </View>
      <View>
        <Text style={{ color: "red", marginTop: 20, fontWeight: "bold" }}>
          {bookedErr}
        </Text>
      </View>
      <View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          datePickerModeAndroid={"spinner"}
          minimumDate={new Date()}
          maximumDate={new Date(2025, 12, 31)}
          date={new Date()}
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <View>
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={hideTimePicker}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
  },
  picker: {
    // backgroundColor: "rgba(0,0,0,0.65)",
    // color: "rgba(255,255,255,0.7)",
  },
  pickerContainer: {
    backgroundColor: "rgba(0,0,0,0.65)",
    borderRadius: 10,
    // top: 30,
    //bottom: 30,
    width: "80%",
  },
  input: {
    width: "80%",
    height: 45,
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 45,
    // backgroundColor: "rgba(0,0,0,0.65)",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25,
  },
  inputIcons: {
    position: "absolute",
    top: 8,
    left: 10,
  },
  inputContainer: {
    // marginTop: 15,
    top: 30,
  },
  text: {
    fontSize: 16,
    color: "rgba(255,255,255,0.7)",
    paddingTop: 8,
    left: -30,
  },
  // button: {
  //   backgroundColor: colors.primary,
  //   borderRadius: 10,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   padding: 10,
  //   height: 45,
  //   marginVertical: 10,
  //   width: "40%",
  // },
  // buttonText: {
  //   color: "#fff",
  //   fontSize: 18,
  //   fontFamily: "Roboto",
  //   textTransform: "uppercase",
  //   fontWeight: "bold",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
export default BookAppointmentScreen;
