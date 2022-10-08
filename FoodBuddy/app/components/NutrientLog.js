import React, { useEffect, useState, useContext } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { BarChart } from "react-native-chart-kit";
import DropDownPicker from "react-native-dropdown-picker";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { AuthContext } from "../contexts/AuthContext";

function getFoodReco() {
  const [reco, setReco] = useState([]);
  const { userId } = useContext(AuthContext);
  const url = "http://" + IpAddress + ":8080/api/food/getFoodRec/" + userId;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      setReco(result);
    })
    .catch((err) => {
      console.log("No food added today maybe? orr", err);
    });
  return reco.slice(0, 3);
}

function retrieveAllNutrients() {}

function NutrientLog(props) {
  var array = [];
  nutrients.map((item) => {
    array.push({ label: item, value: item });
  });
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([
    "Carbs",
    "Protein",
    "Sat Fats",
    "Unsat Fats",
  ]);
  const [items, setItems] = useState(array);
  retrieveAllNutrients();
  const reco = getFoodReco();
  const gotReco = reco.length == 0 ? false : true;

  return (
    <View style={styles.container}>
      <View elevation={5} style={styles.graphContainer}>
        <DropDownPicker
          multiple={true}
          max={4}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          containerStyle={styles.dropDownContainer}
        />
        <Text style={[styles.title, { marginTop: 20 }]}>
          Total Nutrient Intake
        </Text>

        <BarChart
          style={styles.chart}
          data={{
            labels: value,
            datasets: [
              {
                data: [20, 30, 40, 50],
              },
            ],
          }}
          width={300}
          height={300}
          chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 2,
            barPercentage: 0.7,
            propsForVerticalLabels: {
              rotation: -30,
            },
          }}
        />
      </View>

      <View elevation={5} style={styles.recoContainer}>
        <Text style={styles.title}>Suggested Food For You</Text>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollContainer}
        >
          {gotReco &&
            reco.map((item, i) => {
              return (
                <View style={styles.imgtxt} key={i}>
                  <MaterialCommunityIcons name="cup" style={styles.recoImage} />
                  <Text key={i} style={{ fontWeight: "bold" }}>
                    {item.food_name}
                  </Text>
                </View>
              );
            })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
  },
  graphContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 350,
    height: 430,
    padding: 20,
    marginBottom: 30,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  imgtxt: {
    alignItems: "center",
    width: 300,
    borderRadius: 25,
  },
  reco: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
  },
  recoContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 350,
    height: 150,
    padding: 20,
    marginBottom: 30,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  recoImage: {
    fontSize: 50,
  },
  scrollContainer: {
    justifyContent: "space-between",
    width: 900,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default NutrientLog;
