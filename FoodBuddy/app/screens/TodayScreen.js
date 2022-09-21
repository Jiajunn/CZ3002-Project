import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

import FoodLog from "../components/FoodLog";
import NutrientLog from "../components/NutrientLog";

function TodayScreen(props) {
  const [food, setFood] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}> Today </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => setFood(true)}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#7e6d6d" : "#8C7A7A",
            },
            styles.button,
          ]}
        >
          <Text style={styles.buttonText}>Food Log</Text>
        </Pressable>

        <Pressable
          onPress={() => setFood(false)}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#cec7c7" : "#E4E0E0",
            },
            styles.button,
          ]}
        >
          <Text style={styles.buttonText}>Nutrient Log</Text>
        </Pressable>
      </View>
      {food && <FoodLog />}
      {!food && <NutrientLog />}
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#8F9467",
    width: "100%",
    height: "10%",
    justifyContent: "flex-end",
    paddingTop: "5%",
  },
  bannerText: {
    fontSize: 30,
    color: "white",
    paddingLeft: 25,
    marginBottom: 10,
  },
  buttonContainer: {
    top: 20,
    flexDirection: "row",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    flexDirection: "column",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
});

export default TodayScreen;
