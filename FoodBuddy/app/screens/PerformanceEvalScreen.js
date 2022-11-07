import React from "react";
import { useState, useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import { AuthContext } from "../contexts/AuthContext";
import PerformanceChart from "../components/PerformanceChart";

export default function PerformanceEvalScreen(props) {
  const { userId } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [days, setDays] = useState({ healthy: 0, unhealthy: 0 });
  const [chartWidth, setChartWidth] = useState(null);
  const [labelArray, setLabelArray] = useState(null);
  const [dataArray, setDataArray] = useState(null);
  const [recommendedArray, setRecommendedArray] = useState(null);
  const [openPeriod, setOpenPeriod] = useState(false);
  const [periodValue, setPeriodValue] = useState(null);
  const [periodItems, setPeriodItems] = useState([
    { label: "Last Month", value: "Last Month" },
    { label: "This Month", value: "This Month" },
    { label: "Last 7 days", value: "Last 7 Days" },
  ]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Calorie", value: "Calorie" },
    { label: "Calcium", value: "Calcium" },
    { label: "Carbohydrates", value: "Carbohydrates" },
    { label: "Potassium", value: "Potassium" },
    { label: "Protein", value: "Protein" },
    { label: "Sodium", value: "Sodium" },
    { label: "Sugar", value: "Sugar" },
    { label: "VitaminA", value: "VitaminA" },
    { label: "VitaminB2", value: "VitaminB2" },
    { label: "VitaminC", value: "VitaminC" },
    { label: "VitaminD", value: "VitaminD" },
    { label: "Zinc", value: "Zinc" },
  ]);

  //functions
  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };
  const getStrReco = (curStr) => {
    switch (curStr) {
      case "Calorie":
        return "calorieAmount";
      case "Calcium":
        return "calciumAmount";
      case "Carbohydrates":
        return "carbohydrateAmount";
      case "Potassium":
        return "potassiumAmount";
      case "Protein":
        return "proteinAmount";
      case "Sodium":
        return "sodiumAmount";
      case "Sugar":
        return "sugarAmount";
      case "VitaminA":
        return "vitaminAAmount";
      case "VitaminB2":
        return "vitaminB2Amount";
      case "VitaminC":
        return "vitaminCAmount";
      case "VitaminD":
        return "vitaminDAmount";
      case "Zinc":
        return "zincAmount";
    }
  };

  const getDates = () => {
    let today = new Date();
    let startDate = new Date();
    switch (periodValue) {
      case "Last 7 Days":
        startDate.setDate(startDate.getDate() - 6);
        break;
      case "This Month":
        startDate.setDate(1);
        break;
      case "Last Month":
        startDate = new Date(today.getFullYear(), today.getMonth() - 1, 2);
        today = new Date(today.getFullYear(), today.getMonth(), 1);
        break;
    }
    return { startDate, today };
  };
  const setArrays = (nutrientReco, userHistory) => {
    const { startDate, today } = getDates();
    let daysInMon = 0;
    let res = 0;
    let data = [];
    let recArr = [];
    let labels = [];
    let day = 0;
    const nutrient = nutrientReco[getStrReco(value)];
    let unhealthy = 0;
    switch (periodValue) {
      case "Last 7 Days":
        setChartWidth(285);
        daysInMon = daysInMonth(
          startDate.getMonth() + 1,
          startDate.getFullYear()
        );
        day = startDate.getDate();
        for (let i = 0; i < 7; i++) {
          (day + i) % daysInMon == 0
            ? labels.push(daysInMon)
            : labels.push((day + i) % daysInMon);
          recArr.push(nutrient);
        }
        for (let i = 0; i < 7; i++) {
          let resultLength = userHistory.length;
          if (res > resultLength) {
            data.push(0);
          } else {
            if (labels[i] == Number(userHistory[res].date.slice(-2))) {
              data.push(userHistory[res].nutrientAmount);
              if (userHistory[res].nutrientAmount > nutrient) {
                unhealthy++;
              }
              res++;
            } else {
              data.push(0);
            }
          }
        }
        daysInMon = 7;
        break;
      case "Last Month":
        setChartWidth(800);
        daysInMon = daysInMonth(
          startDate.getMonth() + 1,
          startDate.getFullYear()
        );
        day = startDate.getDate();
        for (let i = 1; i <= daysInMon; i++) {
          labels.push(i);
          recArr.push(nutrient);
        }
        for (let i = 0; i < daysInMon; i++) {
          let resultLength = userHistory.length;
          if (res > resultLength) {
            data.push(0);
          } else {
            if (labels[i] == Number(userHistory[res].date.slice(-2))) {
              data.push(userHistory[res].nutrientAmount);
              if (userHistory[res].nutrientAmount > nutrient) {
                unhealthy++;
              }
              res++;
            } else {
              data.push(0);
            }
          }
        }
        break;
      case "This Month":
        daysInMon = daysInMonth(
          startDate.getMonth() + 1,
          startDate.getFullYear()
        );
        const width = daysInMon * 26;
        setChartWidth(width < 230 ? 230 : width);
        day = today.getDate();
        for (let i = 1; i <= Number(day); i++) {
          labels.push(i);
          recArr.push(nutrient);
        }
        for (let i = 0; i < Number(day); i++) {
          let resultLength = userHistory.length;
          if (res > resultLength) {
            data.push(0);
          } else {
            if (labels[i] == Number(userHistory[res].date.slice(-2))) {
              data.push(userHistory[res].nutrientAmount);
              if (userHistory[res].nutrientAmount > nutrient) {
                unhealthy++;
              }
              res++;
            } else {
              data.push(0);
            }
          }
        }
        break;
    }
    const healthy = daysInMon - unhealthy;
    setDays({ healthy, unhealthy });
    setRecommendedArray(recArr);
    setLabelArray(labels);
    setDataArray(data);
    setShow(true);
  };
  const onChangeField = () => {
    setShow(false);
    const { startDate, today } = getDates();
    if (value != null && periodValue != null) {
      const start = startDate.toISOString().slice(0, 10);
      const end = today.toISOString().slice(0, 10);
      fetchData(start, end);
    }
  };
  const fetchData = (start, end) => {
    Promise.all([
      fetch(
        `http://${IpAddress}:8080/api/nutrient_intake_recommendation/getLatestRec/${userId}`
      ),
      fetch(
        `http://${IpAddress}:8080/api/report/getHistorical${value}Data/${userId}/${start}/${end}`
      ),
    ])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()]);
      })
      .then(([data1, data2]) => {
        setRecommendedArray(data1);
        setDataArray(data2);
        if (data2.length == 0) {
          alert("No meals logged during this period");
          setChartWidth(null);
        } else {
          setArrays(data1, data2);
        }
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}> Performance </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          marginLeft: 35,
          zIndex: 2,
        }}
      >
        <Text
          style={{
            fontSize: 23,
            fontWeight: "bold",
            paddingTop: 10,
            paddingRight: 40,
          }}
        >
          Period:
        </Text>
        <DropDownPicker
          listMode="SCROLLVIEW"
          style={styles.dropDownStyle}
          placeholder="Select time period"
          containerStyle={{ width: 230 }}
          dropDownContainerStyle={{
            borderRadius: 30,
            backgroundColor: "#F3EDED",
            borderColor: "transparent",
          }}
          showArrowIcon={true}
          open={openPeriod}
          value={periodValue}
          items={periodItems}
          setOpen={setOpenPeriod}
          setValue={setPeriodValue}
          setItems={setPeriodItems}
          closeAfterSelecting={true}
          onChangeValue={onChangeField}
        ></DropDownPicker>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          marginLeft: 35,
          zIndex: 1,
        }}
      >
        <Text
          style={{
            fontSize: 23,
            fontWeight: "bold",
            paddingTop: 10,
            paddingRight: 20,
          }}
        >
          Nutrient:
        </Text>
        <DropDownPicker
          listMode="SCROLLVIEW"
          style={styles.dropDownStyle}
          placeholder="Select type of nutrient"
          dropDownContainerStyle={{
            borderRadius: 30,
            backgroundColor: "#F3EDED",
            borderColor: "transparent",
          }}
          containerStyle={{ width: 230 }}
          showArrowIcon={true}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          closeAfterSelecting={true}
          onChangeValue={onChangeField}
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
            {value ? value + " Intake" : "Select nutrient type"}
          </Text>
        </View>
        <ScrollView style={{ minHeight: 230 }} horizontal={true}>
          {!show && (
            <PerformanceChart
              labelArray={[]}
              dataArray={[0]}
              recommendedArray={[0]}
              chartWidth={chartWidth}
            />
          )}
          {show && (
            <PerformanceChart
              labelArray={labelArray}
              dataArray={dataArray}
              recommendedArray={recommendedArray}
              chartWidth={chartWidth}
            />
          )}
        </ScrollView>
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
            No. of healthy days: {show && days.healthy}
          </Text>
          <Text style={{ padding: 10, fontSize: 17, fontWeight: "bold" }}>
            No. of unhealthy days: {show && days.unhealthy}
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
    backgroundColor: "#F3EDED",
    borderRadius: 30,
    width: 230,
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
