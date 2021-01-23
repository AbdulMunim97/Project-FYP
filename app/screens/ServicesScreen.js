import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  RefreshControl,
  ScrollView,
} from "react-native";

import ServiceCard from "../components/ServiceCard";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

function ServicesScreen({ navigation }) {
  const [skin, setSkin] = useState([]);
  const [hair, setHair] = useState([]);
  const [beard, setBeard] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    fetch("https://sar-server.herokuapp.com/allskinservices")
      .then((res) => res.json())
      .then((result) => {
        setSkin(result);
      })
      .catch((error) => console.log(error));
    fetch("https://sar-server.herokuapp.com/allhairservices")
      .then((res) => res.json())
      .then((result) => {
        setHair(result);
      })
      .catch((error) => console.log(error));
    fetch("https://sar-server.herokuapp.com/allbeardservices")
      .then((res) => res.json())
      .then((result) => {
        setBeard(result);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <ScrollView
        style={{
          padding: 10,
          paddingTop: 10,
          marginBottom: 5,
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {skin.map((item) => {
          return (
            <ServiceCard
              key={item._id}
              title={item.title}
              description={item.body}
              price={item.price}
            />
          );
        })}
        {hair.map((item) => {
          return (
            <ServiceCard
              key={item._id}
              title={item.title}
              description={item.body}
              price={item.price}
            />
          );
        })}
        {beard.map((item) => {
          return (
            <ServiceCard
              key={item._id}
              title={item.title}
              description={item.body}
              price={item.price}
            />
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
  buttonContainer: {
    padding: 20,
    width: "80%",
  },
});
export default ServicesScreen;
