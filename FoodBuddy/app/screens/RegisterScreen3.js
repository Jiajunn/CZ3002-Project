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

export default function RegisterScreen3({route}) {
  const navigation = useNavigation();
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
        <Pressable
          onPress={()=>{
            navigation.goBack()
          }}>
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
        </Pressable>
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
        Do you smoke?
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
          paddingTop: 10,
          width: 275,
          height: 45,
          marginLeft: 30,
          marginTop: 30,
        }}
        onPress={()=>{
          user.smokingStatus= smokingString;
          let temp = user.height;
          user.height = parseInt(temp, 'decimal');
          temp = user.weight; 
          user.weight = parseInt(temp, 'decimal');
          console.log({...user})
          fetch(`http://${IpAddress}/api/auth/signin`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({...user})
          })
          .then((res) => {
            return res.json();
          })
          .then((result) => {
            if(result.success == true){
              alert("Successfully registered");
              navigation.navigate("Login");
            }
            else{
              alert(result.message);
              navigation.navigate("RegisterScreen"); 
            }
          })}}
      >
        <Text
          
          style={{ textAlign: "center", height: 50, fontSize: 20, flex: 1, color:"white", fontWeight: "500"}}
        >
          REGISTER MY ACCOUNT
        </Text>
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
