import React from "react";
import { useState } from "react";
import { View, ImageBackground, StyleSheet, Text } from "react-native";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";

import AppButton from "../components/AppButton";
import Header from "../components/Header";

function BookAppointmentScreen({ navigation }) {
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
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    console.warn("A Time has been picked: ", time);
    hideTimePicker();
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

      <View style={styles.button}>
        <AppButton color="primary" title="Pick Date" change={showDatePicker} />

        {/* <AppButton
          color="secondary"
          title="Pick Time"
          change={showTimePicker}
        /> */}
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
        <RNPickerSelect
          //placeholder={"Select a Barber"}
          onValueChange={(value) => console.log(value)}
          items={[
            { label: "Football", value: "football" },
            { label: "Baseball", value: "baseball" },
            { label: "Hockey", value: "hockey" },
          ]}
        />
      </View>
      <View style={{ alignItems: "center", padding: 15 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 22,
          }}
        >
          Select a Timeslot
        </Text>
      </View>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          //placeholder={"Select a Barber"}

          onValueChange={(value) => console.log(value)}
          items={[
            { label: "Football", value: "football" },
            { label: "Baseball", value: "baseball" },
            { label: "Hockey", value: "hockey" },
          ]}
        />
      </View>
      <View style={{ alignItems: "center", width: "60%", top: 20 }}>
        <AppButton color="primary" title="Book Now" />
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
});
export default BookAppointmentScreen;
