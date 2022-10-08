import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import DropDownPicker from "react-native-dropdown-picker";

import { AuthContext } from "../contexts/AuthContext";

function AddMealScreen(props) {
  const navigation = useNavigation();
  const route = useRoute();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  const { newMeal } = route.params;
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    const url = "http://" + IpAddress + ":8080/api/food/allFood";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setItems(result);
      })
      .catch((err) => {
        console.log("Aaaaand it is an error: ", err);
      });
  });

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

      <DropDownPicker
        schema={{
          label: "food_name",
          value: "id",
        }}
        searchable={true}
        searchPlaceholder="Find your food"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        containerStyle={styles.dropDownContainer}
        onSelectItem={(item) => {
          navigation.navigate("AddMeal3", {
            newMeal: newMeal,
            food: item,
          });
        }}
      />

      <View style={styles.itemContainer}>
        <Text style={{ fontSize: 25 }}>Selected Items:</Text>
        {newMeal.food.map((items, i) => {
          return (
            <View style={styles.row} key={i}>
              <Text style={{ fontSize: 15 }}>{items.foodname} </Text>
              <Text style={{ fontSize: 15 }}>{items.no_of_servings}</Text>
            </View>
          );
        })}
      </View>

      <Pressable
        style={styles.nextButton}
        onPress={() => {
          navigation.navigate("Today", { newMeal: newMeal });
          url =
            "http://" +
            IpAddress +
            ":8080/api/foodLog/" +
            userId +
            "/addFoodLog";
          const meal_type = newMeal.type_of_meal;
          newMeal.food.map((items) => {
            fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                foodname: items.foodname,
                no_of_servings: items.no_of_servings,
                type_of_meal: meal_type,
              }),
            }).catch((err) => console.log("Post error " + err));
          });
        }}
      >
        <Text style={{ fontSize: 25, color: "white" }}>Add meal</Text>
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
  dropDownContainer: {
    marginVertical: "10%",
    width: "85%",
  },
  itemContainer: {
    justifyContent: "flex-start",
    width: "85%",
    paddingBottom: "10%",
  },
  nextButton: {
    width: 300,
    height: 60,
    backgroundColor: "#8F9467",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 700,
    position: "absolute",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 3,
  },
});

export default AddMealScreen;
