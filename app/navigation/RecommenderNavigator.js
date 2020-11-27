import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HairCutRecommenderScreen from "../screens/HairCutRecommenderScreen";

const Stack = createStackNavigator();

const RecommenderNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#aa3a3a" },
      headerTintColor: "white",
      headerTitleAlign: "center",
    }}
  >
    <Stack.Screen
      name="Haircut Recommender"
      component={HairCutRecommenderScreen}
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

export default RecommenderNavigator;
