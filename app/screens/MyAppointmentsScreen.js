import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import Header from "../components/Header";
import ListItem from "../components/ListItem";

function MyAppointmentsScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <View>
        <Header title={"My Appointments"} />
      </View>
      <ListItem
        title={"10:00 AM hhshshshshs "}
        subTitle={"27th November  hahahahaha2020"}
        name={"Nouman"}
      />
      <ListItem
        title={"10:00 AM "}
        subTitle={"27th November 2020"}
        name={"Nouman"}
      />
      <ListItem
        title={"10:00 AM "}
        subTitle={"27th November 2020"}
        name={"Nouman"}
      />
      <ListItem
        title={"10:00 AM "}
        subTitle={"27th November 2020"}
        name={"Nouman"}
      />
      <ListItem
        title={"10:00 AM "}
        subTitle={"27th November 2020"}
        name={"Nouman"}
      />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default MyAppointmentsScreen;
