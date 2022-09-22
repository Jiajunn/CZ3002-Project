import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { BarChart } from "react-native-chart-kit";

export class NutrientLog extends Component {
  render() {
    const chartConfig = {
      backgroundColor: "#ffffff",
      backgroundGradientFrom: "#ffffff",
      backgroundGradientTo: "#ffffff",
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
    };
    return (
      <View style={styles.container}>
        <View elevation={5} style={styles.graphContainer}>
          <Text style={styles.title}>Total Nutrient Intake</Text>

          <BarChart
            style={{ marginVertical: 8, borderRadius: 16 }}
            data={{
              labels: ["Protein", "Sodium", "Sugar"],
              datasets: [
                {
                  data: [20, 45, 28],
                },
              ],
            }}
            width={300}
            height={230}
            yAxisSuffix="mg"
            chartConfig={chartConfig}
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
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
  },
  graphContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 350,
    height: 300,
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
