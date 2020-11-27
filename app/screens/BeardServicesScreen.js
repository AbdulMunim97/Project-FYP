import React from 'react';
import { ImageBackground, StyleSheet, ScrollView } from 'react-native';

import ServiceCard from "../components/ServiceCard";

function BeardServicesScreen({ navigation }) {
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
            title="Premium Khat"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            price="Rupees 500\-" 
          />  
          <ServiceCard
            title="Beard Trimming"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            price="Rupees 250\-"
          />
          <ServiceCard
            title="Clean Shave"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            price="Rupees 800\-" 
          />  
          <ServiceCard
            title="Beard Conditioning"
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

export default BeardServicesScreen;