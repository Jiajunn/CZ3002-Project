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
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function RegisterScreen3({ route }) {
  const navigation = useNavigation();
  const { user } = useContext(RegisterContext);
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(true);
  const [smokingString, setSmokingString] = useState("No");
  const handleClick = (
    textValue,
    setCheckbox,
    isChecked,
    isOtherChecked,
    setIsOther,
    setSmokingString
  ) => {
    if (textValue != smokingString) {
      setCheckbox(!isChecked);
      setIsOther(!isOtherChecked);
      setSmokingString(textValue);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Pressable
          style={{ width: "10%" }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons
            name="chevron-back-outline"
            style={{
              fontSize: 35,
              paddingLeft: 10,
              paddingBottom: 8,
              color: "white",
            }}
          />
        </Pressable>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            paddingTop: 25,
            fontSize: 25,
            marginLeft: 20,
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          Smoking Habits
        </Text>
        <Text style={{ fontSize: 20, marginLeft: 20, marginBottom: 10 }}>
          Do you smoke?
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <SmokingCheckBox
            textValue="Yes"
            isChecked={yes}
            setCheckbox={setYes}
            handleClick={handleClick}
            isOtherChecked={no}
            setIsOther={setNo}
            setSmokingString={setSmokingString}
          ></SmokingCheckBox>
          <SmokingCheckBox
            textValue="No"
            isChecked={no}
            setCheckbox={setNo}
            handleClick={handleClick}
            isOtherChecked={yes}
            setIsOther={setYes}
            setSmokingString={setSmokingString}
          ></SmokingCheckBox>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#8F9467",
            paddingTop: 10,
            width: 275,
            height: 45,
            marginLeft: 30,
            marginTop: 30,
          }}
          onPress={() => {
            user.smokingStatus = smokingString;
            let temp = user.height;
            user.height = parseInt(temp, "decimal");
            temp = user.weight;
            user.weight = parseInt(temp, "decimal");
            console.log({ ...user });
            fetch(`http://${IpAddress}:8080/api/auth/signup`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ ...user }),
            })
              .then((res) => {
                return res.json();
              })
              .then((result) => {
                if (result.success == true) {
                  alert("Successfully registered");
                  navigation.navigate("Login");
                } else {
                  alert(result.message);
                  navigation.navigate("RegisterScreen");
                }
              });
          }}
        >
          <Text
            style={{
              textAlign: "center",
              height: 50,
              fontSize: 20,
              flex: 1,
              color: "white",
              fontWeight: "500",
            }}
          >
            REGISTER MY ACCOUNT
          </Text>
        </TouchableOpacity>
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
  banner: {
    backgroundColor: "#8F9467",
    width: "100%",
    height: "11%",
    justifyContent: "flex-end",
    paddingTop: "5%",
  },
});
