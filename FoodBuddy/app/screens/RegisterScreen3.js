import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { Card } from "react-native-paper";
import { useState } from "react";
import CustomCheckBox from "../components/CustomCheckBox";

export default function RegisterScreen3(props) {
  const [smoking, setSmoking] = useState(false);
  const [smokingString, setSmokingString] = useState("noo")
  const handleClick =(textValue, setCheckbox, isChecked)=>{
    if(textValue!= smokingString){
      setSmokingString(textValue)
      setCheckbox(!isChecked)
    }
  }
  return (
    <View style={styles.container}>
      <Card
        style={{
          backgroundColor: "#8F9467",
          height: 140,
          margin: -40,
          marginBottom: 40,
        }}
      >
        <Text
          style={{
            fontSize: 26,
            marginTop: 87,
            marginLeft: 100,
            color: "white",
          }}
        >
          Back
        </Text>
      </Card>
      <Text
        style={{
          fontSize: 25,
          marginLeft: 20,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Smoking Habits
      </Text>
      <Text style={{ fontSize: 20, marginLeft: 20, marginBottom: 10 }}>
        Do you smoke? {smokingString}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 20,
          marginLeft: 10,
        }}
      >
        <CustomCheckBox textValue="Yes" isChecked={smoking} setCheckbox={setSmoking} handleClick={handleClick}></CustomCheckBox>
        <CustomCheckBox textValue="No" isChecked={!smoking} setCheckbox={setSmoking} handleClick={handleClick}></CustomCheckBox>
      </View>
      {/* <Text
        style={{
          fontSize: 25,
          marginLeft: 20,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Food Allergies
      </Text>
      <Text style={{ fontSize: 20, marginLeft: 20, marginBottom: 10 }}>
        Do you have any food allergies?
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 20,
          marginLeft: 10,
        }}
      >
        <TouchableOpacity style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Yes"
            placeholderTextColor="#003f5c"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="No"
            placeholderTextColor="#003f5c"
          />
        </TouchableOpacity>
      </View> */}
      <TouchableOpacity
        style={{
          backgroundColor: "#8F9467",
          width: 275,
          height: 45,
          marginLeft: 30,
          marginTop: 30,
        }}
      >
        <TextInput
          style={{ textAlign: "center", height: 50, fontSize: 20, flex: 1 }}
          placeholder="REGISTER MY ACCOUNT"
          placeholderTextColor="white"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 0,
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: 100,
    height: 45,
    marginRight: 50,
    marginBottom: 10,
    alignItems: "left",
    borderWidth: 3,
  },
  TextInput: {
    height: 50,
    fontSize: 20,
    flex: 1,
    padding: 8,
    marginLeft: 20,
  },
});
