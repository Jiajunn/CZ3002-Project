import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  Pressable,
} from "react-native";
import { Card } from "react-native-paper";
import { useState, useContext } from "react";
import SmokingCheckBox from "../components/SmokingCheckBox";
import { RegisterContext } from "../contexts/RegisterContext";

export default function RegisterScreen3({route}) {
  const {user} = useContext(RegisterContext);
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(true);
  const [smokingString, setSmokingString] = useState("No")
  const handleClick =(textValue, setCheckbox, isChecked, isOtherChecked, setIsOther, setSmokingString)=>{
    if(textValue!= smokingString){
      setCheckbox(!isChecked);
      setIsOther(!isOtherChecked);
      setSmokingString(textValue);
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
        <SmokingCheckBox textValue="Yes" isChecked={yes} setCheckbox={setYes} handleClick={handleClick} isOtherChecked={no} setIsOther={setNo} setSmokingString={setSmokingString}></SmokingCheckBox>
        <SmokingCheckBox textValue="No" isChecked={no} setCheckbox={setNo} handleClick={handleClick} isOtherChecked={yes} setIsOther={setYes} setSmokingString={setSmokingString}></SmokingCheckBox>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#8F9467",
          width: 275,
          height: 45,
          marginLeft: 30,
          marginTop: 30,
        }}
      >
        <Pressable
          onPress={()=>{
            user.smokingStatus= smokingString;
            fetch("http://192.168.0.196:8080/api/auth/signin", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                user
              })
            })
            .then((res) => {
              return res.json();
            })
            .then((result) => {
              console.log(result);
            })}}
          style={{ textAlign: "center", height: 50, fontSize: 20, flex: 1 }}
          // placeholder="REGISTER MY ACCOUNT"
          // placeholderTextColor="white"
        >
          REGISTER MY ACCOUNT
        </Pressable>
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
