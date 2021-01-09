import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ServiceCard from "../components/ServiceCard";
import Header from "../components/Header";
import { useEffect } from "react";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

function MyReviewsScreen(props) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  const [reviews, setReviews] = useState([]);

  async function getReviews(token) {
    await fetch("https://sar-server.herokuapp.com/myreviews", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setReviews(result);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    AsyncStorage.getItem("jwt").then((res) => {
      getReviews(res);
    });
  }, []);

  return (
    <ImageBackground
      //blurRadius={5}
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <Header title={"My Reviews"} />
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
            <ServiceCard
              key={item._id}
              title={item.title}
              description={item.body}
            />
          );
        })}
        {/* <ServiceCard
          title="Service: Haircut"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price="Review:"
        />
        <ServiceCard
          title="Beard Trimming"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price="Review:"
        />
        <ServiceCard
          title="Service: Facial"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price="Review:"
        />
        <ServiceCard
          title="Service: Clean shave"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price="Review:"
        /> */}
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
});

export default MyReviewsScreen;
