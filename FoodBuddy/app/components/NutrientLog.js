import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  ScrollView,
  Modal,
} from "react-native";
import { BarChart } from "react-native-chart-kit";
import DropDownPicker from "react-native-dropdown-picker";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";

import { AuthContext } from "../contexts/AuthContext";

function NutrientLog(props) {
  var array = [];
  nutrients.map((item) => {
    array.push({ label: item, value: item });
  });
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState(array);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState([]);
  const [items2, setItems2] = useState([
    { label: "Mains", value: "mains" },
    { label: "Drinks", value: "drinks" },
  ]);
  const [mains, setMains] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [nutri, setNutri] = useState([]);
  const { userId } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [reco, setReco] = useState({});

  useEffect(() => {
    Promise.all([
      fetch(
        "http://" +
          IpAddress +
          ":8080/api/report/getTodaysNutrientIntake/" +
          userId
      ).then((value) => value.json()),
      fetch(
        "http://" + IpAddress + ":8080/api/food/getFoodRecBeverages/" + userId
      ).then((value) => value.json()),
      fetch(
        "http://" + IpAddress + ":8080/api/food/getFoodRecMain/" + userId
      ).then((value) => value.json()),
      fetch(
        "http://" +
          IpAddress +
          ":8080/api/nutrient_intake_recommendation/getLatestRec/" +
          userId
      ).then((value) => value.json()),
    ])
      .then((value) => {
        setNutri(value[0]);
        setDrinks(value[1]);
        setMains(value[2]);
        setReco(value[3]);
      })
      .catch((err) => {
        setNutri({
          calciumAmount: 0,
          calorieAmount: 0,
          carbohydrateAmount: 0,
          potassiumAmount: 0,
          proteinAmount: 0,
          sodiumAmount: 0,
          sugarAmount: 0,
          vitaminAAmount: 0,
          vitaminB2Amount: 0,
          vitaminCAmount: 0,
          vitaminDAmount: 0,
          zincAmount: 0,
        });
        console.log("An error occurred:", err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Modal
        visible={clicked}
        transparent={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.detailsContainer}>
            <View style={styles.closeButton}>
              <Pressable
                onPress={() => setClicked(false)}
                style={styles.closeButton}
              >
                <Entypo name="cross" style={{ fontSize: 30 }} />
              </Pressable>
            </View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 23,
                paddingLeft: 20,
                textDecorationLine: "underline",
              }}
            >
              Detailed Nutrients:
            </Text>
            <View style={{ paddingHorizontal: 15, paddingTop: 20 }}>
              {delete reco.date}
              {Object.keys(reco).map((item, i) => {
                const num = Object.values(reco);
                const todayNum = Object.values(nutri);
                var unit = " ";
                switch (item) {
                  case "carbohydrateAmount":
                    unit = "g";
                    break;
                  case "potassiumAmount":
                    unit = "mg";
                    break;
                  case "vitaminAAmount":
                    unit = "mcg";
                    break;
                  case "sugarAmount":
                    unit = "g";
                    break;
                  case "vitaminDAmount":
                    unit = "iu";
                    break;
                  case "zincAmount":
                    unit = "mg";
                    break;
                  case "calciumAmount":
                    unit = "mg";
                    break;
                  case "vitaminCAmount":
                    unit = "mg";
                    break;
                  case "vitaminB2Amount":
                    unit = "mg";
                    break;
                  case "calorieAmount":
                    unit = "kcal";
                    break;
                  case "proteinAmount":
                    unit = "g";
                    break;
                  case "sodiumAmount":
                    unit = "mg";
                    break;
                }
                if (todayNum[i] > num[i]) {
                  return (
                    <View key={i} style={styles.row}>
                      <Text>
                        {item.replace("Amount", "").charAt(0).toUpperCase() +
                          item.replace("Amount", "").slice(1)}
                        :
                      </Text>
                      <Text style={{ fontWeight: "bold", color: "red" }}>
                        {todayNum[i]} / {num[i]} {unit}
                      </Text>
                    </View>
                  );
                } else {
                  if (item == "vitaminB2Amount") {
                    return (
                      <View key={i} style={styles.row}>
                        <Text>
                          {item.replace("Amount", "").charAt(0).toUpperCase() +
                            item.replace("Amount", "").slice(1)}
                          :
                        </Text>
                        <Text style={{ fontWeight: "bold" }}>
                          0 / {num[i]} {unit}
                        </Text>
                      </View>
                    );
                  } else {
                    return (
                      <View key={i} style={styles.row}>
                        <Text>
                          {item.replace("Amount", "").charAt(0).toUpperCase() +
                            item.replace("Amount", "").slice(1)}
                          :
                        </Text>
                        <Text style={{ fontWeight: "bold" }}>
                          {todayNum[i]} / {num[i]} {unit}
                        </Text>
                      </View>
                    );
                  }
                }
              })}
            </View>
          </View>
        </View>
      </Modal>
      <View elevation={5} style={styles.graphContainer}>
        <DropDownPicker
          style={{
            backgroundColor: "transparent",
            borderColor: "black",
            borderRadius: 30,
          }}
          dropDownContainerStyle={{
            borderColor: "black",
            backgroundColor: "white",
            borderRadius: 30,
          }}
          multiple={true}
          max={4}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Select nutrients"
          onChangeValue={() => {
            var newData = [];
            value.map((item) => {
              switch (item) {
                case "Calcium/mg":
                  newData.push(nutri.calciumAmount);
                  break;
                case "Calorie/kcal":
                  newData.push(nutri.calorieAmount);
                  break;
                case "Potassium/mg":
                  newData.push(nutri.potassiumAmount);
                  break;
                case "Protein/g":
                  newData.push(nutri.proteinAmount);
                  break;
                case "VitaminB2/mg":
                  newData.push(nutri.vitaminB2Amount);
                  break;
                case "VitaminA/mcg":
                  newData.push(nutri.vitaminAAmount);
                  break;
                case "VitaminC/mg":
                  newData.push(nutri.vitaminCAmount);
                  break;
                case "VitaminD/iu":
                  newData.push(nutri.vitaminDAmount);
                  break;
                case "Sugar/g":
                  newData.push(nutri.sugarAmount);
                  break;
                case "Sodium/mg":
                  newData.push(nutri.sodiumAmount);
                  break;
                case "Zinc/mg":
                  newData.push(nutri.zincAmount);
                  break;
                case "Carbs/g":
                  newData.push(nutri.carbohydrateAmount);
                  break;
              }
            });
            setData(newData);
          }}
        />
        <View
          style={{
            marginVertical: 10,
            marginLeft: 15,
            marginRight: 15,
            padding: 10,
            backgroundColor: "#D9D9D9",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Total Nutrient Intake
          </Text>
        </View>

        <BarChart
          data={{
            labels: value,
            datasets: [
              {
                data: data,
              },
            ],
          }}
          width={300}
          height={290}
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
        <View
          style={{ flexDirection: "row", alignItems: "center", paddingTop: 10 }}
        >
          <Text style={styles.title}>Suggested Items</Text>
          {mains.length != 0 && (
            <DropDownPicker
              open={open2}
              value={value2}
              items={items2}
              setOpen={setOpen2}
              setValue={setValue2}
              setItems={setItems2}
              placeholder="Mains/Drinks"
              style={{
                backgroundColor: "transparent",
                borderColor: "black",
                borderRadius: 30,
                width: "31%",
                marginLeft: 40,
              }}
              dropDownContainerStyle={{
                borderColor: "black",
                backgroundColor: "white",
                borderRadius: 30,
                width: "31%",
                marginLeft: 40,
              }}
            />
          )}
        </View>

        {mains.length != 0 && (
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.scrollContainer}
          >
            {mains.length != 0 &&
              value2 == "mains" &&
              mains.map((item, i) => {
                return (
                  <View style={styles.imgtxt} key={i}>
                    <MaterialCommunityIcons
                      name="food-takeout-box"
                      style={styles.recoImage}
                    />
                    <Text key={i} style={{ fontWeight: "bold" }}>
                      {item.food_name}
                    </Text>
                  </View>
                );
              })}
            {drinks.length != 0 &&
              value2 == "drinks" &&
              drinks.map((item, i) => {
                return (
                  <View style={styles.imgtxt} key={i}>
                    <MaterialCommunityIcons
                      name="cup"
                      style={styles.recoImage}
                    />
                    <Text key={i} style={{ fontWeight: "bold" }}>
                      {item.food_name}
                    </Text>
                  </View>
                );
              })}
          </ScrollView>
        )}
        {mains.length == 0 && nutri.calorieAmount != 0 && (
          <View
            style={{
              paddingTop: 20,
              alignItems: "center",
            }}
          >
            <Text style={{ paddingBottom: 10 }}>
              You have exceeded one or more nutrient levels, try to eat
              healthier tomorrow!
            </Text>
            <Pressable
              onPress={() => {
                setClicked(!clicked);
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#7f7f7f" : "white",
                },
              ]}
            >
              <Text style={styles.moreInfoButton}>See more</Text>
            </Pressable>
          </View>
        )}
        {mains.length == 0 && nutri.calorieAmount == 0 && (
          <View
            style={{
              paddingTop: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>
              You have not logged a meal yet!
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    alignItems: "flex-end",
    paddingTop: 5,
    paddingRight: 5,
  },
  container: {
    paddingTop: 45,
  },
  detailsContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 375,
    height: "88%",
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
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
    width: 200,
  },
  modalContainer: {
    paddingTop: 110,
    alignItems: "center",
    flex: 1,
  },
  moreInfoButton: {
    textDecorationLine: "underline",
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
    paddingHorizontal: 20,
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  scrollContainer: {
    width: 600,
    justifyContent: "space-around",
    paddingLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default NutrientLog;
