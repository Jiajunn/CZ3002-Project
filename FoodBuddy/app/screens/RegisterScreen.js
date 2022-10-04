import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";

export default function RegisterScreen(props) {
  const navigation = useNavigation();
  const [newUser, setUser] = useState({ 
    username: "", 
    email: "", 
    password: "", 
    firstName: "", 
    lastName: "", 
    height: "", 
    weight: "", 
    date: "", 
    gender: "", 
    chronicDiseases: "", 
    smokingStatus: "" 
  })

  const handleChange = (name) =>(value) => {
  }
  
  return (
    <View style={styles.container}>
      <Card
        style={{
          backgroundColor: "#8F9467",
          height: 140,
          margin: -40,
          marginBottom: 45,
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
          Register
        </Text>
      </Card>
      <View>
        <Text
          style={{
            fontSize: 25,
            marginLeft: 20,
            fontWeight: "bold",
            marginBottom: 50,
          }}
        >
          Personal Information
        </Text>
        <View style={{ marginLeft: 40 }}>
          <TouchableOpacity style={styles.inputView}>
            <TextInput
              onChange={handleChange("title")}
              style={styles.TextInput}
              placeholder="Username"
              placeholderTextColor="#003f5c"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#003f5c"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputView}>
            <TextInput

              style={styles.TextInput}
              placeholder="Weight(kg)"
              placeholderTextColor="#003f5c"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputView}>
            <TextInput

              style={styles.TextInput}
              placeholder="Height(cm)"
              placeholderTextColor="#003f5c"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputView}>
            <TextInput

              style={styles.TextInput}
              placeholder="Birth date"
              placeholderTextColor="#003f5c"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputView}>
            <TextInput

              style={styles.TextInput}
              placeholder=" Gender"
              placeholderTextColor="#003f5c"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#8F9467",
              width: 235,
              height: 45,
              marginTop: 30,
            }}
            onPress={() => navigation.navigate("RegisterScreen2")}
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
    backgroundColor: "#F3EDED",
    borderRadius: 30,
    width: 235,
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
