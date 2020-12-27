import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppNavigator from "./AppNavigator";
import ProfileScreen from "../screens/ProfileScreen";
import ProfileNavigator from "./ProfileNavigator";
import AddReviewScreen from "../screens/AddReviewScreen";
import MyReviewsScreen from "../screens/MyReviewsScreen";
import MyAppointmentsScreen from "../screens/MyAppointmentsScreen";
import HelpScreen from "../screens/HelpScreen";
import AuthNavigator from "./AuthNavigator";

const Drawer = createDrawerNavigator();

const DrawNavigator = (props) => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={AppNavigator} />
    <Drawer.Screen name="Add Review" component={AddReviewScreen} />
    <Drawer.Screen name="My Reviews" component={MyReviewsScreen} />
    <Drawer.Screen name="Appointments" component={MyAppointmentsScreen} />
    <Drawer.Screen name="Help" component={HelpScreen} />
    <Drawer.Screen name="Sign Out" component={AuthNavigator} />
  </Drawer.Navigator>
);

export default DrawNavigator;
