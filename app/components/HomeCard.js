import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';

import AppText from "../components/AppText";
import colors from "../config/colors";

function HomeCard({title, image}) {
    return (
        <View style={styles.card}>
            <ImageBackground blurRadius={2} style={styles.image} source={image}>
                <AppText style={styles.title}>{title}</AppText>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: "rgba(0,0,0,0.65)",
        marginBottom: 20,
        overflow: "hidden",
        elevation: 4
    },
    image: {
        width: "100%",
        height: 200,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 35,
        fontStyle: "italic",
        //fontFamily: "Architect's daughter"
    },
    
})

export default HomeCard;