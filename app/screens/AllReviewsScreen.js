import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  RefreshControl,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useIsFocused } from "@react-navigation/native";

import colors from "../config/colors";
import ServiceCard from "../components/ServiceCard";
import Header from "../components/Header";
import { useEffect } from "react";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

function AllReviewsScreen(props) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  const [reviews, setReviews] = useState([]);
  const isFocused = useIsFocused();

  async function getReviews(token) {
    await fetch("https://sar-server.herokuapp.com/allreviews", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setReviews(result);
        console.log(result);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    AsyncStorage.getItem("jwt").then((res) => {
      getReviews(res);
    });
  }, [isFocused]);

  return (
    <ImageBackground
      //blurRadius={5}
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <Header title={"All Reviews"} />
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
        {reviews.map((item) => {
          return (
            <View style={styles.card} key={item._id}>
              <View style={styles.detailsContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
                <Text style={styles.name}>Posted by: {item.postedBy.name}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.65)",
    marginBottom: 20,
    overflow: "hidden",
    elevation: 4,
  },
  detailsContainer: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    marginBottom: 7,
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20,
  },
  description: {
    color: colors.white,
  },
  body: {
    color: colors.white,
  },
  name: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 12,
    marginTop: "7%",
  },
});

export default AllReviewsScreen;
