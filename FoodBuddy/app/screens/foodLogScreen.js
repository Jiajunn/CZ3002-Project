import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import FoodLogCard from "./foodLogCard";

function FoodLogScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}> Today </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#7e6d6d" : "#8C7A7A",
            },
            styles.foodButton,
          ]}
        >
          <Text style={styles.buttonText}>Food Log</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#cec7c7" : "#E4E0E0",
            },
            styles.nutrientButton,
          ]}
        >
          <Text style={styles.buttonText}>Nutrient Log</Text>
        </Pressable>
      </View>

      <View style={styles.foodLogContainer}>
        <FoodLogCard />
        <FoodLogCard />
        <FoodLogCard />
      </View>

      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#7f7f7f" : "white",
          },
          styles.addFoodButton,
        ]}
      >
        <Icon name="pluscircleo" size={25} />
        <Text style={{ color: "black", paddingLeft: 20 }}> Add new meal</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  addFoodButton: {
    top: 50,
    width: "85%",
    borderRadius: 9,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    marginTop: 30,
  },
  banner: {
    backgroundColor: "#8F9467",
    width: "100%",
    height: "10%",
    justifyContent: "flex-end",
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
  },
  foodButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  foodLogContainer: {
    top: 50,
    justifyContent: "space-between",
    width: "85%",
    height: "60%",
  },
  nutrientButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
});
export default FoodLogScreen;
