import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
// import BookAppointmentScreen from "../screens/BookAppointmentScreen";
// import ProductsScreen from "../screens/ProductsScreen";
// import ServicesScreen from "../screens/ServicesScreen";
// import ProfileScreen from "../screens/ProfileScreen";
// import HairCareScreen from "../screens/HairCareScreen";
// import SkinCareScreen from "../screens/SkinCareScreen";
// import BeardCareScreen from "../screens/BeardCareScreen";
// import DealsScreen from "../screens/DealsScreen";
// import HairServicesScreen from "../screens/HairServicesScreen";
// import SkinServicesScreen from "../screens/SkinServicesScreen";
// import BeardServicesScreen from "../screens/BeardServicesScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#aa3a3a" },
      headerTintColor: "white",
      headerTitleAlign: "center",
    }}
  >
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
    {/* <Stack.Screen name="Book Appointment" component={BookAppointmentScreen} />
    <Stack.Screen name="Products" component={ProductsScreen} />
    <Stack.Screen name="Services" component={ServicesScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Hair Care" component={HairCareScreen} />
    <Stack.Screen name="Skin Care" component={SkinCareScreen} />
    <Stack.Screen name="Beard Care" component={BeardCareScreen} />
    <Stack.Screen name="Deals" component={DealsScreen} />
    <Stack.Screen name="Hair Services" component={HairServicesScreen} />
    <Stack.Screen name="Skin Services" component={SkinServicesScreen} />
    <Stack.Screen name="Beard Services" component={BeardServicesScreen} /> */}
  </Stack.Navigator>
);

export default AuthNavigator;
