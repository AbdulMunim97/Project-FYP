import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import colors from "../config/colors";
import AppText from "../components/AppText";

function Card({ title, description, price, image}) {
    return (
        <View style={styles.card}>
            <Image  style={styles.image} source={image}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.price}>{price}</AppText>
                <AppText style={styles.description}>{description}</AppText>    
           </View>
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
    detailsContainer:{
        padding: 20,
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        marginBottom: 7,
        color: colors.white,
        fontWeight: "bold",
        fontSize: 20
    },
    description: {
        color: colors.white, 
    },
    price: {
        color: colors.white,
    }    
})

export default Card;