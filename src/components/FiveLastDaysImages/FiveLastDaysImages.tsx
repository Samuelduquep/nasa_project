import React, { FC } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { PostImage } from "../../types";
import PostImages from "../PostImages";

const FiveLastDaysImages: FC<{ postImages?: PostImage[] }> = ({ postImages }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Last five days</Text>
            <ScrollView style={styles.content}>


                {postImages?.map((postImage, index) => (
                    <PostImages key={index} {...postImage} />
                ))}


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E09F3E",
        padding: 5,
        marginTop: 5,
        borderRadius: 15
    },
    title: {
        fontSize: 15,
        color: "white",
        textAlign: "center",
        margin: 10
    },
    content: {
        flex: 1
    }
})

export default FiveLastDaysImages