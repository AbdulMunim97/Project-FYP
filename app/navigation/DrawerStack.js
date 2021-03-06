import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppNavigator from "./AppNavigator";
import AddReviewScreen from "../screens/AddReviewScreen";
import MyReviewsScreen from "../screens/MyReviewsScreen";
import MyAppointmentsScreen from "../screens/MyAppointmentsScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import HelpScreen from "../screens/HelpScreen";
import DrawerContent from "../screens/DrawerContent";
import AllReviewsScreen from "../screens/AllReviewsScreen";
import AuthNavigator from "./AuthNavigator";

const Drawer = createDrawerNavigator();

const DrawNavigator = () => (
  <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
    <Drawer.Screen name="Home" component={AppNavigator} />
    <Drawer.Screen name="Add Review" component={AddReviewScreen} />
    <Drawer.Screen name="My Reviews" component={MyReviewsScreen} />
    <Drawer.Screen name="All Reviews" component={AllReviewsScreen} />
    <Drawer.Screen name="Appointments" component={MyAppointmentsScreen} />
    <Drawer.Screen name="Edit Profile" component={EditProfileScreen} />
    <Drawer.Screen name="Help" component={HelpScreen} />

    <Drawer.Screen name="welcome" component={AuthNavigator} />
  </Drawer.Navigator>
);

export default DrawNavigator;
