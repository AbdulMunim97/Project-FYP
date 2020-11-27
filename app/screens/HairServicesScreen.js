import React from 'react';
import { ImageBackground, StyleSheet, ScrollView } from 'react-native';

import ServiceCard from "../components/ServiceCard";

function HairServicesScreen({ navigation }) {
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
          <ServiceCard
            title="Hair Cut"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            price="Rupees 500\-" 
          />  
          <ServiceCard
            title="Hair Styling"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            price="Rupees 250\-"
          />
          <ServiceCard
            title="Hair Polish"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            price="Rupees 800\-" 
          />  
          <ServiceCard
            title="Rebonding"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            price="Rupees 2500\-"
          />    
        </ScrollView>  
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center"
  },
});

export default HairServicesScreen;