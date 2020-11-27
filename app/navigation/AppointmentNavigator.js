import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import BookAppointmentScreen from "../screens/BookAppointmentScreen";

const Stack = createStackNavigator();

const AppointmentNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#aa3a3a" },
      headerTintColor: "white",
      headerTitleAlign: "center",
    }}
  >
    <Stack.Screen
      name="Book Appointment"
      component={BookAppointmentScreen}
      options={{
        headerLeft: ({ color }) => (
          <MaterialCommunityIcons
            name="menu"
            color={color}
            size={30}

            // onPress
            // {...() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

export default AppointmentNavigator;
