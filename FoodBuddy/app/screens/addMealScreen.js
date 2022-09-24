import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";

function AddMealScreen(props) {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <View style={styles.backButton}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color="white" />
          </Pressable>
          <Text style={styles.bannerText}> Add new meal </Text>
        </View>
      </View>

      <Pressable
        style={styles.nextButton}
        onPress={() => navigation.navigate("AddMeal2")}
      >
        <Text style={{ fontSize: 25, color: "white" }}>NEXT</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#8F9467",
    width: "100%",
    height: "11%",
    justifyContent: "flex-end",
    paddingTop: "5%",
  },
  backButton: {
    flexDirection: "row",
    paddingLeft: 25,
    marginBottom: 10,
  },
  bannerText: {
    fontSize: 30,
    color: "white",
  },
  choiceContainer: {
    paddingVertical: "10%",
    width: "80%",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "column",
  },
  nextButton: {
    width: 300,
    height: 60,
    backgroundColor: "#8F9467",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddMealScreen;
