import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import DropDownPicker from "react-native-dropdown-picker";

function AddMealScreen(props) {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);
  const [selectedItems, setSelectedItems] = useState([
    { name: "Apple", quantity: "1" },
    { name: "Banana", quantity: "2" },
  ]);

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
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        containerStyle={styles.dropDownContainer}
        onSelectItem={(item) => {
          navigation.navigate("AddMeal3");
        }}
      />

      <View style={styles.itemContainer}>
        <Text style={{ fontSize: 25 }}>Selected Items:</Text>
        {selectedItems.map((items) => {
          return (
            <View style={styles.row}>
              <Text style={{ fontSize: 15 }}>{items.name}</Text>
              <Text style={{ fontSize: 15 }}>{items.quantity}</Text>
            </View>
          );
        })}
      </View>

      <Pressable
        style={styles.nextButton}
        onPress={() => navigation.navigate("Today")}
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
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 3,
  },
});

export default AddMealScreen;
