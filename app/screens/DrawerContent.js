import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Title, Drawer } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function DrawerContent(props) {
  //   const paperTheme = useTheme();

  //   const { signOut, toggleTheme } = React.useContext(AuthContext);
  const [username, setUsername] = useState("");

  AsyncStorage.getItem("user").then((res) => {
    const name = JSON.parse(res);

    setUsername(name.name);
  });

  // console.log("hello ", JSON.parse(username));
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>
                  {username ? username : "Loading"}
                </Title>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="pencil-box-outline" color={color} size={size} />
              )}
              label="Add Review"
              onPress={() => {
                props.navigation.navigate("Add Review");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="file-document-box-multiple"
                  color={color}
                  size={size}
                />
              )}
              label="My Reviews"
              onPress={() => {
                props.navigation.navigate("My Reviews");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="calendar" color={color} size={size} />
              )}
              label="My Appointments"
              onPress={() => {
                props.navigation.navigate("Appointments");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Edit Profile"
              onPress={() => {
                props.navigation.navigate("Edit Profile");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="help-circle-outline" color={color} size={size} />
              )}
              label="Help"
              onPress={() => {
                props.navigation.navigate("Help");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            AsyncStorage.clear();
            AsyncStorage.getItem("jwt").then((res) => {
              console.log(res);
            });
            props.navigation.navigate("Help");
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;
