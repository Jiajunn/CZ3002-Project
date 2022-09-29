import React, { Component } from "react";
import { useState } from "react";
import { View, StyleSheet, Text, Pressable, Modal } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

function FoodLogCard(props) {
  const [clicked, setClicked] = useState(false);

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
              <Text style={styles.title}>Breakfast - 25/08/2022 </Text>

              <View style={styles.row}>
                <Text>Burger, Big Mac, MdDonalds’</Text>
                <Text>x1</Text>
              </View>

              <View style={styles.row}>
                <Text>2-in-1 coffee powder, with creamer </Text>
                <Text>x1</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>

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
