import React from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ServicesScreen from "../screens/ServicesScreen";
import DealsScreen from "../screens/DealsScreen";

const Stack = createStackNavigator();

const FeedNavigator = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#aa3a3a" },
      headerTintColor: "white",
      headerTitleAlign: "center",
    }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerLeft: ({ color }) => (
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="menu"
              color={color}
              size={30}
              onPress={() => navigation.openDrawer()}
            />
          </TouchableOpacity>
        ),
      }}
    />
    <Stack.Screen name="Deals" component={DealsScreen} />
    <Stack.Screen name="Products" component={ProductsScreen} />
    <Stack.Screen name="Services" component={ServicesScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
