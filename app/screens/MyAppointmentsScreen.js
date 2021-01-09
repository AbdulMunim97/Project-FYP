import React, { useState, useEffect } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import Header from "../components/Header";
import ListItem from "../components/ListItem";
import AsyncStorage from "@react-native-async-storage/async-storage";

function MyAppointmentsScreen(props) {
  const [appointments, setAppointments] = useState("");
  // async function getAppointments(token) {
  //   await fetch("https://sar-server.herokuapp.com/myappointments", {
  //     headers: {
  //       Authorization: "Bearer " + token,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //       setAppointments(result);
  //     })

  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  useEffect(() => {
    AsyncStorage.getItem("jwt").then((res) => {
      fetch("https://sar-server.herokuapp.com/myappointments", {
        headers: {
          Authorization: "Bearer " + res,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setAppointments(result);
        })

        .catch((error) => {
          console.log(error);
        });
      // getAppointments(res);
    });
  }, []);
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <View>
        <Header title={"My Appointments"} />
      </View>
      {appointments.map((item) => {
        return (
          <ListItem
            key={item._id}
            title={item.time}
            subTitle={new Date(item.date).toLocaleDateString("en-gb")}
            name={item.barber}
          />
        );
      })}
      {/* <ListItem
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
      /> */}
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default MyAppointmentsScreen;
