import React from 'react';
import { ImageBackground, StyleSheet, ScrollView } from 'react-native';

import ServiceCard from "../components/ServiceCard";

function SkinServicesScreen({ navigation }) {
    return (
      <ImageBackground
        blurRadius={5}
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <ScrollView style={{
          padding: 10,
          paddingTop: 10,
          marginBottom: 5
        }}>
          <ServiceCard
            title="Face Polsih"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            price="Rupees 500\-" 
          />  
          <ServiceCard
            title="Facial"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            price="Rupees 2500\-"
          />
          <ServiceCard
            title="Black Mask"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            price="Rupees 800\-" 
          />  
          <ServiceCard
            title="Threading"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            price="Rupees 250\-"
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

export default SkinServicesScreen;