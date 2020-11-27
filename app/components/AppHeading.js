import React from 'react';
import { Text } from 'react-native';

function AppHeading(props) {
return (
    <Text style={styles.Text}>{children}</Text>
    );
}
const styles = StyleSheet.create({
    text: {
        color: "#fff",
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        },
})


export default AppHeading;