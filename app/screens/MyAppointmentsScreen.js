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
        setAppointments(result);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    AsyncStorage.getItem("jwt").then((res) => {
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

  const renderList = () => {
    if (appointments.length === 0) {
      return [
        <Text
          style={{
            fontSize: 30,
            paddingTop: "50%",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          No Appointments
        </Text>,
      ];
    } else {
      appointments.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      return [
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
          <View
            style={{
              //flex: 1,
              alignSelf: "stretch",
              flexDirection: "row",
              // left: 20,
              marginLeft: "3%",
              borderBottomColor: "black",
              borderBottomWidth: 1,
              borderTopColor: "black",
              borderTopWidth: 1,
            }}
          >
            <View style={{ flex: 1, alignSelf: "stretch" }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Date</Text>
            </View>
            {/* Edit these as they are your cells. You may even take parameters to display different data / react elements etc. */}
            <View style={{ flex: 1, alignSelf: "stretch" }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Time</Text>
            </View>
            <View style={{ flex: 1, alignSelf: "stretch" }}>
              <Text style={{ fontWeight: "bold", fontSize: 20, fontSize: 20 }}>
                Barber
              </Text>
            </View>
            <View style={{ flex: 1, alignSelf: "stretch" }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Cancel</Text>
            </View>
          </View>
          {appointments.map((item) => {
            return (
              <View
                style={{
                  //flex: 1,
                  alignSelf: "stretch",
                  flexDirection: "row",
                  // left: 25,
                  marginLeft: "2%",
                  marginTop: "4%",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    alignSelf: "stretch",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    {new Date(item.date).toLocaleDateString("en-gb")}
                  </Text>
                </View>
                {/* Edit these as they are your cells. You may even take parameters to display different data / react elements etc. */}
                <View
                  style={{
                    flex: 1,
                    alignSelf: "stretch",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    {item.time}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: "stretch",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    {item.barber}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: "stretch",
                    alignItems: "center",
                  }}
                >
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
              </View>
            );
          })}
        </ScrollView>,
      ];
    }
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <View>
        <Header title={"My Appointments"} />
      </View>
      <View>{renderList()}</View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
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
