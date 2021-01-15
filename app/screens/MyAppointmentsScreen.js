import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  RefreshControl,
} from "react-native";

import colors from "../config/colors";
import { useIsFocused } from "@react-navigation/native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Header from "../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

function MyAppointmentsScreen(props) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  const [appointments, setAppointments] = useState([]);
  const isFocused = useIsFocused();
  async function getAppointments(token) {
    await fetch("https://sar-server.herokuapp.com/myappointments", {
      headers: {
        Authorization: "Bearer " + token,
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
  }

  useEffect(() => {
    AsyncStorage.getItem("jwt").then((res) => {
      console.log(res);

      getAppointments(res);
    });
  }, [isFocused]);

  const deleteAppointment = (appointmentid) => {
    AsyncStorage.getItem("jwt").then((res) => {
      fetch(
        `https://sar-server.herokuapp.com/deleteappointment/${appointmentid}`,
        {
          method: "delete",
          headers: {
            Authorization: "Bearer " + res,
          },
        }
      )
        .then((res) => res.json())
        .then((result) => {
          const newData = appointments.filter((item) => {
            return item._id !== result._id;
          });
          setAppointments(newData);
        });
    });
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <View>
        <Header title={"My Appointments"} />
      </View>
      <ScrollView
        style={{
          padding: 20,
          paddingTop: 20,
          marginBottom: 5,
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {appointments.map((item) => {
          return (
            <View style={styles.container} key={item._id}>
              <Text style={(styles.title, styles.text)}>{item.time}</Text>
              <Text style={styles.subTitle}>
                {new Date(item.date).toLocaleDateString("en-gb")}
              </Text>
              <Text style={styles.subTitle}>{item.barber}</Text>

              <TouchableOpacity>
                <Icon
                  name={"delete"}
                  size={30}
                  color={colors.primary}
                  onPress={() => {
                    deleteAppointment(item._id);
                  }}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      {/* <ListItem
            key={item._id}
            title={item.time}
            subTitle={new Date(item.date).toLocaleDateString("en-gb")}
            name={item.barber}
            // iconFunction={this.deleteAppointment(item._id)}
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
  text: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Roboto",
    textTransform: "capitalize",
    fontWeight: "400",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    top: 5,
    marginBottom: 5,
    flexDirection: "row",
    padding: 20,
    backgroundColor: colors.backgroundColor,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    padding: 5,
    color: colors.color,
  },
  icon: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 45,
    marginVertical: 10,
    width: "15%",
  },
});

export default MyAppointmentsScreen;
