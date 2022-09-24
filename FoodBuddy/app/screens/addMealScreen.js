import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MultipleChoice from "react-native-multiple-choice-picker";
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

      <View style={styles.choiceContainer}>
        <Text style={{ fontSize: 20, paddingLeft: 8 }}> Type of meal: </Text>
        <MultipleChoice
          onPress={(choice) => setSelected(choice)}
          chosenIndex={selected}
          direction={"column"}
          choices={["Breakfast", "Lunch", "Dinner", "Snack"]}
          chosenColor={"#8C7A7A"}
          chosenTextColor={"#8C7A7A"}
        />
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
