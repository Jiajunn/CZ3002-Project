import React, { useEffect, useState, useContext } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { BarChart } from "react-native-chart-kit";
import DropDownPicker from "react-native-dropdown-picker";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { AuthContext } from "../contexts/AuthContext";

function NutrientLog(props) {
  var array = [];
  nutrients.map((item) => {
    array.push({ label: item, value: item });
  });
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState(array);
  const [reco, setReco] = useState([]);
  const [nutri, setNutri] = useState([]);
  const [gotReco, setGotReco] = useState(false);
  const { userId } = useContext(AuthContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    Promise.all([
      fetch(
        "http://" +
          IpAddress +
          ":8080/api/report/getTodaysNutrientIntake/" +
          userId
      ).then((value) => value.json()),
      fetch("http://" + IpAddress + ":8080/api/food/getFoodRec/" + userId).then(
        (value) => value.json()
      ),
    ])
      .then((value) => {
        setNutri(value[0]);
        setReco(value[1]);
      })
      .catch((err) => {
        console.log("An error occurred:", err);
      });
  }, []);
  if (reco.length != 0) {
    setGotReco(true);
  }

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
          onChangeValue={() => {
            var newData = [];
            value.map((item) => {
              switch (item) {
                case "Calcium":
                  newData.push(nutri.calciumAmount);
                  break;
                case "Calorie":
                  newData.push(nutri.calorieAmount);
                  break;
                case "Potassium":
                  newData.push(nutri.potassiumAmount);
                  break;
                case "Protein":
                  newData.push(nutri.proteinAmount);
                  break;
                case "VitaminB2":
                  newData.push(nutri.vitaminB2Amount);
                  break;
                case "VitaminA":
                  newData.push(nutri.vitaminAAmount);
                  break;
                case "VitaminC":
                  newData.push(nutri.vitaminCAmount);
                  break;
                case "VitaminD":
                  newData.push(nutri.vitaminDAmount);
                  break;
                case "Sugar":
                  newData.push(nutri.sugarAmount);
                  break;
                case "Sodium":
                  newData.push(nutri.sodiumAmount);
                  break;
                case "Zinc":
                  newData.push(nutri.zincAmount);
                  break;
                case "Carbs":
                  newData.push(nutri.carbohydrateAmount);
                  break;
              }
            });
            setData(newData);
          }}
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
                data: data,
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
          fromZero={true}
          showValuesOnTopOfBars={true}
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
          {!gotReco && (
            <View style={{ justifyContent: "center" }}>
              <Text style={{ fontWeight: "bold" }}>
                You have exceeded one or more nutrient levels, try to eat
                healthier tomorrow!
              </Text>
            </View>
          )}
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
