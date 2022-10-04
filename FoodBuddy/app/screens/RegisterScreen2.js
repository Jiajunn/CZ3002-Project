import * as React from "react";
import { useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import CustomCheckBox from "../components/CustomCheckBox";

export default function RegisterScreen2(props) {
  const navigation = useNavigation();
  // const [none, setNone] = useState(false)
  const [arthritis, setArthritis] = useState(false)
  const [cancer, setCancer] = useState(false)
  const [alzeimers, setAlzeimers] = useState(false)
  const [osteoporosis, setOsteoporosis] = useState(false)
  const [diabeties, setDiabeties] = useState(false)
  const [heartDiesease, setHeartDisease] = useState(false)
  const [respiratoryDiesease, setRespiratoryDisease] = useState(false)
  const [obesity, setObesity] = useState(false)
  const [diseaseArray, setDiseaseArray] = useState([])

  const handleClick =(textValue, setCheckbox, isChecked)=>{
     diseaseArray.includes(textValue) ? setDiseaseArray(diseaseArray => diseaseArray.filter(i=> i !=textValue)) : setDiseaseArray([...diseaseArray, textValue]);
     setCheckbox(!isChecked);
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
      <View>
        <Text
          style={{
            fontSize: 25,
            marginLeft: 20,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Medical Conditions
        </Text>
        <Text style={{ fontSize: 17, marginLeft: 20, marginBottom: 10 }}>
          You may choose more than 1 option
          {diseaseArray}
        </Text>
        <View style={{ marginLeft: 20 }}>
          {/* <CustomCheckBox textValue="None" isChecked={none} setNone={setNone}></CustomCheckBox> */}
          <CustomCheckBox handleClick={handleClick} isChecked={cancer} setCheckbox={setCancer}textValue="Cancer" ></CustomCheckBox>
          <CustomCheckBox handleClick={handleClick} isChecked={alzeimers} setCheckbox={setAlzeimers}textValue="Alzeimers"></CustomCheckBox>
          <CustomCheckBox handleClick={handleClick} isChecked={osteoporosis} setCheckbox={setOsteoporosis}textValue="Osteoporosis"></CustomCheckBox>
          <CustomCheckBox handleClick={handleClick} isChecked={diabeties} setCheckbox={setDiabeties}textValue="Diabetes"></CustomCheckBox>
          <CustomCheckBox handleClick={handleClick} isChecked={heartDiesease} setCheckbox={setHeartDisease}textValue="Heart Disease"></CustomCheckBox>
          <CustomCheckBox handleClick={handleClick} isChecked={respiratoryDiesease} setCheckbox={setRespiratoryDisease}textValue="Respiratory Disease"></CustomCheckBox>
          <CustomCheckBox handleClick={handleClick} isChecked={obesity} setCheckbox={setObesity}textValue="Obesity"></CustomCheckBox>
          <CustomCheckBox handleClick={handleClick} isChecked={arthritis} setCheckbox={setArthritis}textValue="Arthritis" ></CustomCheckBox>

          <TouchableOpacity
            style={{
              backgroundColor: "#8F9467",
              width: 235,
              height: 45,
              marginTop: 30,
            }}
            onPress={()=> {navigation.navigate("RegisterScreen3")}}
          >
            <Text
              style={{ textAlign: "center", height: 50, fontSize: 20, flex: 1, color:"white", marginTop:8 }}
              // placeholder="NEXT"
              // placeholderTextColor="white"
            > NEXT
            </Text>
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
});
