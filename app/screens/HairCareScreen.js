import React from 'react';
import { ImageBackground, StyleSheet, ScrollView } from 'react-native';

import Card from "../components/Card";

function HairCareScreen({ navigation }) {
    return (
      <ImageBackground
        //blurRadius={5}
        style={styles.background}
        source={require("../assets/background1.jpg")}
      >
        <ScrollView style={{
          padding: 20,
          paddingTop: 20,
          marginBottom: 5
        }}>
          <Card
            title="Shampoo"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            price="500\-" 
            image= {require("../assets/product.jpg")}
          />  
          <Card
            title="Shampoo"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            price="500\-"
            image= {require("../assets/product.jpg")}
          />  
        </ScrollView>  
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default HairCareScreen;