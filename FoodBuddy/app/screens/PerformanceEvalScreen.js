import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Card } from "react-native-paper";
import { LineChart } from "react-native-chart-kit";
import DropDownPicker from "react-native-dropdown-picker";

export default function PerformanceEvalScreen(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Protein", value: "Protein" },
    { label: "Carbo", value: "Carbo" },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}> Perfomance </Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 35 }}>
        <Text style={{ fontSize: 27, fontWeight: "bold", marginTop: 3 }}>
          {" "}
          Nutrient:{" "}
        </Text>
        {/* <TouchableOpacity style={styles.inputView}>
          <TextInput
            style={{ fontSize: 23, fontWeight: "bold", padding: 5 }}
            placeholder="Protein"
            placeholderTextColor="white"
          />
        </TouchableOpacity> */}
        <DropDownPicker
          style={styles.dropDownStyle}
          labelStyle={{ color: "white" }}
          placeholder="Select type of nutrient"
          placeholderStyle={{ color: "white" }}
          containerStyle={{ width: 190, zIndex: 999 }}
          showArrowIcon={true}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          closeAfterSelecting={true}
        ></DropDownPicker>
      </View>
      <Card
        style={{
          marginTop: 15,
          marginLeft: 35,
          marginRight: 35,
          shadowColor: "#000000",
          shadowOpacity: 0.8,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 1,
          },
        }}
      >
        <View
          style={{
            marginTop: 25,
            marginBottom: 20,
            marginLeft: 15,
            marginRight: 15,
            padding: 10,
            backgroundColor: "#D9D9D9",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {" "}
            {value ? value + " Intake" : "Select nutrient type"}
          </Text>
        </View>
        <LineChart
          data={{
            labels: [0, 5, 10, 15, 20, 25, 30],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={320}
          height={230}
          yAxisSuffix="g"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "white",
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "black",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
            marginLeft: 10,
          }}
        />
      </Card>
      <View>
        <Card
          style={{
            marginTop: 20,
            marginLeft: 35,
            marginRight: 35,
            shadowColor: "#000000",
            shadowOpacity: 0.8,
            shadowRadius: 2,
            shadowOffset: {
              height: 1,
              width: 1,
            },
          }}
        >
          <Text style={{ padding: 10, fontSize: 17, fontWeight: "bold" }}>
            No. of healthy days: 18
          </Text>
          <Text style={{ padding: 10, fontSize: 17, fontWeight: "bold" }}>
            No. of healthy days: 10
          </Text>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 0,
  },
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
  dropDownStyle: {
    backgroundColor: "#8F9467",
    borderRadius: 20,
    width: 190,
    height: 45,
    marginBottom: 20,
    paddingTop: 0,
    alignItems: "center",
    borderWidth: 0,
  },
  TextInput: {
    height: 50,
    fontSize: 20,
    flex: 1,
    padding: 8,
    marginLeft: 20,
  },
});
