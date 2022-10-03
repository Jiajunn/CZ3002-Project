import React, { Component } from "react";
import { useState } from "react";
import { View, StyleSheet, Text, Pressable, Modal } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

function FoodLogCard(props) {
  const [clicked, setClicked] = useState(false);
  var firstTwo = [];
  if (props.food.length > 1) {
    firstTwo = [props.food[0], props.food[1]];
  } else {
    firstTwo = [props.food[0]];
  }

  return (
    <View elevation={5} style={styles.container}>
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
            <View style={{ paddingHorizontal: 15 }}>
              <Text style={styles.title}>
                {props.type_of_meal} - {props.date}
              </Text>

              {props.food.map((item, i) => {
                return (
                  <View style={styles.row} key={i}>
                    <Text>{item.food_name}</Text>
                    <Text>x{item.no_of_servings}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {props.type_of_meal} - {props.date}
        </Text>

        {firstTwo.map((item, i) => {
          return (
            <View style={styles.row} key={i}>
              <Text>{item.food_name}</Text>
              <Text>x{item.no_of_servings}</Text>
            </View>
          );
        })}

        <Pressable
          onPress={() => {
            setClicked(!clicked);
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#7f7f7f" : "white",
            },
            { width: 100 },
          ]}
        >
          <Text style={styles.moreInfoButton}>See more info</Text>
        </Pressable>
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
  detailsContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 375,
    height: 600,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  modalContainer: {
    paddingTop: 110,
    alignItems: "center",
    flex: 1,
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
