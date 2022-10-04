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
import { useNavigation } from "@react-navigation/native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function RegisterScreen2(props) {
  const navigation = useNavigation();
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
        </Text>
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="None"
              placeholderTextColor="#003f5c"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Arthritis"
              placeholderTextColor="#003f5c"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Cancer"
              placeholderTextColor="#003f5c"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Alzheimers"
              placeholderTextColor="#003f5c"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Osteoporosis"
              placeholderTextColor="#003f5c"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Diabetes"
              placeholderTextColor="#003f5c"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Heart Disease"
              placeholderTextColor="#003f5c"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Respiratory Disease"
              placeholderTextColor="#003f5c"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Obesity"
              placeholderTextColor="#003f5c"
            />
          </TouchableOpacity>
          <BouncyCheckbox
            style={
              styles.inputView
            }
            size={0}
            text="Custom Checkbox"
            textStyle={styles.TextInput}
            onPress={()=>{
              
            }}
          />


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
  inputView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: 235,
    height: 45,
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
