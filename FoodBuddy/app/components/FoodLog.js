import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Pressable, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

import FoodLogCard from "./FoodLogCard";
import { AuthContext } from "../contexts/AuthContext";

function sortFood(todayFood) {
  var i = 0;
  var foodLog = [];
  var breakfast = [];
  var lunch = [];
  var dinner = [];
  var snack = [];
  for (let i = 0; i < todayFood.length; i++) {
    switch (todayFood[i].type_of_meal) {
      case "Breakfast":
        breakfast.push({
          food_name: todayFood[i].food_name,
          no_of_servings: todayFood[i].no_of_servings,
        });
        break;
      case "Lunch":
        lunch.push({
          food_name: todayFood[i].food_name,
          no_of_servings: todayFood[i].no_of_servings,
        });
        break;
      case "Dinner":
        dinner.push({
          food_name: todayFood[i].food_name,
          no_of_servings: todayFood[i].no_of_servings,
        });
        break;
      case "Snack":
        snack.push({
          food_name: todayFood[i].food_name,
          no_of_servings: todayFood[i].no_of_servings,
        });
        break;
    }
  }
  if (breakfast.length != 0) {
    foodLog.push(
      <FoodLogCard
        type_of_meal="Breakfast"
        food={breakfast}
        date={TodayDate}
        key={i}
      />
    );
    i++;
  }
  if (lunch.length != 0) {
    foodLog.push(
      <FoodLogCard type_of_meal="Lunch" food={lunch} date={TodayDate} key={i} />
    );
    i++;
  }
  if (dinner.length != 0) {
    foodLog.push(
      <FoodLogCard
        type_of_meal="Dinner"
        food={dinner}
        date={TodayDate}
        key={i}
      />
    );
    i++;
  }
  if (snack.length != 0) {
    foodLog.push(
      <FoodLogCard type_of_meal="Snack" food={snack} date={TodayDate} key={i} />
    );
    i++;
  }
  return foodLog;
}

function FoodLog() {
  const navigation = useNavigation();
  const [todayFood, setTodayFood] = useState();
  const { userId } = useContext(AuthContext);
  const url =
    "http://" + IpAddress + ":8080/api/foodLog/" + userId + "/todayFoodLogs";
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setTodayFood(sortFood(result));
      })
      .catch((err) => {
        console.log("No food added today maybe? orr", err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.scroll}>
        <ScrollView contentContainerStyle={styles.foodLogContainer}>
          {todayFood}
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
