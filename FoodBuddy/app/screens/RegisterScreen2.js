import * as React from "react";
import { useState, useContext } from "react";
import { Pressable } from "react-native";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomCheckBox from "../components/CustomCheckBox";
import { RegisterContext } from "../contexts/RegisterContext";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function RegisterScreen2({ route }) {
  const navigation = useNavigation();
  const { user } = useContext(RegisterContext);
  const [arthritis, setArthritis] = useState(false);
  const [cancer, setCancer] = useState(false);
  const [alzeimers, setAlzeimers] = useState(false);
  const [osteoporosis, setOsteoporosis] = useState(false);
  const [diabeties, setDiabeties] = useState(false);
  const [heartDiesease, setHeartDisease] = useState(false);
  const [respiratoryDiesease, setRespiratoryDisease] = useState(false);
  const [obesity, setObesity] = useState(false);
  const [diseaseArray, setDiseaseArray] = useState([]);

  const handleClick = (textValue, setCheckbox, isChecked) => {
    diseaseArray.includes(textValue)
      ? setDiseaseArray((diseaseArray) =>
          diseaseArray.filter((i) => i != textValue)
        )
      : setDiseaseArray([...diseaseArray, textValue]);
    setCheckbox(!isChecked);
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
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          Medical Conditions
        </Text>
        <Text style={{ fontSize: 17, marginBottom: 10 }}>
          You may choose more than 1 option:
        </Text>

        <View>
          <CustomCheckBox
            handleClick={handleClick}
            isChecked={cancer}
            setCheckbox={setCancer}
            textValue="Cancer"
          ></CustomCheckBox>
          <CustomCheckBox
            handleClick={handleClick}
            isChecked={alzeimers}
            setCheckbox={setAlzeimers}
            textValue="Alzeimers"
          ></CustomCheckBox>
          <CustomCheckBox
            handleClick={handleClick}
            isChecked={osteoporosis}
            setCheckbox={setOsteoporosis}
            textValue="Osteoporosis"
          ></CustomCheckBox>
          <CustomCheckBox
            handleClick={handleClick}
            isChecked={diabeties}
            setCheckbox={setDiabeties}
            textValue="Diabetes"
          ></CustomCheckBox>
          <CustomCheckBox
            handleClick={handleClick}
            isChecked={heartDiesease}
            setCheckbox={setHeartDisease}
            textValue="Heart Disease"
          ></CustomCheckBox>
          <CustomCheckBox
            handleClick={handleClick}
            isChecked={respiratoryDiesease}
            setCheckbox={setRespiratoryDisease}
            textValue="Respiratory Disease"
          ></CustomCheckBox>
          <CustomCheckBox
            handleClick={handleClick}
            isChecked={obesity}
            setCheckbox={setObesity}
            textValue="Obesity"
          ></CustomCheckBox>
          <CustomCheckBox
            handleClick={handleClick}
            isChecked={arthritis}
            setCheckbox={setArthritis}
            textValue="Arthritis"
          ></CustomCheckBox>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#8F9467",
                width: 235,
                height: 45,
                marginTop: 30,
              }}
              onPress={() => {
                user.chronicDiseases = diseaseArray.toString();
                navigation.navigate("RegisterScreen3");
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  height: 50,
                  fontSize: 20,
                  flex: 1,
                  color: "white",
                  marginTop: 9,
                }}
              >
                NEXT
              </Text>
            </TouchableOpacity>
          </View>
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
});
