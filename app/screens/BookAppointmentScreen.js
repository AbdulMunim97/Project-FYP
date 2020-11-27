import React from "react";
import { useState } from "react";
import { View, ImageBackground, StyleSheet } from "react-native";

import DateTimePickerModal from "react-native-modal-datetime-picker";

import AppButton from "../components/AppButton";

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
      <View style={styles.button}>
        <AppButton color="primary" title="Pick Date" change={showDatePicker} />
        <AppButton
          color="secondary"
          title="Pick Time"
          change={showTimePicker}
        />
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
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
  },
});
export default BookAppointmentScreen;
