import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export class FoodLogCard extends Component {
  render() {
    return (
      <View elevation={5} style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Breakfast - 25/08/2022 </Text>

          <View style={styles.row}>
            <Text>Burger, Big Mac, MdDonalds’</Text>
            <Text>x1</Text>
          </View>

          <View style={styles.row}>
            <Text>2-in-1 coffee powder, with creamer </Text>
            <Text>x1</Text>
          </View>

          <Text style={styles.moreInfoButton}>See more info</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
  moreInfoButton: {
    textDecorationLine: "underline",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default FoodLogCard;
