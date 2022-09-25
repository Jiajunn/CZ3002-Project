import React, { Component } from "react";
import { Text, View, StyleSheet, Pressable, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

import FoodLogCard from "./FoodLogCard";

function FoodLog() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.scroll}>
        <ScrollView contentContainerStyle={styles.foodLogContainer}>
          <FoodLogCard />
        </ScrollView>
      </View>

      <Pressable
        onPress={() => {
          navigation.navigate("AddMeal");
        }}
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
    width: "85%",
    borderRadius: 9,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    marginTop: 30,
  },
  container: {
    width: "100%",
    marginTop: 40,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    height: "100%",
  },
  foodLogContainer: {
    paddingTop: 5,
    paddingHorizontal: 5,
  },
  scroll: {
    alignItems: "center",
    height: "65%",
  },
});
export default FoodLog;
