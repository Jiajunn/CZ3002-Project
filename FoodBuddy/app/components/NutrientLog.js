import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { BarChart } from "react-native-chart-kit";
import DropDownPicker from "react-native-dropdown-picker";

function retrieveAllNutrients() {
  var allNutrients = [];
  const url =
    "http://" +
    IpAddress +
    ":8080/api/report/getHistoricalCalciumData/" +
    UserID +
    "/" +
    TodayDate +
    "/" +
    TodayDate;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      allNutrients.push({ Calorie: result.nutrientAmount });
    })
    .catch((err) => {
      console.log("No food added today maybe? orr", err);
    });
}

function getFoodReco() {}

function NutrientLog(props) {
  const [selectedNutrient, setSelected] = useState([
    "Carbohydrate",
    "Protein",
    "Saturated Fats",
    "Unsaturated Fats",
  ]);

  var array = [];
  nutrients.map((item) => {
    array.push({ label: item, value: item });
  });
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([
    "Carbohydrate",
    "Protein",
    "Saturated Fats",
    "Unsaturated Fats",
  ]);
  const [items, setItems] = useState(array);
  retrieveAllNutrients();

  return (
    <View style={styles.container}>
      <View elevation={5} style={styles.graphContainer}>
        <DropDownPicker
          multiple={true}
          max={5}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          containerStyle={styles.dropDownContainer}
          onChangeValue={() => setSelected(value)}
        />
        <Text style={[styles.title, { marginTop: 20 }]}>
          Total Nutrient Intake
        </Text>

        <BarChart
          style={styles.chart}
          data={{
            labels: selectedNutrient,
            datasets: [
              {
                data: [20, 30, 40, 50],
              },
            ],
          }}
          width={300}
          height={250}
          chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 2,
            barPercentage: 0.7,
            propsForVerticalLabels: {
              rotation: 45,
            },
          }}
        />
      </View>

      <View elevation={5} style={styles.recoContainer}>
        <Text style={styles.title}>Suggested Meal For You</Text>
        <View style={styles.reco}>
          <View style={styles.imgtxt}>
            <Image
              style={styles.recoImage}
              source={require("../assets/chickenSalad.jpg")}
            />
            <Text style={{ fontSize: 12 }}> Chicken Salad</Text>
          </View>
          <View style={styles.imgtxt}>
            <Image
              style={styles.recoImage}
              source={require("../assets/chickenSalad.jpg")}
            />
            <Text style={{ fontSize: 12 }}> Chicken Salad</Text>
          </View>
          <View style={styles.imgtxt}>
            <Image
              style={styles.recoImage}
              source={require("../assets/chickenSalad.jpg")}
            />
            <Text style={{ fontSize: 12 }}> Chicken Salad</Text>
          </View>
        </View>
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
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default NutrientLog;
