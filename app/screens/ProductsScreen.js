import React, { useEffect, useState } from "react";
import {
  RefreshControl,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from "react-native";

import Card from "../components/Card";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

function ProductsScreen({ navigation }) {
  const [skin, setSkin] = useState([]);
  const [hair, setHair] = useState([]);
  const [beard, setBeard] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    fetch("https://sar-server.herokuapp.com/allskincare")
      .then((res) => res.json())
      .then((result) => {
        setSkin(result);
      })
      .catch((error) => console.log(error));
    fetch("https://sar-server.herokuapp.com/allhaircare")
      .then((res) => res.json())
      .then((result) => {
        setHair(result);
      })
      .catch((error) => console.log(error));
    fetch("https://sar-server.herokuapp.com/allbeardcare")
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
          padding: 20,
          paddingTop: 20,
          marginBottom: 5,
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {skin.map((item) => {
          return (
            <Card
              key={item._id}
              title={item.title}
              description={item.body}
              price={item.price}
              image={{ uri: item.photo }}
            />
          );
        })}
        {hair.map((item) => {
          return (
            <Card
              key={item._id}
              title={item.title}
              description={item.body}
              price={item.price}
              image={{ uri: item.photo }}
            />
          );
        })}
        {beard.map((item) => {
          return (
            <Card
              key={item._id}
              title={item.title}
              description={item.body}
              price={item.price}
              image={{ uri: item.photo }}
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
export default ProductsScreen;
