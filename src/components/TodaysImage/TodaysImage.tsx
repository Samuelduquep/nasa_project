import React, { FC } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { PostImage } from "../../types";

const TodaysImage: FC<PostImage> = ({ date, title, url }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: url }} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>View</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignContent: "center",
        backgroundColor: "#AACDFF",
        borderRadius: 15,
        padding: 10,
        marginTop: 15,
        // Sombras para iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        // Sombras para Android
        elevation: 5,
    },
    imageContainer: {
        flex: 1,

    },
    image: {
        width: "auto",
        height: "100%",
        borderRadius: 10,
    },
    titleContainer: {
        backgroundColor: "#EBF3FF",
        borderRadius: 10,
        padding: 10,
        marginTop: 5,
        flex: 0.2,
        justifyContent: "space-between",

    },
    title: {
        color: "#274C77",
        fontSize: 15,
        fontWeight: "bold",
    },
    date: {
        color: "gray",
        fontSize: 12,
    },
    buttonContainer: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#274C77',
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: "uppercase"
    },

})

export default TodaysImage