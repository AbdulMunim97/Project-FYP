import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import BookAppointmentScreen from "../screens/BookAppointmentScreen";
import HairCutRecommenderScreen from "../screens/HairCutRecommenderScreen";

import colors from "../config/colors";
import FeedNavigator from "./FeedNavigator";
import AppointmentNavigator from "./AppointmentNavigator";
import RecommenderNavigator from "./RecommenderNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: colors.primary,
      activeTintColor: colors.white,
      inactiveTintColor: colors.black,
      inactiveBackgroundColor: colors.light,
    }}
  >
    <Tab.Screen
      name="Home"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Appointments"
      component={AppointmentNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="calendar" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Find Hairstyle"
      component={RecommenderNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="magnify" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);
export default AppNavigator;
