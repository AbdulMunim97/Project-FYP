import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, ScrollView } from "react-native";

import ServiceCard from "../components/ServiceCard";

function DealsScreen({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://192.168.100.13:5000/alldeals")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ImageBackground
      //blurRadius={5}
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <ScrollView
        style={{
          padding: 20,
          paddingTop: 20,
          marginBottom: 5,
        }}
      >
        {data.map((item) => {
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
});

export default DealsScreen;
