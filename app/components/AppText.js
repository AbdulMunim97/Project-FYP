import React from 'react';
import { Text, StyleSheet } from 'react-native';

function AppText({ children, style }) {
    return (
    <Text style={[styles.text, style]}>{children}</Text>
    );
}
const styles = StyleSheet.create({
    text: {
        color: "#fff",
        fontSize: 14,
        fontFamily: "Roboto",
        textTransform: "capitalize",
        fontWeight: "400",
        alignItems: "center",
        justifyContent: "center",
      },
})

export default AppText;