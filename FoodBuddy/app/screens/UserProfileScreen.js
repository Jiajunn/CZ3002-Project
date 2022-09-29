import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Card } from "react-native-paper";

export default function UserProfileScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}> Profile </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontSize: 25,
            marginLeft: 32,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          User's Profile
        </Text>
        <ImageBackground
          style={{ height: 150, width: 150, marginLeft: 135 }}
          source={require("../assets/user.png")}
        />

        <Text
          style={{
            fontSize: 25,
            marginLeft: 150,
            alignItems: "centre",
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          Username
        </Text>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 3,
            marginBottom: 10,
          }}
        />
        <View style={{ marginLeft: 30 }}>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 10,
              fontWeight: "bold",
              marginBottom: 13,
            }}
          >
            Weight
          </Text>
          <TouchableOpacity style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="72.3kg"
              placeholderTextColor="#003f5c"
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 10,
              fontWeight: "bold",
              marginBottom: 13,
            }}
          >
            Height
          </Text>
          <TouchableOpacity style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="180cm"
              placeholderTextColor="#003f5c"
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 10,
              fontWeight: "bold",
              marginBottom: 13,
            }}
          >
            Gender
          </Text>
          <TouchableOpacity style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Male"
              placeholderTextColor="#003f5c"
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 10,
              fontWeight: "bold",
              marginBottom: 13,
            }}
          >
            Birthdate
          </Text>
          <TouchableOpacity style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="01/01/2022"
              placeholderTextColor="#003f5c"
            />
          </TouchableOpacity>
        </View>
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
  inputView: {
    backgroundColor: "#F3EDED",
    borderRadius: 30,
    width: 325,
    height: 45,
    marginBottom: 20,
    alignItems: "left",
  },
  TextInput: {
    height: 50,
    fontSize: 20,
    flex: 1,
    padding: 8,
    marginLeft: 20,
  },
});
