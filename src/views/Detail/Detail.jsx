import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "../../components/header";

const Detail = () => {
  const { title, url, explanation, daterams, date } = useRoute().params;

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: url }} />
        </View>
        <ScrollView style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.explanation}>{explanation}</Text>
          <Text style={styles.date}>{date}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    padding: 5,
    backgroundColor: "#274C77",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    padding: 5,
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
    backgroundColor: "#CCEFDF",
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
    maxHeight: "30%",
    flex: "auto",
  },
  title: {
    color: "#274C77",
    fontSize: 20,
    fontWeight: "bold",
  },
  explanation: {
    color: "gray",
    fontSize: 17,
    marginTop: 10,
  },
  date: {
    color: "gray",
    fontSize: 12,
    marginTop: 5,
  },
});

export default Detail;
