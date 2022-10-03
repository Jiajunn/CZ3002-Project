import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

function AddMealScreen(props) {
  const navigation = useNavigation();
  const route = useRoute();
  const [quantity, setQuantity] = useState(1);
  const { newMeal, food } = route.params;

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

      <View style={styles.textContainer}>
        <ScrollView>
          <Text style={styles.text}> {food.food_name} </Text>
        </ScrollView>
      </View>

      <View style={[styles.textContainer, { height: 350 }]}>
        <ScrollView>
          <Text style={styles.text}>
            Values per serving: {"\n"}
            Calcium, mg : {food.calcium_mg} {"\n"}
            Carbohydrage, g : {food.carbohydrate_g} {"\n"}
            Cholesterol, mg : {food.cholesterol_mg} {"\n"}
            Dietary Fibre, g : {food.dietary_fibre_g} {"\n"}
            Energy, kcal : {food.energy_kcal} {"\n"}
            Polyunsaturated Fat, g : {food.polyunsaturated_fat_g} {"\n"}
            Protein, g : {food.protein_g} {"\n"}
            Saturated Fat, g : {food.saturated_fat_g} {"\n"}
            Sodium, mg : {food.sodium_mg} {"\n"}
            Sugar, g : {food.sugar_g} {"\n"}
            Total Fat, g : {food.total_fat_g} {"\n"}
            Trans Fat, mg : {food.trans_fat_mg} {"\n"}
            Vitamin A, mcg : {food.vitamin_A_mcg} {"\n"}
            Vitamin B2, mg : {food.vitamin_B2_mg} {"\n"}
            Vitamin C, mg : {food.vitamin_C_mg} {"\n"}
            Vitamin D, IU : {food.vitamin_D_IU} {"\n"}
            Water, g : {food.water_g} {"\n"}
            Zinc, mg : {food.zinc_mg} {"\n"}
          </Text>
        </ScrollView>
      </View>

      <View style={styles.counter}>
        <Text style={styles.text}> Number of servings</Text>
        <View style={styles.row}>
          <Pressable
            onPress={() => {
              if (quantity <= 1) {
                setQuantity(1);
              } else {
                setQuantity(quantity - 1);
              }
            }}
          >
            <Text style={styles.text}> - </Text>
          </Pressable>
          <Text style={styles.text}> {quantity} </Text>
          <Pressable
            onPress={() => {
              setQuantity(quantity + 1);
            }}
          >
            <Text style={styles.text}> + </Text>
          </Pressable>
        </View>
      </View>

      <Pressable
        style={styles.nextButton}
        onPress={() => {
          newMeal.food.push({
            foodname: food.food_name,
            no_of_servings: quantity,
          });
          navigation.navigate({
            name: "AddMeal2",
            params: { newMeal: newMeal },
            merge: true,
          });
        }}
      >
        <Text style={{ fontSize: 25, color: "white" }}>
          Add {quantity} food item
        </Text>
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
  counter: {
    marginTop: "5%",
    width: "80%",
  },
  text: {
    fontSize: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    textAlign: "left",
  },
  textContainer: {
    marginTop: "10%",
    width: "80%",
    backgroundColor: "#E4E0E0",
    borderRadius: 6,
    height: 50,
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
