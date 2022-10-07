import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import FoodLog from "../components/FoodLog";
import NutrientLog from "../components/NutrientLog";
import AddMealScreen from "./AddMealScreen";
import AddMealScreen2 from "./AddMealScreen2";
import AddMealScreen3 from "./AddMealScreen3";

const Stack = createNativeStackNavigator();

function TodayMain() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Today" component={TodayScreen} />
        <Stack.Screen name="AddMeal" component={AddMealScreen} />
        <Stack.Screen name="AddMeal2" component={AddMealScreen2} />
        <Stack.Screen name="AddMeal3" component={AddMealScreen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TodayScreen(props) {
  const [food, setFood] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}> Today </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => setFood(true)}
          style={[
            { backgroundColor: food ? "#7e6d6d" : "#E4E0E0" },
            styles.button,
          ]}
        >
          <Text style={styles.buttonText}>Food Log </Text>
        </Pressable>

        <Pressable
          onPress={() => setFood(false)}
          style={[
            { backgroundColor: !food ? "#7e6d6d" : "#E4E0E0" },
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
    height: "11%",
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

export default TodayMain;
