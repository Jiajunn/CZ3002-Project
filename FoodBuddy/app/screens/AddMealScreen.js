import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

function AddMealScreen(props) {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("Breakfast");

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

      <View style={styles.questionContainer}>
        <Text style={{ fontSize: 25 }}>Type of meal:</Text>
        <Pressable
          style={[
            {
              backgroundColor: selected === "Breakfast" ? "#7f7f7f" : "#E4E0E0",
            },
            styles.question,
          ]}
          onPress={() => setSelected("Breakfast")}
        >
          <Text style={{ fontSize: 20 }}>Breakfast</Text>
        </Pressable>

        <Pressable
          style={[
            {
              backgroundColor: selected === "Lunch" ? "#7f7f7f" : "#E4E0E0",
            },
            styles.question,
          ]}
          onPress={() => setSelected("Lunch")}
        >
          <Text style={{ fontSize: 20 }}>Lunch</Text>
        </Pressable>

        <Pressable
          style={[
            {
              backgroundColor: selected === "Dinner" ? "#7f7f7f" : "#E4E0E0",
            },
            styles.question,
          ]}
          onPress={() => setSelected("Dinner")}
        >
          <Text style={{ fontSize: 20 }}>Dinner</Text>
        </Pressable>

        <Pressable
          style={[
            {
              backgroundColor: selected === "Snack" ? "#7f7f7f" : "#E4E0E0",
            },
            styles.question,
          ]}
          onPress={() => setSelected("Snack")}
        >
          <Text style={{ fontSize: 20 }}>Snack</Text>
        </Pressable>
      </View>

      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#474a33" : "#8F9467" },
          styles.nextButton,
        ]}
        onPress={() =>
          navigation.navigate("AddMeal2", {
            newMeal: {
              type_of_meal: selected,
              food: [],
            },
          })
        }
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
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "column",
  },
  nextButton: {
    width: 300,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  question: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  questionContainer: {
    paddingVertical: "7%",
    width: "80%",
    justifyContent: "space-around",
    height: 300,
  },
});

export default AddMealScreen;
